import axios from "axios";

const BaseURL = `${process.env.REACT_APP_BASE_URL}key=${process.env.REACT_APP_YOUTUBE_API}&part=snippet&maxResults=20&safeSearch=strict`;

export const getYoutubeData = async (order: string, pgToken: string, query: string) => {
  return await axios.get(`${BaseURL}&q=${query}&order=${order}&pageToken=${pgToken}`);
};
