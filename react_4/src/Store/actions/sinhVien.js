import { ADD_SV, UPDATE_SV, DELETE_SV, SELECT_SV } from "./../types/sinhVien";

const addSVAction = (values) => {
  return {
    type: ADD_SV,
    payload: values,
  };
};
const updateSVAction = (values) => {
  return {
    type: UPDATE_SV,
    payload: values,
  };
};
const deleteSVAction = (id) => {
  return {
    type: DELETE_SV,
    payload: id,
  };
};
const selectSVAction = (id) => {
  return {
    type: SELECT_SV,
    payload: id,
  };
};

export { addSVAction, updateSVAction, deleteSVAction, selectSVAction };
