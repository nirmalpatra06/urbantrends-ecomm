import { configureStore } from "@reduxjs/toolkit";
import urbanSlice from "./urbanTrendsSlice";

export const store = configureStore({
  reducer: {
    urbanTrends: urbanSlice,
  },
});
