import React from "react";

type SettingsFolderType = {
  ico: string;
  icoColor: string;
  title: string;
};

const SettingsFolder: React.FC<SettingsFolderType> = ({
  ico,
  icoColor,
  title,
}) => {
  return (
    <div className="h-10 flex">
      <div className="h-8 w-8 p-1" style={{backgroundColor: icoColor}}
      ></div>
      <div className="text-white">{title}</div>
    </div>
  );
};

export default SettingsFolder