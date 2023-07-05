import React from "react";
import { ContactItemType } from "../../types";
import TimeAgo from "../TimeAgo";
import { Link } from "react-router-dom";

const ContactItem: React.FC<ContactItemType> = ({
  id,
  first_name,
  last_name,
  profile_photo,
  last_seen,
}) => {
  return (
    <Link to={`./contact/${id}`}>
      <div className="h-14 flex flex-row flex-nowrap w-full overflow-hidden cursor-pointer">
        <picture className="p-2 flex-none">
          <img
            className="rounded-full h-full"
            alt="avatar"
            src={profile_photo}
          />
        </picture>
        <div className="border-y border-slate-600 p-1 truncate min-w-full">
          <h1 className="text-white whitespace-nowrap truncate font-bold">
            {first_name + " " + last_name}
          </h1>
          <p className="text-slate-400 whitespace-nowrap truncate text-xs">
            <TimeAgo date={last_seen} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ContactItem;
