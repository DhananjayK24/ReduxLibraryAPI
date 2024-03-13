import {legacy_createStore as createStore, combineReducers, applyMiddleware, legacy_createStore} from "redux";
import {thunk} from "redux-thunk";
import { bookReducer } from "./reducers/bookReducer";

const reducer = combineReducers({
    Book: bookReducer
});

const initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    initialState, 
    applyMiddleware(...middleware)
);

export default store;