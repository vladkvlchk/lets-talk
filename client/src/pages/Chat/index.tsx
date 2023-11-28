import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "../../axios";
import socket from "../../socket";
import TimeAgo from "../../components/TimeAgo";
import Message from "../../components/Message";
import { ContactItemType, MessageType } from "../../types";

import { setCurrentPage } from "../../redux/slices/currentPage/slice";
import { selectCurrentPage } from "../../redux/slices/currentPage/selectors";
import { selectUser } from "../../redux/slices/user/selectors";

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const { type, contact_id, chat_id } = useSelector(selectCurrentPage);
  const [contactData, setContactData] = React.useState<ContactItemType>({
    id: contact_id,
    first_name: "",
    last_name: "",
    profile_photo: "",
    last_seen: "",
  });
  const [chatId, setChatId] = React.useState<string>("");
  const me = useSelector(selectUser);
  const [message, setMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const mainRef = useRef(null);

  const openContact = () => {
    dispatch(setCurrentPage({ type: "contact", contact_id, chat_id: null }));
  };

  React.useEffect(() => {
    try {
      const getContactByContactId = async () => {
        const { data } = await axios.get(`/contact/${contact_id}`);
        await setContactData({
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          profile_photo: data.profile_photo,
          last_seen: data.last_seen,
        });
      };

      const getContactByChatId = async () => {
        const { data } = await axios.get(`/contact/by-chat-id`, {
          params: {
            chat_id,
            user_id: me.id,
          },
        });

        await setContactData(data)
      };

      const getChatByChatId = async () => {}; //soon

      const getMessagesByChatId = async () => {
        const { data } = await axios.get(`/messages/by-chat-id`, {
          params: {
            chat_id,
          },
        });

        await setMessages(data.messages);
        socket.emit("CHAT:JOIN", { chat_id });
      };

      const getMessagesByContactId = async () => {
        const { data } = await axios.get(`/messages/by-contact-id`, {
          params: {
            contact_id,
            user_id: me.id,
          },
        });

        await setMessages(data.messages);
        await setChatId(data.chat_id);
        socket.emit("CHAT:JOIN", { chat_id: data.chat_id });
      };

      if (contact_id) {
        getContactByContactId();
        getMessagesByContactId();
      } else if (chat_id) {
        if (type === "dialogue") {
          getContactByChatId();
        } else if (type === "group") {
          getChatByChatId();
        }

        getMessagesByChatId();
      }

      socket.on("CHAT:NEW_MESSAGE", async (new_message) => {
        await setMessages((prev) => {
          return [...prev, new_message];
        });
        mainRef.current.scrollTo(0, 99999999999);
      });
    } catch (error) {
      console.error(error);
    }
  }, [contact_id, chat_id]);

  const onSend = async () => {
    try {
      if (message === "") return 0; //catching empty messages

      const new_message = {
        from_user: me.id,
        to_user: contactData.id,
        chat_id: chatId,
        message_text: message,
      };

      socket.emit("CHAT:NEW_MESSAGE", new_message);
      setMessages((prev) => [
        ...prev,
        {
          ...new_message,
          id: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]);
      setMessage("");

      mainRef.current.scrollTo(0, 9999999999);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSend();
    }
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
      <main ref={mainRef} className="flex-1 flex flex-col overflow-scroll">
        {messages.map((message) => (
          <Message
            key={message.id}
            author_name={
              message.from_user === me.id
                ? me.firstName
                : contactData.first_name
            }
            text={message.message_text}
            avatarLink={
              message.from_user === me.id
                ? me.profile_photo
                : contactData.profile_photo
            }
            time={message.createdAt}
          />
        ))}
      </main>
      <footer className="bg-slate-800 border-t border-slate-600 h-12 flex">
        <input
          type="text"
          className="bg-slate-800 focus:outline-none px-4 text-white flex-1"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
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
