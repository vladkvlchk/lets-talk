import React from "react";
import TimeAgo from "../../components/TimeAgo";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/currentPage/slice";
import { ContactItemType } from "../../types";
import { selectCurrentPage } from "../../redux/slices/currentPage/selectors";
import axios from "axios";

const Dialogue: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectCurrentPage);
  const [contactData, setContactData] = React.useState<ContactItemType>({
    id,
    first_name: "",
    last_name: "",
    profile_photo: "",
    last_seen: "",
  });

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
    } catch (error) {
      console.error(error);
    }
  }, [id]);

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
      <main>here will be messages</main>
      <footer></footer>
    </div>
  );
};

export default Dialogue;
