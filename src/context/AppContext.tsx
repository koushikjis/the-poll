import React, { createContext, useReducer } from "react";
import { AppState } from "../Types/types";

interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

interface Props {
  children: React.ReactNode;
}

const initialState: AppState = {
  pollCount: 0,
  user: {
    name: "",
    loginTime: new Date(""),
  },
};

const AppContext = createContext<AppContextProps>({
  state: { pollCount: 0, user: { name: "", loginTime: new Date("") } },
  dispatch: () => {},
});

type Action =
  | { type: "SET_POLL_COUNT"; payload: number }
  | { type: "SET_LOG_IN"; payload: { name: string; loginTime: Date } }
  | { type: "SET_LOG_OUT"; payload: { name: string; loginTime: undefined } };

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_POLL_COUNT":
      return { ...state, pollCount: action.payload };
    case "SET_LOG_IN":
      return { ...state, user: action.payload };
    case "SET_LOG_OUT":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
