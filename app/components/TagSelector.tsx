'use client';

interface TagSelectorProps {
  tags: string[];
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

export default function TagSelector({ tags, selectedTags, onTagClick }: TagSelectorProps) {
  return (
    <div>
      <h3 className="text-[#d5c4a1] mb-2">Filter by Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-[#fabd2f] text-[#282828]'
                : 'bg-[#504945] text-[#fbf1c7] hover:bg-[#665c54]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}