import { makeStyles } from '@material-ui/core/styles';
import { VideoItem } from './VideoItem';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  videoListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    //justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export const VideoList = ({ handleVideoSelect, videos, title, sliceVal }) => {
  const classes = useStyles();

  const renderedVideos = videos.slice(0, sliceVal).map((video, key) =>
    <VideoItem
      key={ key }
      handleVideoSelect={ () => handleVideoSelect(video) }
      video = { video }
    />);

  return (
    <section>
      <h3>{ title }</h3>
      <div className={ classes.videoListContainer }>
        { renderedVideos }
      </div>
    </section>
  )
};

VideoList.propTypes = {
  //videos: PropTypes.array,
  handleVideoSelect: PropTypes.func
};
