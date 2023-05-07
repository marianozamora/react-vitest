import React from 'react'
import ImageHero from '../03-components/ImageHero'
import YouTubeVideo from '../03-components/YoutubeVideo'
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
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <YouTubeVideo
            videoId='dQw4w9WgXcQ'
          />
        </div>
        <div className='ml-[2rem]'>
          <aside className='flex'>
            <img width="100" src='https://loremflickr.com/400/400' alt='Aside Image' />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

          </aside>
          <div className='flex mt-8'>
            <img width={100} src='https://loremflickr.com/400/400' alt='Aside Image' />
            <img width={'33%'} src='https://loremflickr.com/400/400' alt='Aside Image' />
            <img width={'33%'} src='https://loremflickr.com/400/400' alt='Aside Image' />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home