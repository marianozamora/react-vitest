import React from 'react';
import { YouTubeVideoProps } from '../../types/interfaces';

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-video">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;






