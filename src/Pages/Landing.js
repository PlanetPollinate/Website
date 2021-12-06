import React from "react";
import BeauBee from "../Assets/BeauBee.png";
import Jumbotron from "../Tools/Jumbotron";

export default function Landing() {
  return (
    <div className="PageContainer">
      <img
        src={BeauBee}
        alt="background"
        width={1920}
        height={1080}
        style={{ position: "fixed", zIndex: -1 }}
      />
      <Jumbotron page="home" />
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1 }}></div>
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginLeft: "10vw",
            }}
          >
            <div className="TitleSans">PLANET</div>
            <div className="TitleCursive">Pollinate</div>
          </div>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
}
