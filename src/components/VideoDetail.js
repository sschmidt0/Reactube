import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { VideoList } from './VideoList';
import { useState, useEffect } from 'react';

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

export const VideoDetail = ({ selectedVideo, video, handleVideoSelect, relatedVideos }) => {
  const classes = useStyles();
  //console.log('selected video from video detail: ', selectedVideo);
  //console.log('video from video detail: ', video);
  //console.log('video id: ', video.id.videoId);

  return (
    <section className={ classes.videoDetailContainer }>
      { selectedVideo && <article className={ classes.article }>
          <div className={ classes.imageContainer }>
            <img
              src={ selectedVideo.snippet.thumbnails.high.url }
              alt={ selectedVideo.snippet.description }
              className={ classes.videoDetailImage }
            />
          </div>
          <div className={ classes.videoInformation }>
            <h2 className={ classes.videoTitle }>{ selectedVideo.snippet.title }</h2>
            <p>{ selectedVideo.snippet.description }</p>
          </div>
        </article>
      }
      { !selectedVideo && video && <article className={ classes.article }>
          <div className={ classes.imageContainer }>
            <img
              src={ video.snippet.thumbnails.medium.url }
              alt={ video.snippet.description }
              className={ classes.videoDetailImage }
            />
          </div>
          <div className={ classes.videoInformation }>
            <h2 className={ classes.videoTitle }>{ video.snippet.title }</h2>
            <p>{ video.snippet.description }</p>
          </div>
        </article>
      }
      <article>
        <h3>Related Videos</h3>
        <VideoList videos={ relatedVideos } handleVideoSelect={ handleVideoSelect } />
      </article>
    </section>
  )
};

VideoDetail.propTypes = {
  selectedVideo: PropTypes.object,
  video: PropTypes.object
};
