import {
  REMOVE_USER_DATA,
  USER_DATA,
  USER_DATA_ERR,
} from "../types";

const initialState = {
  userData: {
    
  },
  userDataErr: null,
};

export const userDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
        userDataErr: null,
      };

    case USER_DATA_ERR:
      return {
        ...state,
        userDataErr: action.payload,
        userData: null,
      };

    case REMOVE_USER_DATA:
      return {
        ...state,
        userDataErr: null,
        userData: null,
      };

    default:
      return state;
  }
};
