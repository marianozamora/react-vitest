import React, { useState } from 'react';

interface Post {
    id?: string;
    title: string;
    content: string;

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
        post.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredPosts);
    };

    const handlePostSelection = (post: Post) => {
        onSelectPost(post);
        setSearchText('');
        setSearchResults([]);
    };

    return (
        <div className="space-y-2 mr-8">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Search by post title"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="space-y-2">
          {searchResults.map((post) => (
            <li
              key={post.id}
              onClick={() => handlePostSelection(post)}
              className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-md"
            >
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default SearchBar;
