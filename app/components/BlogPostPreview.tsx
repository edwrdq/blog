'use client';

import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PostMetadata } from "../lib/posts";

interface BlogPostPreviewProps {
  post: PostMetadata;
}

export default function BlogPostPreview({ post }: BlogPostPreviewProps) {
  const router = useRouter();
  
  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/blog?tag=${encodeURIComponent(tag)}`);
  };
  
  return (
    <article 
      key={post.id}
      className="bg-[#32302f] p-6 md:p-8 rounded-lg shadow-lg border border-[#504945] hover:shadow-xl transition-all duration-300 hover:border-[#fabd2f]"
    >
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#fabd2f]">
          <Link href={`/blog/posts/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        
        <time 
          dateTime={new Date(post.date).toISOString()}
          className="text-sm text-[#a89984] block mb-3"
        >
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <button 
              key={tag} 
              onClick={(e) => handleTagClick(tag, e)}
              className="px-3 py-1 bg-[#504945] text-[#fbf1c7] rounded-full text-xs cursor-pointer hover:bg-[#665c54] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
        
        <p className="text-lg text-[#d5c4a1] italic border-l-4 border-[#504945] pl-4 py-2">
          {post.excerpt}
        </p>
      </header>
      
      <div className="flex justify-end">
        <Link 
          href={`/blog/posts/${post.id}`}
          className="px-4 py-2 bg-[#504945] text-[#ebdbb2] rounded-md hover:bg-[#665c54] transition-colors"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}