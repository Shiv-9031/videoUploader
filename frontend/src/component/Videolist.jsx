import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constant";

function Videolist() {
  const [videolist, setVideolist] = useState([]);

  function getallVideos() {
    axios
      .get(`${BACKEND_URI}/api/v1/media/getall`)
      .then((result) => setVideolist(result.data.media))
      .catch((err) => {
        console.error(err);
        alert("Error happening in fetching");
      });
  }

  useEffect(() => {
    getallVideos();
  }, []);

  return (
    <>
      {videolist.map((media, index) => {
        return (
          <div className="video-list">
            <h2>{media.name}</h2>
            {media.videos.map((video, index) => {
              console.log(`${BACKEND_URI}${video}`);
              return (
                <video
                  preload="auto"
                  width="320"
                  height="240"
                  src={`${BACKEND_URI}${video}`}
                  controls
                >
                  :your browser doesn't support video
                </video>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Videolist;
