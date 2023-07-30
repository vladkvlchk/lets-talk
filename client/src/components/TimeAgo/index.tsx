import React, { useEffect, useState } from 'react';

type TimeAgoType = {
    date: string
}

const TimeAgo : React.FC<TimeAgoType> = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const previousDate = new Date(date);

      const timeDifference = currentDate.getTime() - previousDate.getTime();
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        setTimeAgo(`last seen ${days} day${days > 1 ? 's' : ''} ago`);
      } else if (hours > 0) {
        setTimeAgo(`last seen ${hours} hour${hours > 1 ? 's' : ''} ago`);
      } else if (minutes > 0) {
        setTimeAgo(`last seen ${minutes} minute${minutes > 1 ? 's' : ''} ago`);
      } else if (seconds > 30){
        // setTimeAgo(`${seconds} second${seconds !== 1 ? 's' : ''} ago`);
        setTimeAgo('last seen just now');
      } else {
        setTimeAgo('online');
      }
    };

    calculateTimeAgo();
  }, [date]);

  

  return <div>{timeAgo}</div>;
};

export default TimeAgo;
