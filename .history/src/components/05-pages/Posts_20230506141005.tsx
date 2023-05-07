import React from 'react'
import PostsList from '../04-layouts/PostList'
import {usePostStore} from '../../store/postStore'
const Home = () => {
  const [posts] = usePostStore(
    (state) => [state.posts, state.honey],
    shallow
  )
  
  return (
    <div>
          <PostsList
              title='Posts'
              posts={[
                  {
                      id: 1,
                      title: 'Post 1',
                      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                  },
                  {
                      id: 2,
                      title: 'Post 2',
                      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                  }
                ]}
          />

    </div>
  )
}

export default Home