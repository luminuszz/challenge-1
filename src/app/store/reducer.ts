import { combineReducers } from "@reduxjs/toolkit";

import TodoReducer from "@app/features/todo.slice";

const RootReducer = combineReducers({
  todos: TodoReducer,
});

export default RootReducer;
