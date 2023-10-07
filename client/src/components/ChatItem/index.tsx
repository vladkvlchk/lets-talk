import React from "react";

type ChatItemType = {
  first_name: string;
  last_name: string;
  profile_photo: string;
  last_message: {
    text: string,
    time: string,
  };
};

const ChatItem: React.FC<ChatItemType> = ({
  first_name,
  last_name,
  profile_photo,
  last_message
}) => {
  const openChat = () => {};

  return (
    <div
      onClick={openChat}
      className="h-16 flex flex-row flex-nowrap w-full overflow-hidden cursor-pointer"
    >
      <picture className="p-2 flex-none">
        <img
          className="rounded-full h-full"
          alt="avatar"
          src={
            profile_photo ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          }
        />
      </picture>
      <div className="border-t border-slate-600 p-1 truncate min-w-full">
        <h1 className="text-white whitespace-nowrap truncate font-bold">
          {first_name + " " + last_name}
        </h1>
        <div className="text-slate-400 whitespace-nowrap truncate">
          <p>{last_message?.text || "(no message)"}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
