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
        setTimeAgo(`${days} day${days > 1 ? 's' : ''} ago`);
      } else if (hours > 0) {
        setTimeAgo(`${hours} hour${hours > 1 ? 's' : ''} ago`);
      } else if (minutes > 0) {
        setTimeAgo(`${minutes} minute${minutes > 1 ? 's' : ''} ago`);
      } else {
        setTimeAgo(`${seconds} second${seconds !== 1 ? 's' : ''} ago`);
      }
    };

    calculateTimeAgo();
  }, [date]);

  return <div>{"last seen " + timeAgo}</div>;
};

export default TimeAgo;
