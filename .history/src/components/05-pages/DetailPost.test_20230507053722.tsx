import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostStore } from '../../store/postStore';
import DetailPost from '../DetailPost';

vi.mock('react-router-dom', () => ({
useParams: vi.fn(),
useNavigate: vi.fn(),
}));

vi.mock('../../store/postStore', () => ({
usePostStore: vi.fn(),
}));

describe('DetailPost', () => {
    beforeEach(() => {
        useParams.mockReturnValue({ postId: '1' });
        useNavigate.mockReturnValue(vi.fn());
        usePostStore.mockReturnValue({ getPost: vi.fn() });
    });

    test('renders post details', () => {
        const postDetail = {
        id: '1',
        title: 'Test Title',
        content: 'Test Content',
        };

        usePostStore.mockReturnValueOnce({ getPost: vi.fn().mockResolvedValue(postDetail) });

        render(<DetailPost />);

        expect(screen.getByText('Post Details')).toBeInTheDocument();
        expect(screen.getByText('Post ID: 1')).toBeInTheDocument();
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('renders YouTubeVideo component', () => {
        render(<DetailPost />);

        expect(screen.getByTestId('youtube-video')).toBeInTheDocument();
    });

    test('handles edit button click', () => {
        const navigateMock = vi.fn();
        useNavigate.mockReturnValueOnce(navigateMock);

        render(<DetailPost />);

        const editButton = screen.getByText('Editar');
        editButton.click();

        expect(navigateMock).toHaveBeenCalledWith('/posts/edit/1');
    });
});
