import { useState } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {
  const [state, setState] = useState({ availableCoins: 0 });

  const setAvailableCoins = (availableCoins) => {
    setState((prevState) => ({ ...prevState, availableCoins }));
  };
  // https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component

  return (
    <AppContext.Provider value={{ state, setAvailableCoins }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
