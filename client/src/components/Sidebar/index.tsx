import React from "react";

const Sidebar: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState('chats');

  return (
    <div className="w-3/12 h-screen bg-slate-800 flex-col">
      <div className="h-full-16">
        <header className="h-16 bg-slate-800 px-4 py-2 shadow-xl">
          <input
            type={"text"}
            className="bg-slate-700 w-full h-full rounded-full px-6 focus:outline-none focus:border-sky-600"
            placeholder="Search"
          ></input>
        </header>
      </div>
      <footer className="h-16 w-full border-t border-slate-500 flex justify-around">
        <button onClick={()=>setCurrentPage('contacts')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            viewBox="0 -960 960 960"
            width="36"
            fill={currentPage === 'contacts' ? "#fff" : "grey"}
          >
            <path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z" />
          </svg>
        </button>
        <button onClick={()=>setCurrentPage('chats')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            viewBox="0 -960 960 960"
            width="36"
            fill={currentPage === 'chats' ? "#fff" : "grey"}
          >
            <path d="M281-240q-14 0-27.5-14T240-282v-98h500v-340h100q14 0 27 14t13 29v596L721-240H281ZM80-280v-558q0-14 13-28t27-14h519q15 0 28 13.5t13 28.5v356q0 14-13 28t-28 14H240L80-280Z" />
          </svg>
        </button>
        <button onClick={()=>setCurrentPage('settings')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            viewBox="0 -960 960 960"
            width="36"
            fill={currentPage === 'settings' ? "#fff" : "grey"}
          >
            <path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z" />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default Sidebar;
