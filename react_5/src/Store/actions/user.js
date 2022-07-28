import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SELECT_USER,
} from "./../types/user";

const addUserAction = (user) => {
  return { type: ADD_USER, payload: user };
};

const selectUserAction = (id) => {
  return { type: SELECT_USER, payload: id };
};

const updateUserAction = (user) => {
  return { type: UPDATE_USER, payload: user };
};

const deleteUserAction = (id) => {
  return { type: DELETE_USER, payload: id };
};

export { addUserAction, selectUserAction, updateUserAction, deleteUserAction };
