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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const localFavourites = localStorage.getItem('favouriteVideos');
    const favourites = localFavourites.length > 0 ? JSON.parse(localFavourites) : [];
    setFavouriteVideos(favourites);
  }, []);

  useEffect(() => {
    const localSearch = localStorage.getItem('searchHistory');
    const search = localSearch.length > 0 ? JSON.parse(localSearch) : [];
    setSearchHistory(search);
  }, []);

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
      setFavoriteVideoItem,
      searchTerm,
      setSearchTerm,
      searchHistory,
      setSearchHistory
    }}>
      { props.children }
    </VideoContext.Provider>
  )
};
