import React, { useContext, createContext, useState } from "react";

const sideBarContext = createContext({
  showSideBar: true,
  setShowSideBar: () => {},
});

const SideBarProvider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <sideBarContext.Provider
      value={{
        showSideBar,
        toggleSideBar,
      }}
    >
      {children}
    </sideBarContext.Provider>
  );
};

const useSideBar = () => useContext(sideBarContext);

export { useSideBar, SideBarProvider };
