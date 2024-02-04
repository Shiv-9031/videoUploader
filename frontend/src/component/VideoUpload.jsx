import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constant";
import Videolist from "./Videolist";

function VideoUpload() {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    for (let key in videos) {
      formData.append("videos", videos[key]);
    }
    formData.append("name", name);

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formData)
      .then((success) => alert("submitted successfully"))
      .catch((error) => console.log(error));
    console.log(formData);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="videos">Videos</label>
            <input
              type="file"
              name="videos"
              className="form-control"
              id="videos"
              multiple
              accept="mp4,mkv"
              onChange={(e) => setVideos(e.target.files)}
            />
          </div>
          <button type="submit">submit</button>
        </form>
        <div className="video-list">
          <Videolist />
        </div>
      </div>
    </>
  );
}

export default VideoUpload;
