import React from 'react';
// import Swiper from 'swiper/bundle';
import Swiper from 'swiper';
import './slider.css';



class Slider extends React.Component{

componentDidMount(){
    this.swiper = new Swiper('.swiper-container', {
      direction:'horizontal',
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
      });
    }
    render(){
return(
    <div className="swiperbox">
          <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide">Slide 1</div>
      <div className="swiper-slide">Slide 2</div>
      <div className="swiper-slide">Slide 3</div>
     
    </div>
    {/* <!-- Add Scrollbar --> */}
    <div className="swiper-scrollbar"></div>
  </div>
        
    </div>
);

}


}
export default Slider;