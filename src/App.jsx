import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Search_header from "./components/Search_header/Search_header";
import Video_list from "./components/video_list/Video_list";
import VideoDetail from "./components/VideoDetail/VideoDetail";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const home = () => {
    setSelectedVideo(null);
  };
  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => {
        setVideos(items);
        setSelectedVideo(null);
      });
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Search_header onSearch={search} home={home} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <Video_list
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
