import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

const mockPosts = [
  { id: '1', title: 'Post 1', content: 'Content 1', likes: 0, author: '', createdAt: '', updatedAt: '', videoUrl: '', imageUrl: '' },
  { id: '2', title: 'Post 2',content: 'Content 1', likes: 0, author: '', createdAt: '', updatedAt: '', videoUrl: '', imageUrl: '' },
  { id: '3', title: 'Post 3', content: 'Content 1', likes: 0, author: '', createdAt: '', updatedAt: '', videoUrl: '', imageUrl: '' },
];

describe('SearchBar', () => {
    it('displays search results when typing in the search input', () => {
    const onSelectPost = vi.fn();
    const { getByPlaceholderText, getByText } = render(
        <SearchBar posts={mockPosts} onSelectPost={onSelectPost} />
    );

    const searchInput = getByPlaceholderText('Search by post title');

    fireEvent.change(searchInput, { target: { value: 'Post 2' } });

    expect(getByText('Post 2')).toBeDefined();
});

it('calls the onSelectPost callback when a search result is clicked', () => {
    const onSelectPost = vi.fn();
    const { getByPlaceholderText, getByText } = render(
        <SearchBar posts={mockPosts} onSelectPost={onSelectPost} />
    );

    const searchInput = getByPlaceholderText('Search by post title');
    fireEvent.change(searchInput, { target: { value: 'Post 2' } });

    const searchResult = getByText('Post 2');
    fireEvent.click(searchResult);

    expect(onSelectPost).toHaveBeenCalledWith(mockPosts[1]);
});
});
