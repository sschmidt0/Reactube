//import { HistoryList } from './HistoryList';
import { VideoList } from './VideoList';

export const HistoryPage = () => {
  const historyVideos = JSON.parse(localStorage.getItem('historyVideos'));

  return (
    <div>
      {
        historyVideos !== null ?
        <VideoList videos={ historyVideos } /> :
        <h2>Sorry, but you haven't seen any video yet</h2>
      }
    </div>
   );
};
