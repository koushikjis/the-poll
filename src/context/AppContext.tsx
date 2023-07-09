import React, { createContext, useReducer } from 'react';

interface AppState {
  // Define your state properties here
}

interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

interface Props {
  children: React.ReactNode;
}

const initialState: AppState = {
  // Set initial state values here
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type Action = | { type: 'SET_COUNT'; payload: number };

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<Props> = ( {children} ) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppContext;
