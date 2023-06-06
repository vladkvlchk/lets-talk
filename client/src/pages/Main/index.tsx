import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import { Navigate } from "react-router-dom";

const Main: React.FC = () => {
  const user = useSelector(selectUser);

  if (!user.id) {
    return(<Navigate to="./login" />)
  }

  return (
    <div>
      <div>{`main-page ${JSON.stringify(user)}`}</div>
    </div>
  );
};

export default Main;
