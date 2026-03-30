"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsGuard() {
  const pathname = usePathname();
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Advanced invisible tracking synced directly to FastAPI
    const emitSession = async () => {
      let sessionId = localStorage.getItem("propflowy_session_id");
      
      const searchParams = new URLSearchParams(window.location.search);
      const utmSource = searchParams.get("utm_source");
      const utmMedium = searchParams.get("utm_medium");
      const utmCampaign = searchParams.get("utm_campaign");
      
      if (!sessionId) {
        sessionId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);
        localStorage.setItem("propflowy_session_id", sessionId);
        
        let clientIp = "Unknown";
        let clientCountry = "Unknown";
        let clientCity = "Unknown";
        
        try {
          const geoRes = await fetch("https://ipapi.co/json/");
          const geoData = await geoRes.json();
          clientIp = geoData.ip || "Unknown";
          clientCountry = geoData.country_name || "Unknown";
          clientCity = geoData.city || "Unknown";
        } catch (e) { }

        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/analytics/session`, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               session_id: sessionId,
               ip_address: clientIp, 
               country: clientCountry,
               city: clientCity,
               device: window.innerWidth < 768 ? "Mobile" : "Desktop",
               browser: navigator.userAgent.substring(0, 50),
               referrer: document.referrer || "Direct",
               utm_source: utmSource,
               utm_medium: utmMedium,
               utm_campaign: utmCampaign
             })
          });
        } catch (e) {
          // Swallow silently - Analytics should never block UI
        }
      }

      // Track the Page View
      if (sessionId) {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/analytics/event`, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               session_id: sessionId,
               event_type: "pageview",
               page_url: window.location.pathname
             })
          });
        } catch (e) { }
      }
    };

    emitSession();

    // Scroll tracker
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) maxScroll = scrollPercent;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Sync state on unmount or page change
    return () => {
      window.removeEventListener("scroll", handleScroll);
      const sessionId = localStorage.getItem("propflowy_session_id");
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      
      if (sessionId) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/analytics/session`, {
           method: "PUT",
           headers: { "Content-Type": "application/json", "Keep-Alive": "true" },
           body: JSON.stringify({
             session_id: sessionId,
             scroll_depth: maxScroll,
             time_on_page: timeSpent
           }),
           keepalive: true // Ensure analytics fire even if tab closes
        }).catch(()=>null);
      }
    };
  }, [pathname]);

  return null;
}
