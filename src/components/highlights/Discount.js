import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade>
            <div className="discount_porcentage">
              <span>23%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>Sed ut perspiciatis unde omnis iste natu</p>

              <div>button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
