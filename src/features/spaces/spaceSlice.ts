import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import RocketPreparedData from "./space.interfaces";
import SpaceServices from "./space.services";

interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface SpaceState extends AsyncState {
  spaces: RocketPreparedData[];
  filteredSpaces: RocketPreparedData[];
}

const initialState: SpaceState = {
  spaces: [],
  filteredSpaces: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getSpaces = createAsyncThunk("space", async () => {
  try {
    return await SpaceServices.getSpaces();
  } catch (error) {
    return [];
  }
});

export const SpaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    spacePagination: (state: SpaceState, action: PayloadAction<number>) => {
      state.filteredSpaces = state.spaces.slice(0, action.payload);
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<SpaceState>) => {
    builder
      // GET SPACES
      .addCase(getSpaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSpaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.spaces = action.payload || [];
      })
      .addCase(getSpaces.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.spaces = [];
      });
  },
});

export const { spacePagination } = SpaceSlice.actions;

export default SpaceSlice.reducer;
