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
        <div>
        <input
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            placeholder="Search by post name"
        />
        <ul>
            {searchResults.map((post) => (
            <li key={post.id} onClick={() => handlePostSelection(post)}>
                {post.name}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default SearchBar;
