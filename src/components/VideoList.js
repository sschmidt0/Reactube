import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  videoListContainer: {
    width: '30%'
  },
});

export const VideoList = ({ videos, handleVideoSelect }) => {
  const classes = useStyles();

  console.log('from Video list: ', videos);

  return (
    <aside className={ classes.videoListContainer }>
      I'm a video list!!
    </aside>
  )
};
