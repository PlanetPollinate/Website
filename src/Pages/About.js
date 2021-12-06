import React from "react";
import Drawer from "../Tools/Drawer";
import Jumbotron from "../Tools/Jumbotron";

export default function About() {
  return (
    <div class="about-page">
      <div class="w3-hide-large burger-menu">
        <Drawer />
      </div>
      <div class="w3-hide-medium w3-hide-small">
        <Jumbotron page="about" />
      </div>
      <div class="about-container">
        <div class="card">
          <div class="title cursive">Us</div>
          <p>
            We are a small group of IT professionals with over 125 years
            <br />
            experience and a passion for our environment.
            <br />
            <br />
            We want to use technology to:
            <ul>
              <li>
                discover ways of reversing the decline in our pollinator species
              </li>
              <br />
              <li>
                provide knowledge and evidence to build a greater understanding
                of
                <br />
                the effect that farming and building practices have on the
                environment
              </li>
              <br />

              <li>
                and to provide ways of enabling immediate intervention,
                <br />
                alongside medium and long term change.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
