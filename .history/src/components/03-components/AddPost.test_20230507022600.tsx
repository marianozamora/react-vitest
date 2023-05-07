import { vi } from 'vitest';
import { usePostStore } from '../../store/postStore';
// import { useNavigate } from 'react-router-dom';
import AddPost from './AddPost';
import { render } from 'react-dom';

vi.mock('../../store/postStore');
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}));

describe('AddPost component', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    test('should call addPost function on button click', () => {
        const addPostMock = vi.fn();
        // vi.spyOn(usePostStore, 'usePostStore').mockReturnValue({
        //     ...usePostStore(),
        //     addPost: addPostMock,
        //   });

        render(<AddPost />);
        const titleInput = screen.getByLabelText('Title:');
        const contentTextarea = screen.getByLabelText('Content:');
        const saveButton = screen.getByText('Save');

        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(contentTextarea, { target: { value: 'Test Content' } });
        fireEvent.click(saveButton);

        expect(addPostMock).toHaveBeenCalledWith({
            title: 'Test Title',
            content: 'Test Content',
            id: '',
            author: '',
            videoUrl: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
            likes: 0,
        });
    });
});
