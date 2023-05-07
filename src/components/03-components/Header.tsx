import NavBar from "../02-molecules/NavBar";
import SearchBar from "./SearchBar";
import { usePostStore } from '../../store/postStore';
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const { posts } = usePostStore();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between ">
      <NavBar />
          <SearchBar
              posts={posts}
              onSelectPost={(post) => navigate(`posts/${post.id}`)}
          />
    </div>
  );
}