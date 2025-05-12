import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

// Only import node modules in server-side code
type FSModule = typeof import('fs');
type PathModule = typeof import('path');
let fs: FSModule;
let path: PathModule;  
let postsDirectory: string;

// Dynamically import server-only modules
if (typeof window === 'undefined') {
  // Using dynamic imports for server-only modules
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  fs = require('fs');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  path = require('path');
  postsDirectory = path.join(process.cwd(), 'app/blog/posts');
}

export interface PostMetadata {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export interface Post extends PostMetadata {
  contentHtml: string;
}

// Pre-fetched posts data to use on client
let postsCache: PostMetadata[] | null = null;

export async function getSortedPostsData(): Promise<PostMetadata[]> {
  // Return cached data if available (for client-side)
  if (postsCache) return postsCache;

  // Server-side only code
  if (typeof window === 'undefined') {
    try {
      // Ensure posts directory exists
      if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true });
        return [];
      }

      // Get file names under /posts
      const fileNames = fs.readdirSync(postsDirectory);
      
      // Filter out directories and non-markdown files
      const mdFiles = fileNames.filter(fileName => 
        fileName.endsWith('.md') && 
        fs.statSync(path.join(postsDirectory, fileName)).isFile()
      );
      
      const allPostsData = mdFiles.map((fileName: string) => {
        try {
          // Remove ".md" from file name to get id
          const id = fileName.replace(/\.md$/, '');

          // Read markdown file as string
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');

          // Use gray-matter to parse the post metadata section
          const matterResult = matter(fileContents);

          // Combine the data with the id
          return {
            id,
            title: matterResult.data.title || 'Untitled Post',
            date: matterResult.data.date || new Date().toISOString(),
            tags: matterResult.data.tags || [],
            excerpt: matterResult.data.excerpt || '',
          } as PostMetadata;
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          return null;
        }
      }).filter(Boolean) as PostMetadata[];  // Filter out any null entries

      // Sort posts by date
      const sortedPosts = allPostsData.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
      
      // Cache the posts data
      postsCache = sortedPosts;
      return sortedPosts;
    } catch (error) {
      console.error('Error getting sorted posts data:', error);
      return [];
    }
  }
  
  // Return empty array for client-side if no cache
  return [];
}

export async function getAllPostIds(): Promise<Array<{ params: { id: string } }>> {
  // Server-side only code
  if (typeof window === 'undefined') {
    try {
      if (!fs.existsSync(postsDirectory)) {
        return [];
      }
      
      const fileNames = fs.readdirSync(postsDirectory);
      
      // Filter out directories and non-markdown files
      const mdFiles = fileNames.filter(fileName => 
        fileName.endsWith('.md') && 
        fs.statSync(path.join(postsDirectory, fileName)).isFile()
      );
      
      return mdFiles.map((fileName: string) => {
        return {
          params: {
            id: fileName.replace(/\.md$/, ''),
          },
        };
      });
    } catch (error) {
      console.error('Error getting post IDs:', error);
      return [];
    }
  }
  
  return [];
}

export async function getPostData(id: string): Promise<Post> {
  // Server-side only code
  if (typeof window === 'undefined') {
    try {
      const fullPath = path.join(postsDirectory, `${id}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .use(remarkGfm)
        .process(matterResult.content);
        
      const contentHtml = processedContent.toString();

      // Combine the data with the id and contentHtml
      return {
        id,
        contentHtml,
        title: matterResult.data.title || 'Untitled Post',
        date: matterResult.data.date || new Date().toISOString(),
        tags: matterResult.data.tags || [],
        excerpt: matterResult.data.excerpt || '',
      };
    } catch (error) {
      console.error(`Error getting post data for ${id}:`, error);
      throw new Error(`Post not found: ${id}`);
    }
  }
  
  throw new Error('getPostData must be called from server-side code');
}