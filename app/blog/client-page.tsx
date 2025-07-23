'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import BlogPostPreview from '../components/BlogPostPreview';
import TagSelector from '../components/TagSelector';
import { PostMetadata } from '../lib/posts';

interface BlogPageProps {
  initialPosts: PostMetadata[];
}

function BlogPageContent({ initialPosts }: BlogPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tagFromUrl = searchParams ? searchParams.get('tag') : null;
  
  const [posts] = useState<PostMetadata[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<PostMetadata[]>(posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>(tagFromUrl ? [tagFromUrl] : []);
  const [dateFilter, setDateFilter] = useState<string>('');
  
  // Get all unique tags from posts
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort();
  
  // Function to handle tag click
  const handleTagClick = useCallback((tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
      ? prev.filter(t => t !== tag) 
      : [...prev, tag]
    );
  }, []);
  
  // Filter posts whenever filters change
  useEffect(() => {
    let filtered = posts;
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }
    
    // Filter by date
    if (dateFilter) {
      const year = dateFilter.split('-')[0];
      const month = dateFilter.split('-')[1];
      
      filtered = filtered.filter(post => {
        const postDate = new Date(post.date);
        return (
          postDate.getFullYear().toString() === year &&
          (postDate.getMonth() + 1).toString().padStart(2, '0') === month
        );
      });
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedTags, dateFilter, posts]);
  
  // Reset all filters
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedTags([]);
    setDateFilter('');
    
    // Clear URL parameters
    router.push('/blog');
  }, [router]);
  
  // Calculate date range for the date filter
  const dateRange = (() => {
    const dates = posts.map(post => {
      const date = new Date(post.date);
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    });
    return Array.from(new Set(dates)).sort().reverse();
  })();
  
  return (
    <div className="flex flex-col min-h-screen p-6 md:p-8 text-gruvbox-fg1">
      <div className="text-center py-4">
        <Link href="/">
          <button className="bg-gruvbox-blue hover:bg-gruvbox-aqua text-gruvbox-bg0 font-bold py-2 px-4 rounded">
            Return to Main Page
          </button>
        </Link>
      </div>
      {/* Header */}
      <header className="w-full text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gruvbox-yellow">Blog</h1>
        <p className="text-xl text-gruvbox-fg2 max-w-3xl mx-auto">
          Thoughts, insights, and tutorials on web development, programming, and technology.
        </p>
        <div className="h-1 w-20 bg-gruvbox-purple mx-auto mt-6"></div>
      </header>

      {/* Filters Section */}
      <section className="w-full max-w-4xl mx-auto mb-8 bg-gruvbox-bg1 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gruvbox-yellow">Filter Posts</h2>

        {/* Search */}
        <div className="mb-6">
          <label htmlFor="search" className="block text-gruvbox-fg2 mb-2">Search</label>
          <input
            type="text"
            id="search"
            placeholder="Search by title or content..."
            className="w-full p-3 bg-gruvbox-bg0 border border-gruvbox-bg2 rounded-md text-gruvbox-fg1 focus:outline-none focus:ring-2 focus:ring-gruvbox-yellow focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Date Filter */}
        <div className="mb-6">
          <label htmlFor="date-filter" className="block text-gruvbox-fg2 mb-2">Filter by Month</label>
          <select
            id="date-filter"
            className="w-full p-3 bg-gruvbox-bg0 border border-gruvbox-bg2 rounded-md text-gruvbox-fg1 focus:outline-none focus:ring-2 focus:ring-gruvbox-yellow focus:border-transparent"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="">All Dates</option>
            {dateRange.map(date => {
              const [year, month] = date.split('-');
              const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
              const monthName = monthNames[parseInt(month) - 1];
              return (
                <option key={date} value={date}>
                  {monthName} {year}
                </option>
              );
            })}
          </select>
        </div>

        {/* Tags Filter */}
        <TagSelector
          tags={allTags}
          selectedTags={selectedTags}
          onTagClick={handleTagClick}
        />

        {/* Clear Filters Button */}
        {(searchTerm || selectedTags.length > 0 || dateFilter) && (
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-gruvbox-red text-gruvbox-bg0 rounded-md hover:bg-opacity-80 transition-colors"
          >
            Clear Filters
          </button>
        )}
      </section>

      {/* Blog Posts */}
      <main className="w-full max-w-4xl mx-auto" aria-label="Blog posts">
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            <p className="text-gruvbox-fg2">
              Showing {filteredPosts.length} of {posts.length} posts
            </p>
            <div className="space-y-12">
              {filteredPosts.map(post => (
                <BlogPostPreview key={post.id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gruvbox-bg1 rounded-lg shadow-lg border border-gruvbox-bg2">
            <h2 className="text-2xl font-semibold mb-4 text-gruvbox-yellow">No posts found</h2>
            <p className="text-gruvbox-fg2 mb-4 max-w-md mx-auto">
              No posts match your current filters. Try adjusting your search criteria.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-gruvbox-yellow text-gruvbox-bg0 rounded-md hover:bg-opacity-80 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function BlogPage({ initialPosts }: BlogPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPageContent initialPosts={initialPosts} />
    </Suspense>
  );
}