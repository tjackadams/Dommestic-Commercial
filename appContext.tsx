import { createContext } from "react";
import { OpeningTime } from "./configuration/opening-times";

const AppContext = createContext<{
  openingTimes: OpeningTime[];
  setOpeningTimes: Function;
}>({
  openingTimes: [],
  setOpeningTimes: () => {},
});

export default AppContext;
