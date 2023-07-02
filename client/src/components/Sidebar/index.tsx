import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-3/12 h-screen bg-slate-800">
      <header className="h-16 bg-slate-800 px-4 py-2 shadow-xl">
        <input type={'text'} className='bg-slate-700 w-full h-full rounded-full px-6 focus:outline-none focus:border-sky-600' placeholder="Search"></input>
      </header>
    </div>
  );
};

export default Sidebar;
