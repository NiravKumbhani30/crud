import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false },
  emps: [],
  emp: "",
  error: "",
  loading: false,
};

export const ReducerSlice = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    getUserData: (state, action) => {
      state.emps = action.payload;
    },
    isLoading: (state) => {
      state.loading = true;
    },
    errorHandle: (state, action) => {
      state.error = action.payload;
    },
    getSingleUserData: (state, action) => {
      state.emp = action.payload;
    },
    emtUser: (state) => {
      state.emp = "";
    }
  },
});

export const {
  toggleChangeAction,
  isLoading,
  getUserData,
  errorHandle,
  getSingleUserData,
  emtUser
} = ReducerSlice.actions;

export default ReducerSlice.reducer;
