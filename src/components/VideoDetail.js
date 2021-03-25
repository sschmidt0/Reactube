import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { VideoList } from './VideoList';
import { DetailSelectedVideo } from './DetailSelectedVideo';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';

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

export const VideoDetail = ({ handleVideoSelect }) => {
  const { videos, relatedVideos } = useContext(VideoContext);
  const video = videos[0];
  const classes = useStyles();

  return (
    <section className={ classes.videoDetailContainer }>
      <DetailSelectedVideo />
      <article>
        <VideoList title="Related Videos" videos={ relatedVideos } handleVideoSelect={ (e) => handleVideoSelect(video) } />
      </article>
    </section>
  )
};

VideoDetail.propTypes = {
  handleVideoSelect: PropTypes.func,
};
