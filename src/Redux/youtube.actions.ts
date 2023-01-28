import { ThunkAction } from "redux-thunk/es/types";
import { rootState } from "./store";
import { AnyAction } from "redux";
import { YT_LOADING, YT_ERROR, YT_GETDATA, YT_GETSINGLEDATA, YT_ORDER, YT_PG_TOKEN, YT_QUERY, YT_RESET } from "./youtube.types";
import { getYoutubeData } from "./youtube.api";
import { Item } from "../Constants/Interfaces";

export const getYTData =
  (order: string, pgToken: string, query: string): ThunkAction<void, rootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({ type: YT_LOADING });
    try {
      let data = await getYoutubeData(order, pgToken, query);
      dispatch({ type: YT_GETDATA, payload: data?.data });
    } catch (err) {
      dispatch({ type: YT_ERROR });
    }
  };

export const setQuery =
  (query: string): ThunkAction<void, rootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({ type: YT_QUERY, payload: query });
  };

export const setPgToken =
  (pgToken: string): ThunkAction<void, rootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({ type: YT_PG_TOKEN, payload: pgToken });
  };

export const setOrder =
  (order: string): ThunkAction<void, rootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({ type: YT_ORDER, payload: order });
  };

export const resetAll = (): ThunkAction<void, rootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: YT_RESET });
};

export const getSingleData =
  (singleData: Item): ThunkAction<void, rootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({ type: YT_GETSINGLEDATA, payload: singleData });
  };
