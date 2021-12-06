import React from "react";
import Jumbotron from "../Tools/Jumbotron";
import Drawer from "../Tools/Drawer";

export default function Mission() {
  return (
    <>
      <div class="mission-page">
        <div class="w3-hide-large burger-menu">
          <Drawer />
        </div>
        <div class="w3-hide-medium w3-hide-small">
          <Jumbotron page="mission" />
        </div>
        <div class="mission-1-container">
          <div class="card">
            <div class="title cursive">Why</div>
            <p>
              We believe in a future where we understand our dependency on
              pollinating species for survival. A future that recognises when we
              cause a problem.
              <br /> A future that corrects that problem before it becomes a
              real issue.
              <br />
              <br />
              All creatures are an integral part of our ecosystem. In our vision
              of the future, we see respect, tolerance and appreciation as a key
              mindset for all living things. The survival of all species is
              vital and we believe we can help change the way people think about
              our pollinators in a positive way.
              <br />
              <br />
              #BeeAForceForChange
            </p>
          </div>
        </div>
      </div>
      <div class="mission-page-2">
        <div class="mission-2-container">
          <div class="card">
            <div class="title cursive">What</div>
            <p>
              Working together with academic institutes, farming & agrochemical
              communities and our growing network of enthusiastic supporters we
              can efficiently and effectively study threats to endangered
              pollinator species.
              <br />
              <br />
              Creating a global network of data collection points within
              pollinator habitats, we are using data such as imagery, air
              quality, sound, weather, geospatial and movement. to discover ways
              of supporting growth and re-population of our pollinators whilst
              developing safe natural habitats for them to thrive.
              <br />
              <br />
              Spreading knowledge that safely and naturally enhances food
              production across the globe, whilst restoring biodiversity to our
              landscape.
            </p>
          </div>
        </div>
      </div>
      <div class="mission-page-3">
        <div class="mission-3-container">
          <div class="card">
            <div class="title cursive">How</div>
            <p>
              There is no substitute for the power of people with a passion for
              a great cause. We are rallying support and sponsorship from a
              growing number of such people; school children, mum’s and dad’s,
              data scientists and university professors, business professionals
              and those who believe in the power of being part of sympathetic
              natural ecosystem.
              <br />
              <br />
              Our goal is to place 1,000+ Smart Habitats every year globally and
              the only way we can do this is with your support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
