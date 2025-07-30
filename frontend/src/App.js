import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [hiddenCards, setHiddenCards] = useState({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("http://backend-service.default.svc.cluster.local:5050/api/videos");
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Failed to fetch videos:", err.message);
      }
    };
  
    fetchVideos();
  }, []);
  

  const handleClick = (event, video) => {
    event.preventDefault();

    setHiddenCards((prev) => ({ ...prev, [video.id]: true }));

    setTimeout(() => {
      window.open(video.url, "_blank");
    }, 1000);

    setTimeout(() => {
      setHiddenCards((prev) => ({ ...prev, [video.id]: false }));
    }, 3000);
  };

  return (
    <div className="app-container">
      <h1>DevOpsTube</h1>
      <p className="subtitle">Your CI/CD Learning Journey</p>
      <div className="video-list">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`video-card ${hiddenCards[video.id] ? "vaporize" : ""
              }`}
          >
            <h3>{video.title}</h3>
            <a href={video.url} target="_blank" rel="noopener noreferrer" onClick={(e) => handleClick(e, video)}>
              <i className="fas fa-play-circle" style={{ marginRight: "8px" }}></i>
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
