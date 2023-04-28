import { useEffect, useState } from "react";
import { createContext } from "react";

import { fakeFetch } from "../api";

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/videos"
      );

      if (status === 200) {
        setVideoData(data.videos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addToLikedVideoList = (videoId) => {
    // const likeVideo = videoData.find(({ id }) => id === videoId);
    // console.log(likeVideo);
    const newData = videoData.map((data) =>
      data.id === videoId ? { ...data, liked: true } : data
    );
    setVideoData(newData);
  };

  const addToWatchList = (videoId) => {
    const newData = videoData.map((data) =>
      data.id === videoId ? { ...data, inWatchList: true } : data
    );
    setVideoData(newData);
  };

  const removeFromWatchLaterList = (videoId) => {
    const findVideo = videoData.map((data) =>
      data.id === videoId ? { ...data, inWatchList: !data.inWatchList } : data
    );

    setVideoData(findVideo)
  };

  return (
    <VideoContext.Provider
      value={{
        videoData,
        addToLikedVideoList,
        addToWatchList,
        removeFromWatchLaterList,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
