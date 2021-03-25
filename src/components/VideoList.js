import { makeStyles } from '@material-ui/core/styles';
import { VideoItem } from './VideoItem';
import PropTypes from 'prop-types';
import { isFavourite } from '../utils/isFavourite';

const useStyles = makeStyles({
  videoListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    margin: 0,
    backgroundColor: '#000014',
    color: '#DEE4E7',
  },
});

export const VideoList = ({ handleVideoSelect, videos, title, sliceVal }) => {
  const classes = useStyles();
  let renderedVideos = [];

  if (videos.length > sliceVal) {
    renderedVideos = videos.slice(0, sliceVal).map((video, key) =>
      <VideoItem
        key={ key }
        handleVideoSelect={ () => handleVideoSelect(video) }
        video = { video }
        isFavourite={ isFavourite }
      />
    );
  } else if (videos.length > 0) {
    renderedVideos = videos.map((video, key) =>
     <VideoItem
       key={ key }
       handleVideoSelect={ () => handleVideoSelect(video) }
       video = { video }
       isFavourite={ isFavourite }
     />
    );
  }

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
  title: PropTypes.string,
  videos: PropTypes.array,
  handleVideoSelect: PropTypes.func
};
