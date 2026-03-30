import { ArrowLeft, Clock, CalendarDays, User, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STATIC_POSTS } from "@/lib/static-blogs";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  
  let post = null;
   try {
      const res = await fetch(`${API_URL}/blogs/${params.slug}`, { cache: "no-store", next: { tags: [`blog-${params.slug}`]} });
      if (res.ok) {
        post = await res.json();
      } else {
        post = STATIC_POSTS.find(p => p.slug === params.slug);
      }
   } catch (e) {
      post = STATIC_POSTS.find(p => p.slug === params.slug);
   }

   if (!post) return notFound();

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col font-sans px-6 pt-32 pb-24 text-neutral-200">
      <Link href="/blog" className="inline-flex items-center text-[#D4AF37] hover:text-white transition-colors mb-10 text-xs font-bold uppercase tracking-widest bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full w-fit hover:bg-white/5">
        <ArrowLeft className="h-3 w-3 mr-2" /> Back to Insights
      </Link>
      
      <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mb-6 uppercase tracking-widest">
        <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-[#D4AF37]" /> {new Date(post.published_at).toLocaleDateString()}</span>
        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#D4AF37]" /> 5 Min Read</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-10 text-[#F8F5F2] leading-[1.1]">
        {post.title}
      </h1>
      
      {post.cover_image && (
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed space-y-6">
        {post.content.split('\n').map((paragraph: string, i: number) => (
           <p key={i} className={paragraph.startsWith('#') ? "text-white font-medium text-xl mt-8 mb-4 border-b border-white/10 pb-2" : ""}>
             {paragraph.startsWith('#') ? paragraph.replace(/#/g, '') : paragraph}
           </p>
        ))}
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="h-12 w-12 rounded-full bg-[#050505] flex items-center justify-center text-[#D4AF37] font-bold text-xl border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
               <User className="h-5 w-5" />
             </div>
             <div className="flex flex-col">
               <span className="text-sm font-bold text-white uppercase tracking-widest">{post.author || "PropFlowy Architects"}</span>
               <span className="text-xs text-neutral-500">Systems Engineering Team</span>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
             {post.tags?.split(',').map((tag: string, i: number) => (
                <span key={i} className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-400">
                  <Tag className="h-2.5 w-2.5 text-[#D4AF37]" /> {tag.trim()}
                </span>
             ))}
          </div>
      </div>
    </div>
  );
}
