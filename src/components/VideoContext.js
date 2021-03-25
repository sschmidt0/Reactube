import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const VideoContext = createContext();
VideoContext.displayName = 'VideoContext';

export const VideoProvider = props => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [detailedVideo, setDetailedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [favoriteVideoItem, setFavoriteVideoItem] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useLocalStorage('searchHistory', []);

  const favVideos = localStorage.getItem('favouriteVideos');
  const startFav = favVideos ? JSON.parse(favVideos) : [];
  const [favouriteVideos, setFavouriteVideos] = useState(startFav);

  const historyVStorage = localStorage.getItem('historyVideos');
  const startHV = historyVStorage ? JSON.parse(historyVStorage) : [];
  const [historyVideos, setHistoryVideos] = useState(startHV);

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
      setSearchHistory,
      historyVideos,
      setHistoryVideos
    }}>
      { props.children }
    </VideoContext.Provider>
  )
};
