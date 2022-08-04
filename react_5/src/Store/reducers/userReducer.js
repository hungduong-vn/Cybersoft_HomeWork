import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SELECT_USER,
} from "./../types/user";

const DEFAULT_STATE = {
  userList: [
    {
      id: 1,
      username: "man.nguyen",
      fullName: "Man Ng",
      email: "man.nguyen@gmail.com",
      password: "123",
      phoneNumber: "085512123123",
      type: "Client",
    },
    {
      id: 2,
      username: "khai.tran",
      fullName: "Khai Tran",
      email: "khai.tran@gmail.com",
      password: "123",
      phoneNumber: "085512456456",
      type: "Admin",
    },
  ],
  selectedUser: null,
};

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_USER:
      return { ...state };
    case ADD_USER:
      payload.id = Date.now();
      state.userList.push(payload);
      return { ...state };
    case DELETE_USER:
      return { ...state };
    case UPDATE_USER:
      return { ...state };
    default:
      return state;
  }
};
