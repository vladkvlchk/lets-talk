import React from "react";
import { ContactItemType } from "../../types";
import TimeAgo from "../TimeAgo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/currentPage/slice";

const ContactItem: React.FC<ContactItemType> = ({
  id,
  first_name,
  last_name,
  profile_photo,
  last_seen,
}) => {

  const dispatch = useDispatch();

  const openContact = () => {
    dispatch(setCurrentPage({type: 'dialogue', id}));
  }

  return (
    <div onClick={openContact} className="h-14 flex flex-row flex-nowrap w-full overflow-hidden cursor-pointer">
      <picture className="p-2 flex-none">
        <img className="rounded-full h-full" alt="avatar" src={profile_photo} />
      </picture>
      <div className="border-t border-slate-600 p-1 truncate min-w-full">
        <h1 className="text-white whitespace-nowrap truncate font-bold">
          {first_name + " " + last_name}
        </h1>
        <div className="text-slate-400 whitespace-nowrap truncate text-xs">
          <TimeAgo date={last_seen} />
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
