import React from 'react'
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p></p>
    </>
  )
}

export default About