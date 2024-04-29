import { URL } from "@/constants/SiteUrl";
import {availability, userData, userState} from "@/constants/types/allTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
export const getUserFun = createAsyncThunk("user/fetch", async (id: string) => {
  try {
    const response = await axios.get(`${URL}/api/user/?id=${id}`);
    console.log("🚀 ~ getUserFun ~ response:", response);
    const user:userData = {
      id: response.data.user.id,
      email: response.data.user.email,
      fullname: response.data.user.fullname,
      username: response.data.user.username,
    };
    console.log("🚀 ~ getUserFun ~ user:", user)
    const availability:availability = response.data.user.availability;
    console.log("🚀 ~ getUserFun ~ availability:", availability)
    const meeting = response.data.user.meeting;
    console.log("🚀 ~ getUserFun ~ meeting:", meeting)
    return { user, availability, meeting };
  } catch (error: AxiosError | any) {
    console.log(`${error.message}`);
    throw error;
  }
});

const initialState: userState = {
  user: {
    id: '',
    email: '',
    fullname: '',
    username: ''
  },
  meeting: [],
  availability: {
    id: '',
    startHour: 0,
    endHour: 0,
    days: [],
    userId: '',
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserFun.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserFun.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.availability = action.payload.availability;
      state.meeting = action.payload.meeting;
    });
    builder.addCase(getUserFun.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default user.reducer;
