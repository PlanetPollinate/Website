import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Jumbotron from "../Tools/Jumbotron";
import Drawer from "../Tools/Drawer";

export default function Home() {
  return (
    <div class="landing-page">
      <div class="w3-hide-large burger-menu">
        <Drawer />
      </div>
      <div class="w3-hide-medium w3-hide-small">
        <Jumbotron page="home" />
      </div>
      <div class="smCenter-lgRight" style={{ paddingTop: "10%" }}>
        <div class="large shadow grey">PLANET</div>
        <div class="large cursive shadow orange">Pollinate</div>
      </div>
    </div>
  );
}
