import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../store";

// eslint-disable-next-line no-unused-vars
export const useAppSelector = <T>(selector: (state: RootState) => T) => useSelector(selector);
export const useAppDispatch = () => useDispatch<AppDispatch>();
