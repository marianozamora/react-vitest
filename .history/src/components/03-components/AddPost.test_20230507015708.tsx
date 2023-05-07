// import { render, fireEvent, screen, vi } from 'vitest';
// import { usePostStore } from '../../store/postStore';
// import { useNavigate } from 'react-router-dom';
// import AddPost from './AddPost';

vi.mock('../../store/postStore');
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}));

describe('AddPost component', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    test('renders form and handles form submission', async () => {
        const mockAddPost = jest.fn();
        const mockNavigate = jest.fn();
        usePostStore.mockReturnValue({ addPost: mockAddPost });
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

        render(<AddPost />);

        // Fill in form inputs
        await fireEvent.change(screen.getByLabelText('Title:'), {
        target: { value: 'Test Post' }
        });
        await fireEvent.change(screen.getByLabelText('Content:'), {
        target: { value: 'Test content' }
        });

        // Submit the form
        await fireEvent.click(screen.getByText('Save'));

        // Assertions
        expect(mockAddPost).toHaveBeenCalledWith({
        title: 'Test Post',
        content: 'Test content',
        id: '',
        author: '',
        videoUrl: '',
        imageUrl: '',
        createdAt: '',
        updatedAt: '',
        likes: 0
        });
        expect(mockNavigate).toHaveBeenCalledWith('/posts');
    });
});
