import { YT_LOADING, YT_ERROR, YT_GETDATA, YT_GETSINGLEDATA, YT_ORDER, YT_PG_TOKEN, YT_QUERY, YT_RESET } from "./youtube.types";
import { AnyAction } from "redux";
import { Item, ytDataInterface } from "../Constants/Interfaces";

interface initInterface {
  ytData: ytDataInterface;
  singleData: Item;
  loading: boolean;
  error: boolean;
  order: string;
  pgToken: string;
  query: string;
}

const initData: initInterface = {
  ytData: {},
  singleData: {
    kind: "",
    etag: "",
    id: {
      kind: "",
      videoId: "",
    },
    snippet: {
      publishedAt: "",
      channelId: "",
      title: "",
      description: "",
      thumbnails: {
        default: {
          url: "",
          width: 0,
          height: 0,
        },
        medium: {
          url: "",
          width: 0,
          height: 0,
        },
        high: {
          url: "",
          width: 0,
          height: 0,
        },
      },
      channelTitle: "",
      liveBroadcastContent: "",
      publishTime: "",
    },
  },
  loading: false,
  error: false,
  order: "relevance",
  pgToken: "",
  query: "",
};

export const youtubeReducer = (state = initData, { type, payload }: AnyAction) => {
  switch (type) {
    case YT_LOADING: {
      return { ...state, loading: true };
    }
    case YT_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case YT_GETDATA: {
      return { ...state, ytData: payload, loading: false };
    }
    case YT_GETSINGLEDATA: {
      return { ...state, singleData: payload };
    }
    case YT_ORDER: {
      return { ...state, order: payload };
    }
    case YT_PG_TOKEN: {
      return { ...state, pgToken: payload };
    }
    case YT_QUERY: {
      return { ...state, query: payload };
    }
    case YT_RESET: {
      return { ...state, order: "relevance", query: "", pgToken: "" };
    }

    default: {
      return state;
    }
  }
};
