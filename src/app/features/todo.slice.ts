import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { compareAsc } from "date-fns";

import { RootState } from "@app/store";

export type Todo = {
  id: string;
  content: string;
  isFinished: boolean;
  createdAt: Date | number;
  finishedAt: Date | null | number;
};

const todoAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id,
  sortComparer: (a, b) => compareAsc(a.createdAt, b.createdAt),
});

const TodoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: todoAdapter.addOne,
    removeTodo: todoAdapter.removeOne,
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;

      const todo = state.entities[todoId];

      if (!todo) return;

      todo.isFinished = !todo.isFinished;
      todo.finishedAt = todo.isFinished ? new Date() : null;
    },
  },
});

export const todoSelectors = todoAdapter.getSelectors<RootState>((state) => state.todos);

export const { addTodo, toggleTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
