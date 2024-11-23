import { applyMiddleware, combineReducers, createStore } from "redux";
import { taskReducer } from "./taskReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
    tasks:taskReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
