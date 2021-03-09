import './App.css';
import { useState } from 'react';
import youtube from './apis/youtube';
import SearchBar from './components/SearchBar';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';

import { Container } from '@material-ui/core';

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (termFromSearchBar) => {
    // mètode que s'executarà quan es realitzi una cerca, el qual acceptarà un string
    // El contingut d'aquest mètode és l'anomenada a la API de youtube i el seu guardat posterior en el state

    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    });

    // console.log(response.data.items);
    setVideos(response.data.items);
    console.log(videos);
  };

  // prova
  // const swimming = handleSubmit('swimming');
  // console.log(swimming);


  const handleVideoSelect = (video) => {
    // s'executarà quan se seleccioni un vídeo del llistat
    // El únic del que s'encarregarà és modificar l'estat
    setSelectedVideo(video);
    console.log('video selected');
  };

  return (
    <Container
      maxWidth="md"
      style={{ padding: 0 }}
    >
      <SearchBar handleSubmit={ handleSubmit } />
      <Container
        className="container-flexbox"
        maxWidth="md"
        style={{ display: 'flex', padding: 0, }}
      >
        <VideoDetail selectedVideo={ selectedVideo === null ? videos[0] : selectedVideo } />
        <VideoList
          videos={ videos }
          handleVideoSelect={ handleVideoSelect }
        />
      </Container>
    </Container>
  );
}
