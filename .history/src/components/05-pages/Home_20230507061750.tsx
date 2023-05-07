import React from 'react'
import ImageHero from '../03-components/ImageHero'
const Home = () => {
  return (
    <div>
      <ImageHero
        imageUrl='https://loremflickr.com/1200/340
        '
        altText='Hero Image'
      />
      <div className=' p-4 flex justify-between items-center'>
        <div>Left</div>
        <div>Right</div>
      </div>

    </div>
  )
}

export default Home