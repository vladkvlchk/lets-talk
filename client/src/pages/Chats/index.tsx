import React from "react";
import ChatItem from "../../components/ChatItem";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";

const Chats: React.FC = () => {
  const [chats, setChats] = React.useState<any[]>([]); //must be typed
  const me = useSelector(selectUser);

  React.useEffect(() => {
    const fetchData = async () => {
        const { data } =  await axios.get("http://localhost:5000/chats/" + me.id);
        await setChats(data);
    }
    fetchData();
  }, []);
  
  return (
    <div className="flex-1">
      {chats.map((chat) => (
        <ChatItem
          key={chat?.chat_id}
          first_name={chat?.data?.first_name}
          last_name={chat?.data?.last_name}
          profile_photo={chat?.data?.profile_photo}
          last_message={chat?.data?.last_message}
        />
      ))}
    </div>
  );
};

export default Chats;
