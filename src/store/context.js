import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [pack, setPack] = useState([]);

  return (
    <AppContext.Provider value={{ pack, setPack }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }