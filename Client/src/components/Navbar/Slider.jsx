import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import tv from "../../assets/tv.png"
import silo from "../../assets/silo.png"
import ghosted from "../../assets/ghosted.png"
import thelast from "../../assets/thelast.png"
import tedlasso from "../../assets/tedlasso.png"
import Shrinking from "../../assets/Shrinking.png"
import bigdoor from "../../assets/bigdoor.png"
import schmigadoon from "../../assets/schmigadoon.png"
import tetris from "../../assets/tetris.png"
import morningshow from "../../assets/morningshow.png"
import frog from "../../assets/frog.png"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{width:"90%",margin:"auto"}}>
        <Slider {...settings}>
          <div>
            <img src={silo} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={tetris} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={tv} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={ghosted} alt=""  style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={thelast} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={tedlasso} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={Shrinking} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={bigdoor} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={schmigadoon} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={morningshow} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

          <div>
          <img src={frog} alt="" style={{width:"95%",margin:"auto"}}/>
          </div>

        </Slider>
      </div>
    );
  }
}