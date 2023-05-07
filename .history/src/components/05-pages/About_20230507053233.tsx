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
      <h1 className="text-bold txt-large">About</h1>
      <p>{ lorem.generateParagraphs(4) }</p>
    </>
  )
}

export default About