import { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

export const VideoDetail = () => {
  const { videoData, addToLikedVideoList, addToWatchList } =
    useContext(VideoContext);
  const { videoId } = useParams();

  const details = videoData.filter(({ id }) => id.toString() === videoId);

  return (
    <>
      {details.map(
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
            <h1>{title}</h1>
            <div className="container" key={id}>
              <a href={url}>
                {" "}
                <img src={thumbnail} alt="" width="200px" height="200px" />
              </a>
              <p>{title}</p>
              <NavLink to={`/videos/${id}`}>WATCH VIDEO</NavLink>
              <h3>description:{description}</h3>
              <p>
                <i>Duration: {duration}</i>
              </p>
              <div>
                <button onClick={() => addToLikedVideoList(id)}>
                  {" "}
                  {liked ? "Liked" : "Like"}
                </button>
                <button onClick={() => addToWatchList(id)}>
                  {inWatchList ? "Added to Watch later" : "Add to Watch later"}
                </button>
              </div>
            </div>{" "}
          </div>
        )
      )}
    </>
  );
};
