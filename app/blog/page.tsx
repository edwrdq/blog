import { format } from "date-fns";
import { getSortedPostsData, getPostData } from "../lib/posts";

export default async function Blog() {
  const allPostsData = getSortedPostsData();
  
  // Since we're statically generating, we can preload all blog posts
  const allPostsWithContent = await Promise.all(
    allPostsData.map(async (postData) => {
      const fullPost = await getPostData(postData.id);
      return fullPost;
    })
  );
  
  return (
    <div className="flex flex-col items-start min-h-screen p-8 bg-background text-foreground max-w-5xl mx-auto">
      {/* Header */}
      <header className="w-full text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <div className="h-1 w-20 bg-foreground mx-auto"></div>
      </header>

      {/* Blog Posts */}
      <main className="w-full">
        {allPostsData.length > 0 ? (
          <div className="space-y-10">
            {allPostsData.map(({ id, date, title, tags, excerpt }) => (
              <article 
                key={id}
                className="bg-[#3c3836] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2 hover:text-[#fabd2f] transition-colors">
                  {title}
                </h2>
                <time className="text-sm text-[#a89984] block mb-3">
                  {format(new Date(date), 'MMMM d, yyyy')}
                </time>
                <p className="text-[#ebdbb2] mb-4">
                  {excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-[#504945] text-[#d5c4a1] rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Display the full blog post content inline */}
                <div 
                  className="mt-8 prose prose-lg prose-invert prose-headings:text-[#fabd2f] prose-a:text-[#83a598] prose-a:hover:underline max-w-none"
                >
                  {allPostsWithContent.find(post => post.id === id) && (
                    <div 
                      dangerouslySetInnerHTML={{ 
                        __html: allPostsWithContent.find(post => post.id === id)?.contentHtml || '' 
                      }}
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No posts yet</h2>
            <p className="text-[#a89984] mb-8">
              Check back soon for new content! In the meantime, check out my latest video:
            </p>
            <div className="w-full max-w-xl mx-auto">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hB7CDrVnNCs?si=p_iJhBXDjjNPI-t3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-64 sm:h-80 md:h-96"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
