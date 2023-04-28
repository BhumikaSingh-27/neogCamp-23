import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

export const VideoList = () => {
  const { videoData, addToLikedVideoList, addToWatchList } =
    useContext(VideoContext);

  return (
    <div className="list-video">
      <h2>All videos</h2>
      {videoData.map(
        ({
          id,
          title,
          description,
          url,
          thumbnail,
          duration,
          liked,
          inWatchList,
        }) => (
          <div className="container" key={id}>
            <a href={url}>
              {" "}
              <img src={thumbnail} alt="" width="200px" height="200px" />
            </a>
            <p>{title}</p>
            <NavLink to={`/videos/${id}`}>WATCH VIDEO</NavLink>
            <div>
              <button onClick={() => addToLikedVideoList(id)}>
                {" "}
                {liked ? "Liked" : "Like"}
              </button>
              <button onClick={() => addToWatchList(id)}>
                {inWatchList ? "Added to Watch later" : "Add to Watch later"}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};
