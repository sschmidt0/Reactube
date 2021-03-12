import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import youtube from './apis/youtube';
import youtubeRelatedVideos from './apis/youtubeRelatedVideos';

import { SearchBar } from './components/SearchBar';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';

import { Container } from '@material-ui/core';


const history = createBrowserHistory();

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [detailedVideo, setDetailedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

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
  };

  const handleVideoSelect = async (video) => {
    // s'executarà quan se seleccioni un vídeo del llistat
    // El únic del que s'encarregarà és modificar l'estat
    await setSelectedVideo(video);

    const response = await youtubeRelatedVideos.get('/search', {
      params: {
        relatedToVideoId: video.id.videoId,
      }
    });
    console.log('response data items: ', response.data.items);
    setRelatedVideos(response.data.items);
  };

  useEffect(() => {
    if (videos.length > 0) setDetailedVideo(videos[0]);
  }, [videos]);

  return (
    <Container
      maxWidth="lg"
      style={{ padding: 5 }}
    >
      <SearchBar handleSubmit={ handleSubmit } />
      <Container
        className="container-flexbox"
        maxWidth="lg"
        style={{ display: 'flex', padding: 0, }}
      >
        <Router history={ history }>
          <Switch>
            <Route exact path="/" render={() => <VideoList
              videos={ videos }
              handleVideoSelect={ handleVideoSelect }
            /> } />
            <Route path="/videos/:id" render={() => <VideoDetail
              selectedVideo={ selectedVideo }
              video={ detailedVideo }
              relatedVideos={ relatedVideos }
            /> } />
          </Switch>
      </Router>
      </Container>
    </Container>
  );
};
