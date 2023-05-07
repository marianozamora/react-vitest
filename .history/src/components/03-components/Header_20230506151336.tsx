import NavBar from "../02-molecules/NavBar";
import SearchBar from "./SearchBar";
import { usePostStore } from '../../store/postStore'

export default function Header() {
  const { posts } = usePostStore();
  confirm.log(posts)
  return (
    <div className="flex items-center justify-between ">
      <NavBar />
          <SearchBar
              posts={posts}
              onSelectPost={(post) => console.log(post)}
              
          />
    </div>
  );
}