import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SELECT_USER,
} from "./../types/user";

const addUserAction = (user) => ({ type: ADD_USER, payload: user });
const selectUserAction = (id) => ({ type: SELECT_USER, payload: id });
const updateUserAction = (user) => ({ type: UPDATE_USER, payload: user });
const deleteUserAction = (id) => ({ type: DELETE_USER, payload: id });

export { addUserAction, selectUserAction, updateUserAction, deleteUserAction };
