import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  videoListContainer: {
    width: '30%'
  },
});

export const VideoList = () => {
  const classes = useStyles();

  return (
    <aside className={ classes.videoListContainer }>
      I'm a video list!!
    </aside>
  )
};
