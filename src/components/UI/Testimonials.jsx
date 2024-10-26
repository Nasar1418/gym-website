import React, { useEffect, useState } from "react";
import "../../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";
export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwipper"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Jessica Fenandes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  numquam repellendus quae commodi illo cupiditate deserunt
                  alias laudantium eveniet nesciunt?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4>Jessica Fenandes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  numquam repellendus quae commodi illo cupiditate deserunt
                  alias laudantium eveniet nesciunt?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Jessica Fenandes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  numquam repellendus quae commodi illo cupiditate deserunt
                  alias laudantium eveniet nesciunt?
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
