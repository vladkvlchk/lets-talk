import React from "react";
import { ContactItemType } from "../../types";
import TimeAgo from "../TimeAgo";

const ContactItem: React.FC<ContactItemType> = ({
  first_name,
  last_name,
  profile_photo,
  last_seen,
}) => {
  const date = new Date(last_seen);
  const now = new Date();
  const [x_time_ago, set_x_time_ago] = React.useState('recently');

  return (
    <div className="h-14 flex flex-row flex-nowrap w-full overflow-hidden">
      <picture className="p-2 flex-none">
        <img className="rounded-full h-full"
         alt="avatar" src={profile_photo} />
      </picture>
      <div className="border-y border-slate-600 p-1 truncate min-w-full">
        <h1 className="text-white whitespace-nowrap truncate font-bold">{first_name + " " + last_name}</h1>
        <h2 className="text-slate-400 whitespace-nowrap truncate "><TimeAgo date={last_seen} /></h2>
      </div>
    </div>
  );
};

export default ContactItem;
