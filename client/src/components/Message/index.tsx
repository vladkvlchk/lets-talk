import React from "react";

type MessageType = {
  author_name: string;
  text: string;
  avatarLink: string;
  time: string;
};

const Message: React.FC<MessageType> = ({
  avatarLink,
  author_name,
  text,
  time,
}) => {
  const timestamp = new Date(time);
  const hours = timestamp.getHours();
  const minutes = timestamp.getMinutes();
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

  return (
    <div className="flex flex-row flex-nowrap w-full px-3 my-1.5">
      <picture className="h-14 p-2 flex-none cursor-pointer">
        <img className="rounded-full h-full" src={avatarLink} alt="avatar" />
      </picture>
      <div className="flex-1">
        <h5 className="text-blue-500 whitespace-nowrap cursor-pointer truncate font-bold w-min">
          {author_name}
        </h5>
        <p className="text-white">{text}</p>
      </div>
      <p className="text-slate-400 text-sm p-2">{formattedTime}</p>
    </div>
  );
};

export default Message;
