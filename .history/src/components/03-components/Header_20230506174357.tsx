import NavBar from "../02-molecules/NavBar";
import SearchBar from "./SearchBar";
import { usePostStore } from '../../store/postStore';
import {useNavidate} from 'react-router-dom'

export default function Header() {
  const { posts } = usePostStore();
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