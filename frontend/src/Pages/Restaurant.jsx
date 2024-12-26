import React from "react";
import { Link } from "react-router-dom";

const Restaurant = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <img
            src="assets/images/shapes/page-header-s-1.png"
            alt="Restaurant"
            className="page-header__shape"
          />
          <h2 className="page-header__title">Restaurant</h2>
          <ul className="solinom-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Restaurant</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="resturant-one">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="resturent-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="resturent-card__image">
                  <img
                    src="assets/images/resturent/card-1-1.jpg"
                    alt="Best Hotel Service"
                  />
                  <div className="resturent-card__image__group">
                    <span className="resturent-card__image__hover resturent-card__image__hover--1"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--2"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--3"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--4"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--5"></span>
                  </div>
                </div>
                <div className="resturent-card__content">
                  <div className="resturent-card__icon">
                    <i className="icon-tray"></i>
                  </div>
                  <h3 className="resturent-card__title">
                    <a href="blog-details-right.html">Best Hotel Service</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="resturent-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <div className="resturent-card__image">
                  <img
                    src="assets/images/resturent/card-1-2.jpg"
                    alt="Unforgettable Culinary"
                  />
                  <div className="resturent-card__image__group">
                    <span className="resturent-card__image__hover resturent-card__image__hover--1"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--2"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--3"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--4"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--5"></span>
                  </div>
                </div>
                <div className="resturent-card__content">
                  <div className="resturent-card__icon">
                    <i className="icon-food"></i>
                  </div>
                  <h3 className="resturent-card__title">
                    <a href="blog-details-right.html">Unforgettable Culinary</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="resturent-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="resturent-card__image">
                  <img
                    src="assets/images/resturent/card-1-3.jpg"
                    alt="Best Flavors Presented"
                  />
                  <div className="resturent-card__image__group">
                    <span className="resturent-card__image__hover resturent-card__image__hover--1"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--2"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--3"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--4"></span>
                    <span className="resturent-card__image__hover resturent-card__image__hover--5"></span>
                  </div>
                </div>
                <div className="resturent-card__content">
                  <div className="resturent-card__icon">
                    <i className="icon-store"></i>
                  </div>
                  <h3 className="resturent-card__title">
                    <a href="blog-details-right.html">Best Flavors Presented</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lunch-menu">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-6">
              <div className="lunch-menu__left">
                <h3
                  className="lunch-menu__title wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  Lunch Menu
                </h3>
                <div className="lunch-menu__inner">
                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-1.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$40</span>
                    </div>
                  </div>

                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-2.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$48</span>
                    </div>
                  </div>

                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-3.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$39</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lunch-menu__right">
                <div
                  className="lunch-menu__thumb wow fadeInRight"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <img src="assets/images/resturent/set-1-1.jpg" alt="error" />
                </div>
              </div>
            </div>
          </div>

          <div className="row gutter-y-30 flex-lg-row-reverse padding-top">
            <div className="col-lg-6">
              <div className="lunch-menu__left lunch-menu__left--two">
                <h3
                  className="lunch-menu__title wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  Dinner Menu
                </h3>
                <div className="lunch-menu__inner">
                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-4.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$40</span>
                    </div>
                  </div>

                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-5.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$48</span>
                    </div>
                  </div>

                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-6.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$39</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="lunch-menu__right wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="lunch-menu__thumb lunch-menu__thumb--two">
                  <img src="assets/images/resturent/set-1-2.jpg" alt="error" />
                </div>
              </div>
            </div>
          </div>

          <div className="row gutter-y-30 padding-top">
            <div className="col-lg-6">
              <div className="lunch-menu__left">
                <h3
                  className="lunch-menu__title wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  Lunch Menu
                </h3>
                <div className="lunch-menu__inner">
                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-1.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$40</span>
                    </div>
                  </div>

                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-2.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$48</span>
                    </div>
                  </div>

                  <div
                    className="lunch-menu__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="lunch-menu__content">
                      <h4 className="lunch-menu__content__title">
                        Roasted Chicken with Salad
                      </h4>
                      <p className="lunch-menu__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        lisealteradution in
                      </p>
                    </div>
                    <div className="lunch-menu__price">
                      <div className="lunch-menu__price__thumb">
                        <img
                          src="assets/images/resturent/dish-1-3.png"
                          alt="error"
                        />
                      </div>
                      <span className="lunch-menu__price__item">$39</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lunch-menu__right">
                <div
                  className="lunch-menu__thumb wow fadeInRight"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <img src="assets/images/resturent/set-1-1.jpg" alt="error" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="error-404__btns padding-top padding-bottom"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link
          to={"/menu"}
          className="solinom-btn solinom-btn--base error-404__btn"
          style={{ textAlign: "center" }}
        >
          Check Our Menu
        </Link>
      </div>
    </>
  );
};

export default Restaurant;
