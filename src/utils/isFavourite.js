export const isFavourite = (video) => {
  const favVideos = localStorage.getItem('favouriteVideos');
  if (favVideos !== null) {
    const fv = JSON.parse(favVideos);
    const favourite = fv.find(elem => elem.id.videoId === video.id.videoId) ? true : false;
    return favourite;
  }
  return false;
};
