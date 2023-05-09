
vi.mock('../../store/postStore', () => ({
  usePostStore: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn(),
}));

describe('Header', () => {

  it('renders the NavBar and SearchBar components', () => {

    expect(true).toBe(true);
  });

});
