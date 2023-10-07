import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import { Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import ViewContact from "../ViewContact";
import { selectCurrentPage } from "../../redux/slices/currentPage/selectors";
import Chat from "../Chat";

const Main: React.FC = () => {
  const user = useSelector(selectUser);
  const currentPage = useSelector(selectCurrentPage);

  React.useEffect(() => {
    const getData = async () => {
      try{
        if (user.id) {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, {
            id: user.id,
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            profile_photo: user.profile_photo,
          });
        }
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, []);

  if (!user.id) {
    return <Navigate to="./login" />;
  }

  return (
    <div className="w-screen h-screen flex bg-slate-900 fixed">
      <Sidebar />
      {currentPage?.type === "dialogue" ? (
        <Chat type={"dialogue"} />
      ) : currentPage?.type === "contact" ? (
        <ViewContact />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
