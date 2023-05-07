import PostsList from '../04-layouts/PostList'
import { usePostStore } from '../../store/postStore'

const Home = () => {
  const { posts } = usePostStore(
  )
  return (
    <div>
          <PostsList
              title='Posts'
              posts={posts}
          />

    </div>
  )
}

export default Home