import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  videoDetailContainer: {
    width: '70%'
  },
});

export const VideoDetail = () => {
  const classes = useStyles();

  return (
    <section className={ classes.videoDetailContainer }>
      <article>I'm a video detail!</article>
    </section>
  )
};
