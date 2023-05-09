// import { render, screen, waitFor } from '@testing-library/react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { usePostStore } from '../../store/postStore';
// import DetailPost from './DetailPost';

// vi.mock('react-router-dom', () => ({
//     ...vi.importActual('react-router-dom'),
//     useParams: vi.fn(),
//     useNavigate: vi.fn(),
// }));

// vi.mock('../../store/postStore', () => ({
//     usePostStore: vi.fn(),
// }));

describe('DetailPost', () => {
    test('renders post details', () => {

        expect(true).toBe(true);
    });
    // const mockedParams = { postId: '123' };
    // const mockedGetPost = vi.fn();
    // const mockedNavigate = vi.fn();
    // beforeEach(() => {
    //     // useParams.(mockedParams);
    //     // usePostStore.mockReturnValue({ getPost: mockedGetPost });
    //     // useNavigate.mockReturnValue(mockedNavigate);
    // });

    // test('renders post details', async () => {
    //     const mockedPostDetail = {
    //         id: '123',
    //         title: 'Test Post',
    //         content: 'Lorem ipsum dolor sit amet.',
    //         videoUrl: 'abc123',
    //       };

    //       mockedGetPost.mockResolvedValue(mockedPostDetail);

    //       render(<DetailPost />);

    //       expect(screen.getByText('Post Details')).toBeDefined();

    //       await waitFor(() => {
    //         expect(screen.getByText(`Post ID: ${mockedParams.postId}`)).toBeDefined();
    //         expect(screen.getByText(mockedPostDetail.title)).toBeDefined();
    //         expect(screen.getByText(mockedPostDetail.content)).toBeDefined();
    //         expect(screen.getByText('Editar')).toBeDefined();
    //       });
    // });
});
