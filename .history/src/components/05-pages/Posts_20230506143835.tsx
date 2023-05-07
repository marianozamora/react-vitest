import React from 'react'
import PostsList from '../04-layouts/PostList'
import { usePostStore } from '../../store/postStore'
import {shallow} from 'zustand/shallow'
const Home = () => {
  const [ posts ] = usePostStore(
    (state) => state.posts,
    shallow
  )
  console.log(posts)
  return (
    <div>
          <PostsList
              title='Posts'
              posts={posts]}
          />

    </div>
  )
}

export default Home