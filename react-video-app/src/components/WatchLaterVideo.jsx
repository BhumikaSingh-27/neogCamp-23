import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";

export const WatchLaterVideo = () => {
  const { videoData, addToLikedVideoList, removeFromWatchLaterList } =
    useContext(VideoContext);

  return (
    <>
      {videoData
        .filter(({ inWatchList }) => inWatchList)
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
              <h2>Saved to Watch Later</h2>
              <div className="container">
                <a href={url}>
                  {" "}
                  <img src={thumbnail} alt="" width="200px" height="200px" />
                </a>
                <p>{title}</p>
                <a href={url}>WATCH VIDEO</a>
                <div>
                  <button onClick={() => addToLikedVideoList(id)}>
                    {" "}
                    {liked ? "Liked" : "Like"}
                  </button>
                  <button onClick={() => removeFromWatchLaterList(id)}>
                    Remove from Watch later
                  </button>
                </div>
              </div>{" "}
            </div>
          )
        )}

      {videoData.filter(({ inWatchList }) => inWatchList).length === 0 && (
        <h1>
          You haven't saved anything yet..
          <br /> Go back to videos page to explore more!
        </h1>
      )}
    </>
  );
};
