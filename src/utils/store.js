import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
    }
});

export default store;