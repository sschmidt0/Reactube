import { createContext, useState } from 'react';

export const VideoContext = createContext();
VideoContext.displayName = 'VideoContext';

export const VideoProvider = props => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [detailedVideo, setDetailedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  return (
    <VideoContext.Provider value={{
      videos,
      setVideos,
      selectedVideo,
      setSelectedVideo,
      detailedVideo,
      setDetailedVideo,
      relatedVideos,
      setRelatedVideos
    }}>
      { props.children }
    </VideoContext.Provider>
  )
};
