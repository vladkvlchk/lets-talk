import React from "react";
import SettingsFolder from "../../components/SettingsFolder";

const folders = [
  {
    ico: "",
    icoColor: "grey",
    title: "General",
  },
  {
    ico: "",
    icoColor: "red",
    title: "Privacy and Security",
  },
  {
    ico: "",
    icoColor: "green",
    title: "Data and Storage",
  },
  {
    ico: "",
    icoColor: "blue",
    title: "Appearance",
  },
  {
    ico: "",
    icoColor: "yellow",
    title: "Language",
  },
  {
    ico: "",
    icoColor: "purple",
    title: "Stickers and Emoji",
  },
  {
    ico: "",
    icoColor: "lightblue",
    title: "Chat Folders",
  },
  {
    ico: "",
    icoColor: "pink",
    title: "Premium",
  },
  {
    ico: "",
    icoColor: "brown",
    title: "FAQ",
  },
  {
    ico: "",
    icoColor: "orange",
    title: "Ask a Question",
  },
];

const Settings: React.FC = () => {
  return (
    <div className="flex-1">
      {folders.map((folder) => (
        <SettingsFolder
          key={folder.title}
          title={folder.title}
          ico={folder.ico}
          icoColor={folder.icoColor}
          opened={false}
        />
      ))}
    </div>
  );
};

export default Settings;
