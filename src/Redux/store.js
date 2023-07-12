import { createStore } from "redux";
import { modalOpenReducer } from "./modalReducer";

export const store = createStore(modalOpenReducer)
