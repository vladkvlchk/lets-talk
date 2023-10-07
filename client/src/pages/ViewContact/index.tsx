import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/currentPage/slice";
import { selectCurrentPage } from "../../redux/slices/currentPage/selectors";
import { ContactDataType, ContactItemType } from "../../types";
import TimeAgo from "../../components/TimeAgo";
import { selectUser } from "../../redux/slices/user/selectors";

const ViewContact: React.FC = () => {
  const dispatch = useDispatch();
  const contactId = useSelector(selectCurrentPage).id;
  const myId = useSelector(selectUser).id;
  const [contactData, setContactData] = React.useState<ContactDataType>({
    id: contactId,
    first_name: "",
    last_name: "",
    profile_photo: "",
    last_seen: "",
    email: "",
  });
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
      const getContact = async () => {
        const { data } = await axios.get(
          `http://localhost:5000/contact/${contactId}`
        );
        setContactData({
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name,
          profile_photo: data.profile_photo,
          last_seen: data.last_seen,
          email: data.email,
        });
      };
      getContact();
    } catch (error) {
      console.error(error);
    }
  }, [contactId]);

  const onClickBack = () => {
    dispatch(setCurrentPage({ type: "dialogue", id: contactId }));
  };

  const onMessages = onClickBack;

  const onMute = () => {
    setIsMuted((prev) => !prev);
  };

  const onDeleteContact = async () => {
    try {
      setIsDeleting(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/contact/delete`,
        {
          myId,
          contactId,
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  const onCopyEmail = () => {
    // Create a temporary input element
    const input = document.createElement("input");
    input.value = contactData.email;
    document.body.appendChild(input);

    // Select the text in the input field
    input.select();
    input.setSelectionRange(0, input.value.length);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Clean up by removing the temporary input
    document.body.removeChild(input);
  };

  return (
    <div className="flex flex-col w-full">
      <header className="h-14 flex flex-nowrap w-full bg-slate-800 border-b border-slate-600 items-center">
        <button onClick={onClickBack} className="absolute text-blue-500 p-3">
          {"< back"}
        </button>
        <p className="text-white font-semibold m-auto">Info</p>
      </header>
      <main className="flex flex-col items-center">
        <picture className="rounded-full overflow-hidden mt-10">
          <img alt="profile_photo" src={contactData.profile_photo} />
        </picture>
        <h1 className="mt-4 text-white font-black text-2xl">
          {contactData.first_name + " " + contactData.last_name}
        </h1>
        <h4 className="text-slate-400 whitespace-nowrap truncate text-xs mt-1">
          <TimeAgo date={contactData.last_seen} />
        </h4>
        <div className="flex w-full max-w-3xl mt-3">
          <button
            onClick={onMessages}
            className="bg-slate-800 p-4 w-full rounded-xl m-3"
          >
            <picture className="m-auto w-auto">
              <svg
                className="m-auto"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="rgb(59 130 246)"
              >
                <path d="M16 2c8.837 0 16 5.82 16 13s-7.163 13-16 13c-0.849 0-1.682-0.054-2.495-0.158-3.437 3.437-7.539 4.053-11.505 4.144v-0.841c2.142-1.049 4-2.961 4-5.145 0-0.305-0.024-0.604-0.068-0.897-3.619-2.383-5.932-6.024-5.932-10.103 0-7.18 7.163-13 16-13z"></path>
              </svg>
            </picture>
            <p className="text-blue-500">Messages</p>
          </button>
          <button
            onClick={onMute}
            className="bg-slate-800 p-4 w-full rounded-xl m-3"
          >
            <picture className="m-auto w-auto">
              {isMuted ? (
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="rgb(59 130 246)"
                >
                  <path d="M160-200v-60h84v-306q0-84 49.5-149.5T424-798v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717-566v306h83v60H160ZM480-80q-32 0-56-23.5T400-160h160q0 33-23.5 56.5T480-80Z" />
                </svg>
              ) : (
                <svg
                  className="m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="rgb(59 130 246)"
                >
                  <path d="M717-332 313-736q27-26 54.5-40.5T424-798v-26q0-23 16.5-39.5T480-880q23 0 39.5 16.5T536-824v26q78 17 129.5 82T717-566v234ZM160-200v-60h84v-315q0-14 1.5-27t5.5-26L75-805l42-42 726 727-42 42-122-122H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z" />
                </svg>
              )}
            </picture>
            <p className="text-blue-500">{isMuted ? "Unmute" : "Mute"}</p>
          </button>
          <button className="bg-slate-800 p-4 w-full rounded-xl m-3">
            <picture className="m-auto w-auto">
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="rgb(59 130 246)"
              >
                <path d="M727-80q-47.5 0-80.75-33.346Q613-146.693 613-194.331q0-6.669 1.5-16.312T619-228L316-404q-15 17-37 27.5T234-366q-47.5 0-80.75-33.25T120-480q0-47.5 33.25-80.75T234-594q23 0 44 9t38 26l303-174q-3-7.071-4.5-15.911Q613-757.75 613-766q0-47.5 33.25-80.75T727-880q47.5 0 80.75 33.25T841-766q0 47.5-33.25 80.75T727-652q-23.354 0-44.677-7.5T646-684L343-516q2 8 3.5 18.5t1.5 17.741q0 7.242-1.5 15Q345-457 343-449l303 172q15-14 35-22.5t46-8.5q47.5 0 80.75 33.25T841-194q0 47.5-33.25 80.75T727-80Z" />
              </svg>
            </picture>
            <p className="text-blue-500">Share</p>
          </button>
          <button
            onClick={onDeleteContact}
            className="bg-slate-800 p-4 w-full rounded-xl m-3"
          >
            {/* <button className="m-auto w-auto"> */}
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="red"
              >
                <path d="M261-120q-24 0-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm106-146h60v-399h-60v399Zm166 0h60v-399h-60v399Z" />
              </svg>
            {/* </button> */}
            <p className="text-red-500">
              {isDeleting ? "Deleting..." : "Delete contact"}
            </p>
          </button>
        </div>
        <div className="w-full max-w-3xl m-4 bg-slate-800 p-4 rounded-xl ">
          <div className="m-3 text-blue-500 border-b pb-3  border-slate-600">
            <h5>email</h5>
            <div className="flex justify-between">
              <p className="text-white">{contactData.email}</p>
              <button onClick={onCopyEmail} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="rgb(59 130 246)"
                >
                  <path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="m-3 text-blue-500  pb-3">
            <h5>bio</h5>
            <p className="text-white">I'm not a bad person</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewContact;
