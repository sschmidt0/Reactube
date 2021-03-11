import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  videoDetailContainer: {
    marginBottom: 50,
    marginRight: 20
  },
  videoDetailImage: {
    width: '100%',
  },
  videoInformation: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    border: '1px solid lightgrey',
  }
});

export const VideoDetail = ({ selectedVideo, video }) => {
  const classes = useStyles();
  console.log('selected video from video detail: ', selectedVideo);
  console.log('video from video detail: ', video);

  return (
    <section className={ classes.videoDetailContainer }>
      { selectedVideo && <article className={ classes.article }>
          <img
            src={ selectedVideo.snippet.thumbnails.high.url }
            alt={ selectedVideo.snippet.description }
            className={ classes.videoDetailImage }
          />
          <div className={ classes.videoInformation }>
            <h2 className={ classes.videoTitle }>{ selectedVideo.snippet.title }</h2>
            <p>{ selectedVideo.snippet.description }</p>
          </div>
        </article>
      }
      { !selectedVideo && video && <article className={ classes.article }>
          <img
            src={ video.snippet.thumbnails.medium.url }
            alt={ video.snippet.description }
            className={ classes.videoDetailImage }
          />
          <div className={ classes.videoInformation }>
            <h2 className={ classes.videoTitle }>{ video.snippet.title }</h2>
            <p>{ video.snippet.description }</p>
          </div>
        </article>
      }
    </section>
  )
};

VideoDetail.propTypes = {
  selectedVideo: PropTypes.object,
  video: PropTypes.object
};
