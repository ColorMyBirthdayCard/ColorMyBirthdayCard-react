import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  memberId: null,
  userName: null,
  userBirthday: null,
  isLogged: false
};

export const UserContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        memberId: action.memberId,
        userName: state.userName,
        userBirthday: state.userBirthday,
        isLogged: true
      };
    }
    case 'LOGOUT': {
      return {
        memberId: null,
        userName: state.userName,
        userBirthday: state.userBirthday,
        isLogged: false
      };
    }
    case 'FETCH': {
      return {
        memberId: state.memberId,
        userName: action.userName,
        userBirthday: action.userBirthday,
        isLogged: state.isLogged
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  if (!state) throw new Error('Cannot find UserProvider');
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('Cannot find UserProvider');
  return dispatch;
};
