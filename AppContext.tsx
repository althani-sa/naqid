import { createContext } from "react";
import { GlobalProps } from "./public/Assets/Types/types";

const contextInitialValues: GlobalProps = {
  isArabic: null,
  screenWidth: 0,
};

const AppContext = createContext<GlobalProps>(contextInitialValues);

export default AppContext;
