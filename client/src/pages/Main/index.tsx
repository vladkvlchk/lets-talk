import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import { Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

const Main: React.FC = () => {
  const user = useSelector(selectUser);

  const getData = async () => {
    if(user.id){
      console.log({id: user.id, first_name: user.firstName, last_name: user.lastName, email: user.email, profile_photo: user.profile_photo})
      const { data } = await axios.post('http://localhost:5000/sign-in', {id: user.id, first_name: user.firstName, last_name: user.lastName, email: user.email, profile_photo: user.profile_photo});
      console.log(data);
    }
  }

  React.useEffect(()=>{
    getData();
  })

  if (!user.id) {
    return(<Navigate to="./login" />)
  }

  return (
    <div className="w-screen h-screen flex bg-slate-900">
        <Sidebar />
    </div>
  );
};

export default Main;
