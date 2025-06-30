import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DState {
  nums: number[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: DState = {
  nums: [],
  status: "idle",
};

const dSlice = createSlice({
  name: "d",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNumbers.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchNumbers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.nums = action.payload;
    });
    builder.addCase(fetchNumbers.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

const fakeFetchNumbers = async () => {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      const failChance = 0.3;
      if (Math.random() < failChance) {
        reject(new Error("Failed to fetch numbers!"));
      } else {
        const numbers = Array.from(
          { length: 5 },
          () => Math.floor(Math.random() * 9) + 1
        );
        resolve(numbers);
      }
    }, 5000);
  });
};

export const fetchNumbers = createAsyncThunk("d/fetchNums", async () => {
  const numberList = await fakeFetchNumbers();
  return numberList;
});

export default dSlice.reducer;
