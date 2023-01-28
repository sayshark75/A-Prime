import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../Hooks/yt_Hooks";
import HomePage from "../Pages/HomePage/HomePage";
import VideoViewPage from "../Pages/VideoViewPage/VideoViewPage";

type Props = {};

const AllRoutes = (props: Props) => {
  const { singleData } = useAppSelector((store) => store.yt_M);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video" element={<VideoViewPage singleData={singleData} />} />
    </Routes>
  );
};

export default AllRoutes;
