import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";

export const LikedVideos = () => {
  const { videoData, addToWatchList } = useContext(VideoContext);
  return (
    <>
      {videoData
        .filter(({ liked }) => liked)
        .map(
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
            <div key={id}>
              {" "}
              <h2>Find your Liked Video here...❤️</h2>
              <div className="container" key={id}>
                <a href={url}>
                  {" "}
                  <img src={thumbnail} alt="" width="200px" height="200px" />
                </a>
                <p>{title}</p>
                <a href={url}>WATCH VIDEO</a>
                <div>
                  <button> {liked ? "Liked" : "Like"}</button>
                  <button onClick={() => addToWatchList(id)}>
                    {inWatchList
                      ? "Added to Watch later"
                      : "Add to Watch later"}
                  </button>
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
};
