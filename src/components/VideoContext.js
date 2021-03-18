import { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();
VideoContext.displayName = 'VideoContext';

export const VideoProvider = props => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [detailedVideo, setDetailedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [favouriteVideos, setFavouriteVideos] = useState([]);
  const [favoriteVideoItem, setFavoriteVideoItem] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem('favouriteVideos');
    console.log('locaData: ', localData);
    const favourites = localData.length !== undefined ? JSON.parse(localData) : [];
    setFavouriteVideos(favourites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favouriteVideos', JSON.stringify(favouriteVideos));
  }, [favouriteVideos]);

  return (
    <VideoContext.Provider value={{
      videos,
      setVideos,
      selectedVideo,
      setSelectedVideo,
      detailedVideo,
      setDetailedVideo,
      relatedVideos,
      setRelatedVideos,
      favouriteVideos,
      setFavouriteVideos,
      favoriteVideoItem,
      setFavoriteVideoItem
    }}>
      { props.children }
    </VideoContext.Provider>
  )
};
