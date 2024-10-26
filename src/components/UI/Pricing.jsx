import React from "react";
import "../../styles/pricing.css";
const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Voluptatem quisquam id culpa neque beatae enim.
          </p>
        </div>

        {/* ================== Pricing Wrapper =============== */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-delay="200"
            data-duration="1000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className="pricing section__title">
                $50 <span>/month</span>{" "}
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Customer Support
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Personal Trainer
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  5 classes per week
                </li>
              </ul>

              <div className="join">
                <button className="register__btn">Join Now </button>
              </div>
            </div>
          </div>{" "}
          {/* ========= pricing itme-2 ===============*/}
          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-delay="300"
            data-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className="pricing section__title">
                $70 <span>/month</span>{" "}
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Customer Support
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Personal Trainer
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  5 classes per week
                </li>
              </ul>

              <div className="join">
                <button className="register__btn">Join Now </button>
              </div>
            </div>
          </div>{" "}
          {/* ============ pricing item-3 ============ */}
          <div
            className="pricing__item pricing__item-03"
            data-aos="fade-up"
            data-aos-delay="400"
            data-duration="2000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Premium Member</h2>
              <h2 className="pricing section__title">
                $100 <span>/month</span>{" "}
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Customer Support
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Personal Trainer
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="ri-checkbox-blank-circle-fill"></i>{" "}
                  </span>
                  5 classes per week
                </li>
              </ul>

              <div className="join">
                <button className="register__btn">Join Now </button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
