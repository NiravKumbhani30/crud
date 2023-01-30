import { addUser, deleteUser, getUsers, updateUser } from "../lib/helper";
import { errorHandle, getUserData, isLoading } from "./reducer";

export function getEmpData() {
  return async (dispatch) => {
    try {
      dispatch(isLoading());
      const res = await getUsers();
      if (res) {
        dispatch(getUserData(res));
      }
    } catch (err) {
      dispatch(errorHandle(err));
    }
  };
}

export function addEmpData(data) {
  return async (dispatch) => {
    try {
      const res = dispatch(isLoading());
      await addUser(data);
    } catch (err) {
      dispatch(errorHandle(err));
    }
  };
}

export function editEmpData(userId, fromData) {
  return async (dispatch) => {
    try {
      const res = dispatch(isLoading());
      await updateUser(userId, fromData);
    } catch (err) {
      dispatch(errorHandle(err));
    }
  };
}

export function removeEmpData(id) {
  return async (dispatch) => {
    try {
      const res = dispatch(isLoading());
      await deleteUser(id);
    } catch (err) {
      dispatch(errorHandle(err));
    }
  };
}
