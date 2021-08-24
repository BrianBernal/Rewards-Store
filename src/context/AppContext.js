// react
import { createContext } from "react";

export const AppContext = createContext({
  availableCoins: 0,
  setAvailableCoins: () => {},
});
