import Link from "next/link";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { STATIC_POSTS } from "@/lib/static-blogs";

export default async function BlogIndexPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  
  let posts = [];
   try {
      const res = await fetch(`${API_URL}/blogs`, { cache: "no-store", next: { tags: ['blogs']} });
      if (res.ok) {
          const fetchedPosts = await res.json();
          posts = [...STATIC_POSTS, ...fetchedPosts];
      } else {
          posts = STATIC_POSTS;
      }
   } catch (e) {
      posts = STATIC_POSTS;
   }

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col font-sans px-6 pt-32 pb-24 text-neutral-200">
      <div className="text-center max-w-3xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-8">
          <BookOpen className="h-3 w-3" /> Live Event Stream
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tighter mb-8 text-[#F8F5F2] leading-[1.05]">
          Architecture <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C37A] to-[#F5F5F0]">Insights.</span>
        </h1>
        <p className="text-xl text-neutral-400 font-light leading-relaxed">
          Deep dives into how the world's leading property developers deploy bespoke Python LLM architectures to eliminate human error entirely.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {posts.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative overflow-hidden bg-[#0A0A0A] border border-white/[0.04] p-10 rounded-3xl transition-all duration-700 hover:border-[#D4AF37]/30 hover:shadow-[0_0_60px_rgba(212,175,55,0.06)] hover:-translate-y-1 block h-full flex-col justify-between">
            <div>
               <div className="flex items-center justify-between mb-6">
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37]">{new Date(post.published_at).toLocaleDateString()}</div>
                {post.id > 100 && <div className="text-[8px] font-bold tracking-widest uppercase text-neutral-600 bg-white/5 px-2 py-0.5 rounded border border-white/5 flex items-center gap-1"><Layers className="h-2 w-2" /> Featured Archive</div>}
               </div>
               <h3 className="text-2xl font-heading font-medium text-white mb-6 group-hover:text-[#F8F5F2] transition-colors line-clamp-2">{post.title}</h3>
               <p className="text-neutral-400 text-sm leading-relaxed mb-10 line-clamp-3">{post.excerpt || post.content.substring(0, 150) + "..."}</p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] opacity-80 group-hover:opacity-100 group-hover:-translate-x-1 transition-all mt-auto p-3 rounded-xl bg-white/[0.02]">
              Decrypt Thread <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
