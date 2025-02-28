import { format } from "date-fns";
import { getSortedPostsData, getPostData } from "../lib/posts";
import { Metadata } from "next";

// Set metadata for the blog page
export const metadata: Metadata = {
  title: "Blog | dotMavriQ",
  description: "Thoughts, insights, and tutorials on web development, programming, and tech.",
};

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
    <div className="flex flex-col min-h-screen p-6 md:p-8 bg-[#282828] text-[#ebdbb2]">
      {/* Header */}
      <header className="w-full text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fabd2f]">Blog</h1>
        <p className="text-xl text-[#a89984] max-w-3xl mx-auto">
          Thoughts, insights, and tutorials on web development, programming, and technology.
        </p>
        <div className="h-1 w-20 bg-[#d3869b] mx-auto mt-6"></div>
      </header>

      {/* Blog Posts */}
      <main className="w-full max-w-4xl mx-auto" aria-label="Blog posts">
        {allPostsData.length > 0 ? (
          <div className="space-y-12">
            {allPostsData.map(({ id, date, title, tags, excerpt }) => {
              const postContent = allPostsWithContent.find(post => post.id === id);
              
              return (
                <article 
                  key={id}
                  id={id}
                  className="bg-[#32302f] p-6 md:p-8 rounded-lg shadow-lg border border-[#504945]"
                >
                  <header className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#fabd2f]">
                      {title}
                    </h2>
                    
                    <time 
                      dateTime={new Date(date).toISOString()}
                      className="text-sm text-[#a89984] block mb-3"
                    >
                      {format(new Date(date), 'MMMM d, yyyy')}
                    </time>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-[#504945] text-[#fbf1c7] rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-lg text-[#d5c4a1] italic border-l-4 border-[#504945] pl-4 py-2">
                      {excerpt}
                    </p>
                  </header>
                  
                  {/* Blog post content */}
                  <div 
                    className="prose prose-lg max-w-none
                    prose-headings:text-[#fabd2f] 
                    prose-h1:text-3xl prose-h1:font-bold 
                    prose-h2:text-2xl prose-h2:font-semibold 
                    prose-h3:text-xl prose-h3:font-semibold
                    prose-p:text-[#ebdbb2] prose-p:leading-relaxed
                    prose-a:text-[#83a598] prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-[#fe8019] prose-strong:font-bold
                    prose-em:text-[#b8bb26] prose-em:italic
                    prose-code:text-[#fb4934] prose-code:bg-[#3c3836] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-[#3c3836] prose-pre:text-[#ebdbb2] prose-pre:p-4 prose-pre:rounded-lg
                    prose-blockquote:border-l-4 prose-blockquote:border-[#b16286] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[#d3869b]
                    prose-ul:text-[#ebdbb2] prose-ol:text-[#ebdbb2]
                    prose-li:my-1"
                    dangerouslySetInnerHTML={{ __html: postContent?.contentHtml || '' }}
                  />
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#32302f] rounded-lg shadow-lg border border-[#504945]">
            <h2 className="text-2xl font-semibold mb-4 text-[#fabd2f]">No posts yet</h2>
            <p className="text-[#a89984] mb-8 max-w-md mx-auto">
              Check back soon for new content! I&apos;m working on some exciting posts to share with you.
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
                className="w-full aspect-video rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}