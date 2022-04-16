import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "../slice/slice";
import { save, load } from "redux-localstorage-simple";

export const store = configureStore({
    reducer: {
        todo: todoSlice
    },
    preloadedState: load(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});
// 配列ReturnTypeに型指定。
export type RootState = ReturnType<typeof store.getState>;