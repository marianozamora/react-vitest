import NavBar from "../02-molecules/NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <NavBar />
          <SearchBar
              posts={[
                  { id: 1, name: 'Post 1' },
                  { id: 2, name: 'Post 2' },  
                  { id: 3, name: 'Post 3' },
                  { id: 4, name: 'Post 4' },
              ]}
              onSelectPost={(post) => console.log(post)}
              
          />
    </div>
  );
}