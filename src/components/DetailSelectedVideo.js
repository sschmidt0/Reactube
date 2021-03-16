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
    backgroundColor: '#DEE4E7',
    borderRadius: 5,
  },
  imageContainer: {
    width: '60%'
  },
  videoDetailImage: {
    width: '100%',
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

  return (
    <article className={ classes.article }>
        <div className={ classes.imageContainer }>
          <img
            src={ selectedVideo.snippet.thumbnails.high.url }
            alt={ selectedVideo.snippet.description }
            className={ classes.videoDetailImage }
          />
        </div>
        <div className={ classes.videoInformation }>
          <h2 className={ classes.videoTitle }>{ selectedVideo.snippet.title }</h2>
          <p>{ selectedVideo.snippet.description }</p>
        </div>
      </article>
  )
};
