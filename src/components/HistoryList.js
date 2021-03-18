import { HistoryListItem } from './HistoryListItem';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import moment from 'moment';

export const HistoryList = () => {
  const { searchHistory } = useContext(VideoContext);

  const historyList = searchHistory.map((item, key) => <HistoryListItem
      image={ item.firstVideoImgSrc }
      term={ item.searchTerm }
      date={ moment(item.searchDate).fromNow() }
      videos={ item.searchVideos }
      key={ key }
    />
  );

  return (
    <div>
      { historyList }
    </div>
  )
};
