
import {vi} from 'vitest'

vi.mock('../../store/postStore', () => ({
  usePostStoreMock: vi.fn(),
}));

describe('AddPost', () => {
    test('renders form and submits post', () => {
      const addPost = vi.fn();
      vi.fn().mockReturnValue({ addPost });
      const navigate = vi.fn();
      vi.fn().mockReturnValue(navigate);
  });
});
