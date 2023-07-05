import React from "react";
import { AddContactModalType } from "../../types";
import validateEmail from "../../helper/validateEmail";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import axios from "axios";

const AddContactModal: React.FC<AddContactModalType> = ({ onClose, onAlert }) => {
  const [email, setEmail] = React.useState<string>('');
  const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
  const myId = useSelector(selectUser).id;

  const onChangeEmail = (event : any) => {
    setEmail(event.target.value);
  }

  const onClickOk = () => {
    if(validateEmail(email)){
        addContact(email);
    } else {
        onAlert({severity: "warning", text: "Invalid format"});
    }
  }

  const addContact = async (contactEmail: string) => {
    try{
        const { data } = await axios.post('http://localhost:5000/add-contact', { myId, contactEmail })
        console.log(data);
        onClose();
        onAlert({severity: "success", text: "The contact has been added successfully"});
    } catch (error) {
        console.error(error);
        if(+error?.response?.status < 500){
            onAlert({severity: "warning", text: error.response.data});
        } else {
            onAlert({severity: "error", text: error.response.data});
        }
    }
  }

  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-40"></div>
      <div className="absolute w-1/4 translate-y-1/2 translate-x-1/2 bottom-1/2 right-1/2 bg-slate-950 rounded-xl z-10 text-white">
        <header className="bg-neutral-700 h-10 w-full p-2  flex align-center rounded-t-xl">
          <h3 className="w-full text-center font-bold">Add Contact</h3>
          <button className="absolute right-4 text-blue-500" onClick={onClose}>
            {'\u2715'}
          </button>
        </header>
        <main className="flex flex-col p-2 bg-neutral-800">
          <input
            className="bg-neutral-700 p-2 rounded-lg m-2 focus:outline-none"
            placeholder="email"
            onChange={(e) => onChangeEmail(e)}
          />
        </main>
        <footer className="flex flex-col bg-neutral-700 rounded-b-xl">
          <button onClick={onClickOk} className="p-2 border-t border-neutral-500 text-blue-500">OK</button>
        </footer>
      </div>
    </>
  );
};

export default AddContactModal;
