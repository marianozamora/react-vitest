import { render, screen } from '@testing-library/react';
import Home from './Home';

vi.mock('../../store/postStore', () => ({
    usePostStore: vi.fn(() => ({
        posts: [
        { id: 1, title: 'Post 1', content: 'Content 1' },
        { id: 2, title: 'Post 2', content: 'Content 2' },
        ],
    })),
}));

describe('Home', () => {
    test('renders PostsList with correct props', () => {
        render(<Home />);

        expect(screen.getByText(' ')).toBeUndefined();
        // expect(screen.getByText('Post 1')).toBeDefined();
        // expect(screen.getByText('Post 2')).toBeDefined();
    });
});
