import React from "react";
import TimeAgo from "../../components/TimeAgo";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/currentPage/slice";
import { ContactItemType } from "../../types";
import { selectCurrentPage } from "../../redux/slices/currentPage/selectors";
import axios from "axios";
import socket from "../../socket";

type ChatType = {
  type: "dialogue" | "group";
};

const Chat: React.FC<ChatType> = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectCurrentPage);
  const [contactData, setContactData] = React.useState<ContactItemType>({
    id,
    first_name: "",
    last_name: "",
    profile_photo: "",
    last_seen: "",
  });
  const [message, setMessage] = React.useState<string>("");

  const openContact = () => {
    dispatch(setCurrentPage({ type: "contact", id }));
  };

  React.useEffect(() => {
    try {
      const getContact = async () => {
        const { data } = await axios.get(`http://localhost:5000/contact/${id}`);
        setContactData({
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          profile_photo: data.profile_photo,
          last_seen: data.last_seen,
        });
      };
      getContact();
      socket.emit("CHAT:ENTER", {chatId: contactData.id})
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  const onSend = () => {
    socket.emit("CHAT:NEW_MESSAGE", { author: "me", text: message });
    setMessage('');
  };

  return (
    <div className="flex flex-col w-full">
      <header
        onClick={openContact}
        className="pl-3 h-14 flex flex-row flex-nowrap w-full overflow-hidden cursor-pointer bg-slate-800 border-b border-slate-600"
      >
        <picture className="p-2 flex-none">
          <img
            className="rounded-full h-full"
            alt="avatar"
            src={contactData.profile_photo}
          />
        </picture>
        <div className="p-1 truncate min-w-full">
          <h1 className="text-white whitespace-nowrap truncate font-bold">
            {contactData.first_name + " " + contactData.last_name}
          </h1>
          <div className="text-slate-400 whitespace-nowrap truncate text-xs">
            <TimeAgo date={contactData.last_seen} />
          </div>
        </div>
      </header>
      <main className="flex-1"></main>
      <footer className="bg-slate-800 border-t border-slate-600 h-12 flex">
        <input
          type="text"
          className="bg-slate-800 focus:outline-none px-4 text-white flex-1"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={onSend} className="px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
            fill="white"
          >
            <path d="M120-160v-245l302-75-302-77v-243l760 320-760 320Z" />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default Chat;
