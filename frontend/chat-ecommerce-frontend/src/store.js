import {configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import userSlice from "./features/UserSlice";
import appApi from "./services/appApi";

//  persist our store
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";

//reducers

const reducer = combineReducers({
    user: userSlice,
    product: productSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key:"root",
    storage,
    blackList: [appApi.reducerPath, "products"],
};

