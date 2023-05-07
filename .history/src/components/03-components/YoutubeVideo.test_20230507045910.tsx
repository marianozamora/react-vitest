import React from 'react';
import { render } from '@testing-library/react';
import YouTubeVideo from './YoutubeVideo';

describe('YouTubeVideo', () => {
  it('renders the YouTube video with the provided videoId', () => {
    const { getByTitle } = render(<YouTubeVideo videoId="ABC123" />);

    const iframeElement = getByTitle('YouTube Video');
    expect(iframeElement).toBeDefined();
    expect(iframeElement).toHaveProperty('src', 'https://www.youtube.com/embed/ABC123');
  });
});
