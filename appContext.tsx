import { createContext } from "react";
import { OpeningTime } from "./configuration/opening-times";

export interface AppState {
  openingTimes: OpeningTime[];
  setOpeningTimes: (openingTimes: OpeningTime[]) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export default AppContext;
