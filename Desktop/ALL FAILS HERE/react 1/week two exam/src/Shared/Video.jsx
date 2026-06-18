import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import video1 from '../assets/3c4c7f69ead5367bbc40e2fa0c69a652680307e1.png'
import video2 from '../assets/Container (1).png'
import video3 from '../assets/Container (1).png'
import video4 from '../assets/Container (1).png'
import video5 from '../assets/Container (1).png'

const videos = [
  { id: 1, img: video1, url: "https://www.youtube.com/embed/Ja3IH_ZnAGg" },
  { id: 2, img: video2, url: "https://www.youtube.com/embed/Ja3IH_ZnAGg" },
  { id: 3, img: video4, url: "https://www.youtube.com/embed/Ja3IH_ZnAGg" },
  { id: 4, img: video3, url: "https://www.youtube.com/embed/Ja3IH_ZnAGg" },
  { id: 5, img: video5, url: "https://www.youtube.com/embed/Ja3IH_ZnAGg" }
];

export  function Video() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div style={{
      backgroundColor: "#060606",
      padding: "80px 10%",
      fontFamily: "'Poppins', sans-serif",
      textAlign: "center",
      position: "relative"
    }}>
      
      <style>{`
        .video-grid-master {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto 50px auto;
          height: 488px;
        }
        .right-sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 24px;
          height: 100%;
        }
        .video-box {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justifyContent: center;
          background-color: #111;
        }
        .video-box img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .video-box:hover img {
          transform: scale(1.05);
        }
        .play-btn {
          position: relative;
          z-index: 5;
          width: 48px;
          height: 48px;
          background-color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justifyContent: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        @media (max-width: 850px) {
          .video-grid-master {
            grid-template-columns: 1fr;
            height: auto;
          }
          .main-video-item {
            height: 300px;
          }
          .right-sub-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .sub-video-item {
            height: 220px;
          }
        }
      `}</style>

      <span style={{
        backgroundColor: "#FFF200",
        color: "#000000",
        padding: "6px 16px",
        borderRadius: "100px",
        fontSize: "12px",
        fontWeight: "700",
        display: "inline-block",
        marginBottom: "20px"
      }}>
        Video Gallery
      </span>

      <h2 style={{
        color: "#FFFFFF",
        fontSize: "40px",
        fontWeight: "700",
        margin: "0 auto 50px auto",
        maxWidth: "600px",
        lineHeight: "1.3"
      }}>
        Journey to the Most Beautiful Places on Earth
      </h2>

      <div className="video-grid-master">
        
        <div className="main-video-item">
          <div className="video-box flex justify-center items-center" onClick={() => setActiveVideo(videos[0].url)}>
            <img src={videos[0].img} alt="Gallery" />
            <div className="play-btn flex justify-center">
              <PlayArrowIcon style={{ color: "#000000", fontSize: "32px", paddingLeft: "0px" }} />
            </div>
          </div>
        </div>


        <div className="right-sub-grid">
          {videos.slice(1).map((item) => (
            <div key={item.id} className="sub-video-item">
              <div className="video-box flex justify-center" onClick={() => setActiveVideo(item.url)}>
                <img src={item.img} alt="Gallery" />
                <div className="play-btn flex justify-center items-center">
                  <PlayArrowIcon style={{ color: "#000000", fontSize: "32px", paddingLeft: "0px" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <button style={{
        backgroundColor: "#FFF200",
        border: "none",
        borderRadius: "100px",
        padding: "14px 28px",
        fontSize: "14px",
        fontWeight: "600",
        color: "#000000",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer"
      }}>
        <GridViewIcon style={{ fontSize: "18px" }} /> Load More Tours
      </button>

      {activeVideo && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <button 
            onClick={() => setActiveVideo(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer"
            }}
          >
            <CloseIcon style={{ fontSize: "36px" }} />
          </button>
          <div style={{ width: "90%", maxWidth: "850px", aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src={`${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ borderRadius: "24px", border: "none" }}
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
}
