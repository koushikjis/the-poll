import React, { createContext, useReducer } from 'react';

interface AppState {
  pollCount: number
}

interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

interface Props {
  children: React.ReactNode;
}

const initialState: AppState = {
  pollCount:0
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type Action = | { type: 'SET_POLL_COUNT'; payload: number };

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_POLL_COUNT':
      return { ...state, pollCount: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<Props> = ( {children} ) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppContext;
