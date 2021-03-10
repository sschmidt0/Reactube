import { makeStyles } from '@material-ui/core/styles';
import { VideoItem } from './VideoItem';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  videoListContainer: {
    width: 350
  },
});

export const VideoList = ({ videos, handleVideoSelect }) => {
  const classes = useStyles();

  console.log('from Video list: ', videos);

  const renderedVideos = videos.map((video, key) =>
    <VideoItem
      key={ key }
      handleVideoSelect={ handleVideoSelect }
      video = { video }
    />);

  return (
    <aside className={ classes.videoListContainer }>
      { renderedVideos }
    </aside>
  )
};

VideoList.propTypes = {
  videos: PropTypes.array,
  handleVideoSelect: PropTypes.func
};
