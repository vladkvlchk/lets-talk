import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";
import { AlertType, ContactItemType } from "../../types";
import ContactItem from "../../components/ContactItem";
import AddContactModal from "../../components/AddContactModal";
import { Alert } from "@mui/material";

const Contacts: React.FC = () => {
  const { id } = useSelector(selectUser);
  const [contacts, setContacts] = React.useState<ContactItemType[]>([]);
  const [isOpenAddContact, setIsOpenAddContact] =
    React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<undefined | AlertType>();

  React.useEffect(() => {
    const getContacts = async () => {
        const { data } = await axios.get("http://localhost:5000/contacts/all/" + id);
        setContacts(data);
      };
    
    getContacts();
  }, []);

  const onAlert = ({severity, text} : AlertType) => {
    setAlert({severity, text});
    setTimeout(() => {setAlert(undefined)}, 2500);
  }

  const onOpenAddContacts = () => {
    setIsOpenAddContact((prev) => !prev);
  };
  return (
    <>
      {isOpenAddContact ? (
        <AddContactModal onClose={onOpenAddContacts} onAlert={onAlert}/>
      ) : (
        <></>
      )}
      <button
        onClick={onOpenAddContacts}
        className="h-12 flex p-2 justify-center"
      >
        <svg
          className="flex-none w-14"
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
          fill="rgb(59 130 246)"
        >
          <path d="M734.615-420v-124.615H610v-30.77h124.615V-700h30.77v124.615H890v30.77H765.385V-420h-30.77ZM360-504.846q-49.5 0-82.442-32.942-32.943-32.943-32.943-82.827 0-49.885 32.943-82.443Q310.5-735.616 360-735.616q49.5 0 82.442 32.558 32.943 32.558 32.943 82.443 0 49.884-32.943 82.827Q409.5-504.846 360-504.846ZM80-215.384v-57.847q0-25 14.423-46.577 14.423-21.577 40.5-33.269 62.692-27.615 116.753-40.346 54.06-12.731 108.115-12.731 54.055 0 108.209 12.731t116.846 40.346q26.077 12.692 40.616 33.769Q640-298.231 640-273.231v57.847H80Zm30.769-30.77h498.462v-27.077q0-15.23-10.154-29.346-10.154-14.115-28.231-23.423-57.154-26.846-106.682-38.115-49.528-11.27-104.164-11.27t-104.664 11.27Q205.308-352.846 148.923-326q-18.846 9.308-28.5 23.423-9.654 14.116-9.654 29.346v27.077ZM360-535.615q35.923 0 60.269-24.347 24.346-24.346 24.346-60.269T420.269-680.5Q395.923-704.846 360-704.846T299.731-680.5q-24.346 24.346-24.346 60.269t24.346 60.269q24.346 24.347 60.269 24.347Zm0-84.616Zm0 374.077Z" />
        </svg>
        <h3 className="text-blue-500 pt-1 justify-center text-center">
          Add Contact
        </h3>
      </button>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          first_name={contact.first_name}
          last_name={contact.last_name}
          profile_photo={contact.profile_photo}
          last_seen={contact.last_seen}
          id={contact.id}
        />
      ))}
      {alert && <Alert className="absolute bottom-6 left-6 transition-opacity z-20" variant="filled" severity={alert.severity} onClose={() => {setAlert(undefined)}}>
        {alert.text}
      </Alert>}
    </>
  );
};

export default Contacts;
