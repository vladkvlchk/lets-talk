import React from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/user/slice";
import { UseAppDispatch } from "../../redux/store";
import { GoogleDataType } from "../../types";
import jwt_decode from 'jwt-decode'

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  const handleCallbackResponse = (response: any) => {
    if(response.credential) {
      const gData : GoogleDataType = jwt_decode(response.credential);

      dispatch(
        setUser({
          id: gData?.sub,
          firstName: gData?.given_name,
          lastName: gData?.family_name,
          email: gData?.email,
          profile_photo: gData?.picture,
        })
      );

      navigate('/');
    } else {
      console.error(response);
    }
  };

  React.useEffect(() => {
    /* global google */
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });
    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );
  });

  return (
    <div className="w-screen h-screen bg-slate-900 text-center flex text-white justify-center items-center">
      <div className="font-sans text-5xl text-slate-900 absolute top-40 font-bold rounded-md bg-slate-300 p-5">
        LETS TALK :D
      </div>
      <div className="bg-slate-300 rounded-md p-5">
        <h1 className="m-3 text-xl text-slate-900">Sign in</h1>
        <div className="">
          <div id="googleSignInDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
