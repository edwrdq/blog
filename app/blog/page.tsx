import BlogPage from './client-page';
import { getSortedPostsData } from "../lib/posts";

export default async function Blog() {
  // Fetch posts data server-side
  const posts = await getSortedPostsData();
  
  // Pass the data to the client component
  return <BlogPage initialPosts={posts} />;
}