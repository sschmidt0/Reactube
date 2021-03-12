import { makeStyles } from '@material-ui/core/styles';
import { VideoItem } from './VideoItem';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  videoListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export const VideoList = ({ videos, handleVideoSelect }) => {
  const classes = useStyles();

  //console.log('from Video list: ', videos);

  const renderedVideos = videos.slice(0, 5).map((video, key) =>
    <VideoItem
      key={ key }
      handleVideoSelect={ handleVideoSelect }
      video = { video }
    />);

  return (
    <section className={ classes.videoListContainer }>
      { renderedVideos }
    </section>
  )
};

VideoList.propTypes = {
  videos: PropTypes.array,
  handleVideoSelect: PropTypes.func
};
