/* eslint-disable no-unused-vars */
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { SpaceDocument } from "./space.interfaces";
import SpaceServices from "./space.services";

interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface SpaceState extends AsyncState {
  spaces: SpaceDocument[];
}

const initialState: SpaceState = {
  spaces: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getSpaces = createAsyncThunk("space", async () => {
  try {
    return await SpaceServices.getSpaces();
  } catch (error) {
    console.log("Error: ", error);
    return [];
  }
});

export const SpaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<SpaceState>) => {
    builder
      // GET SPACES
      .addCase(getSpaces.pending, (state) => {
        state.isLoading = true;
        console.log({ pending: state });
      })
      .addCase(getSpaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.spaces = action.payload?.data || [];
        // console.log({ fulfil: state, action: action.payload });
      })
      .addCase(getSpaces.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.spaces = [];
        console.log({ reject: state });
      });
  },
});

export default SpaceSlice;
