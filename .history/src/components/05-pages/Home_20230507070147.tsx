import React from 'react'
import ImageHero from '../03-components/ImageHero'
import YouTubeVideo from '../03-components/YoutubeVideo'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ImageHero
        imageUrl='https://loremflickr.com/1200/340
        '
        altText='Hero Image'
      />
      <div className=' p-4 flex justify-between items-top'>
        <div className='max-w-[40%]'>
          <h1 className='text-3xl font-bold'>Initial Text</h1>
          <p className='text-md mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <YouTubeVideo
            videoId='dQw4w9WgXcQ'
          />
          <Link 
            to='/posts'
            className='bg-blue-500 text-white py-2 px-4 rounded-md mt-4 inline-block hover:bg-blue-600'
          />
        </div>
        <div className='ml-[2rem]'>
          <aside className='flex'>
            <img width="100" src='https://loremflickr.com/400/400' alt='Aside Image' />
            <p className='text-md ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

          </aside>
          <div className='flex mt-8 justify-between'>
            <img width={'32%'} src='https://loremflickr.com/400/400' alt='Aside Image' />
            <img width={'32%'} src='https://loremflickr.com/400/400' alt='Aside Image' />
            <img width={'32%'} src='https://loremflickr.com/400/400' alt='Aside Image' />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home