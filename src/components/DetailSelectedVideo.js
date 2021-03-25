import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  videoDetailContainer: {
    marginTop: 30,
  },
  article: {
    display: 'flex',
    padding: 20,
    marginBottom: 80,
    marginRight: 30,
    backgroundColor: '#DEE4E7',
    borderRadius: 5,
  },
  imageContainer: {
    width: '60%'
  },
  videoInformation: {
    marginTop: -20,
    paddingLeft: 10,
    paddingRight: 10,
    width: '30%',
    color: '#333',
  }
});

export const DetailSelectedVideo = () => {
  const { selectedVideo } = useContext(VideoContext);
  const classes = useStyles();
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <article className={ classes.article }>
        <div className={ classes.imageContainer }>
          <iframe width="350" height="300" src={ videoSrc } title={ selectedVideo.snippet.title } frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div className={ classes.videoInformation }>
          <h2 className={ classes.videoTitle }>{ selectedVideo.snippet.title }</h2>
          <p>{ selectedVideo.snippet.description }</p>
        </div>
      </article>
  )
};
