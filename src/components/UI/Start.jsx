import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";
const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt="start"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>
          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="section__title">
              Ready to make a <span className="highlights"> change?</span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
              non dolore nobis laudantium veritatis amet quisquam cum quos
              quibusdam consequatur enim voluptates numquam hic illo quia
              obcaecati maxime possimus rerum!
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
