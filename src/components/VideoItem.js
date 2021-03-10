import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  videoItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    marginBottom: 20,
  },
  videoTitle: {
    lineHeight: 1.2
  }
});

export const VideoItem = ({ handleVideoSelect, video }) => {
  const classes = useStyles();

  return (
    <div
      className={ classes.videoItemContainer }
      onClick={ () => handleVideoSelect(video) }
    >
      <img src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.description } />
      <p className={ classes.videoTitle }>{ video.snippet.title }</p>
    </div>
  )
};
