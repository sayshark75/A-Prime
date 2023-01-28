import { appDispatch, rootState } from "../Redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type dispatchFun = () => appDispatch;

export const useAppDispatch: dispatchFun = useDispatch;
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
