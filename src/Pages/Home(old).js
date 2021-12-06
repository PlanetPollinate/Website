import React, { Component, useState } from "react";
import BeauBee from "../Assets/BeauBee.png";
import Humming from "../Assets/humming.png";
import Jumbotron from "../Tools/Jumbotron";
import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <div className="container">
      <div className="col-12 header">
        <div className="overlay">
          <div className="TitleSans">PLANET</div>
          <div className="TitleCursive">Pollinate</div>
        </div>
      </div>
      <div className="col-12 divider"></div>
      <div className="col-12 page-1 butterfly">
        <div className="col-6 centerText gradient" style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut alios
          omittam, hunc appello, quem ille unum secutus est. Vide, quantum,
          inquam, fallare, Torquate. Tum ille timide vel potius verecunde:
          Facio, inquit.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-6"
        >
          {/* <div
            className="circle humming"
            style={{ marginTop: "5vh", marginBottom: "5vh" }}
          ></div> */}
        </div>
      </div>

      <div className="col-12 divider"></div>
      <div className="col-12 page-1">
        <div className="col-6 centerText " style={{ color: "white" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin aliud
            quid voles, postea. Quis istud possit, inquit, negare? Ne discipulum
            abducam, times.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-6"
        >
          <div
            className="circle butterfly"
            style={{ marginTop: "5vh", marginBottom: "5vh" }}
          ></div>
        </div>
      </div>
      <div
        className="footer col-12"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" size="large">
            Subscribe
          </Button>
        </div>
        <div className="col-12" style={{ color: "white", textAlign: "center" }}>
          Planet Pollinate. 2021.
        </div>
      </div>
    </div>
  );
}
