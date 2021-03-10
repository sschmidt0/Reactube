import './App.css';
import { useState, useEffect } from 'react';
import youtube from './apis/youtube';
import { SearchBar } from './components/SearchBar';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';

import { Container } from '@material-ui/core';

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [detailedVideo, setDetailedVideo] = useState(null);

  const handleSubmit = async (e, termFromSearchBar) => {
    e.preventDefault();
    // mètode que s'executarà quan es realitzi una cerca, el qual acceptarà un string
    // El contingut d'aquest mètode és l'anomenada a la API de youtube i el seu guardat posterior en el state

    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    });

    await setVideos(response.data.items);
    // console.log('fetch request response: ', response.data.items);
  };

  const handleVideoSelect = async (video) => {
    // s'executarà quan se seleccioni un vídeo del llistat
    // El únic del que s'encarregarà és modificar l'estat
    console.log('video input ', video);
    await setSelectedVideo(video);
    console.log('selected video: ', selectedVideo);
  };

  useEffect(() => {
    if (videos.length > 0) setDetailedVideo(videos[0]);
  }, [videos]);

  return (
    <Container
      maxWidth="md"
      style={{ padding: 5 }}
    >
      <SearchBar handleSubmit={ handleSubmit } />
      <Container
        className="container-flexbox"
        maxWidth="md"
        style={{ display: 'flex', padding: 0, }}
      >
        <VideoDetail selectedVideo={ selectedVideo } video={ detailedVideo } />
        <VideoList
          videos={ videos }
          handleVideoSelect={ handleVideoSelect }
        />
      </Container>
    </Container>
  );
}
