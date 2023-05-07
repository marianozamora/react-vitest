import React, { useState } from 'react';

interface Post {
    id: number;
    name: string;
}

interface SearchBarProps {
    posts: Post[];
    onSelectPost: (post: Post) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ posts, onSelectPost }) => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<Post[]>([]);

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value;
        setSearchText(searchText);

        // Perform search logic here
        const filteredPosts = posts.filter((post) =>
        post.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredPosts);
    };

    const handlePostSelection = (post: Post) => {
        onSelectPost(post);
        setSearchText('');
        setSearchResults([]);
    };

    return (
        <div className="space-y-2 mr-6">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Search by post name"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="space-y-2">
          {searchResults.map((post) => (
            <li
              key={post.id}
              onClick={() => handlePostSelection(post)}
              className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-md"
            >
              {post.name}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default SearchBar;
