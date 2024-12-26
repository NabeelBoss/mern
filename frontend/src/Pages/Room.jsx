import React from "react";
import { Link } from "react-router-dom";

const Room = () => {
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
            alt="Room Grid"
            className="page-header__shape"
          />
          <h2 className="page-header__title">Rooms</h2>
          <ul className="solinom-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Room</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="room-two-page">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-4">
              <div className="room-details__sidebar">
                <div
                  className="product__search wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <form action="#" className="product__sidebar__search">
                    <button type="submit" aria-label="search submit">
                      <span>
                        <i className="icon-search"></i>
                      </span>
                    </button>
                    <input type="text" placeholder="Type Here" />
                  </form>
                </div>

                <div
                  className="room-details__sidebar__item room-details__sidebar__item--three wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <div className="sidebar__content">
                    <form
                      className="sidebar__content__form__inner contact-form-validated"
                      action="https://pixydrops.com/solinom-html/inc/sendemail.php"
                      noValidate
                    >
                      <div className="sidebar__content__control">
                        <label htmlFor="checkin">Check-in</label>
                        <input
                          className="solinom-datepicker"
                          id="checkin"
                          type="text"
                          name="checkin"
                          placeholder="Add a Date"
                        />
                        <i className="icon-calendar-5-1"></i>
                      </div>
                      <div className="sidebar__content__control">
                        <label htmlFor="checkout">Check-Out</label>
                        <input
                          className="solinom-datepicker"
                          id="checkout"
                          type="text"
                          name="checkout"
                          placeholder="Add a Date"
                        />
                        <i className="icon-calendar-5-1"></i>
                      </div>
                      <div className="sidebar__content__control">
                        <label htmlFor="guests">Guests</label>
                        <div className="quantity-box">
                          <button type="button" className="sub">
                            <span className="fa fa-minus"></span>
                          </button>
                          <input id="guests" type="text" defaultValue="1" />
                          <button type="button" className="add">
                            <span className="fa fa-plus"></span>
                          </button>
                        </div>
                      </div>
                      <div className="sidebar__content__control">
                        <label htmlFor="Location">Location</label>
                        <input
                          id="Location"
                          type="text"
                          name="location"
                          placeholder="Where to Next?"
                        />
                        <i className="icon-map-pin"></i>
                      </div>
                      <div className="sidebar__content__control">
                        <button
                          type="submit"
                          className="solinom-btn solinom-btn--base"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="room-details__sidebar__item room-details__sidebar__item--two wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <h4 className="room-details__sidebar__title">Last Minute</h4>
                  <ul className="room-details__sidebar__posts list-unstyled">
                    <li className="room-details__sidebar__posts__item">
                      <div className="room-details__sidebar__posts__image">
                        <img
                          src="assets/images/room/room-s-1-1.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="room-details__sidebar__posts__content">
                        <span className="room-details__sidebar__posts__price">
                          $360
                        </span>
                        <h4 className="room-details__sidebar__posts__title">
                          <a href="blog-details-right.html">The Complete Web</a>
                        </h4>
                        <div className="room-details__sidebar__posts__star">
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                        </div>
                      </div>
                    </li>
                    <li className="room-details__sidebar__posts__item">
                      <div className="room-details__sidebar__posts__image">
                        <img
                          src="assets/images/room/room-s-1-2.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="room-details__sidebar__posts__content">
                        <span className="room-details__sidebar__posts__price">
                          $340
                        </span>
                        <h4 className="room-details__sidebar__posts__title">
                          <a href="blog-details-right.html">
                            The Complete Room
                          </a>
                        </h4>
                        <div className="room-details__sidebar__posts__star">
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                        </div>
                      </div>
                    </li>
                    <li className="room-details__sidebar__posts__item">
                      <div className="room-details__sidebar__posts__image">
                        <img
                          src="assets/images/room/room-s-1-3.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="room-details__sidebar__posts__content">
                        <span className="room-details__sidebar__posts__price">
                          $500
                        </span>
                        <h4 className="room-details__sidebar__posts__title">
                          <a href="blog-details-right.html">
                            The Complete Hotel
                          </a>
                        </h4>
                        <div className="room-details__sidebar__posts__star">
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                          <i className="icon-star1"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row gutter-y-30">
                <div className="col-sm-6">
                  <div
                    className="room-card wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <div className="room-card__thumb">
                      <img
                        src="assets/images/room/room-1-1.jpg"
                        alt="Deluxe Room"
                      />
                      <p className="room-card__feature">Featured</p>
                      <Link to={"/RoomDetails"} className="room-card__love">
                       <i className="fa fa-eye"></i>
                      </Link>
                    </div>
                    <div className="room-card__top">
                      <div className="room-card__top__inner">
                        <div className="room-card__top__popup">
                          <a
                            href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                            className="room-card__top__popup__item video-popup"
                          >
                            <i className="icon-video-camera-1-1"></i>
                          </a>
                          <Link
                            className="room-card__top__popup__item room-list-card-popup"
                            href="#"
                            data-gallery-options={`{
                            "items": [
                              {
                                "src": "assets/images/room/room-l-1-1.jpg"
                              },
                              {
                                "src": "assets/images/room/room-l-1-2.jpg"
                              },
                              {
                                "src": "assets/images/room/room-l-1-3.jpg"
                              }
                            ],
                            "gallery": {
                              "enabled": true
                            },
                            "type": "image"
                          }`}
                          >
                            <span className="icon-photo-camera-1"></span>
                          </Link>
                        </div>
                        <div className="room-card__top__price">
                          <span className="room-card__top__price__content">
                            $120
                          </span>
                          <p className="room-card__top__price__text">Night</p>
                        </div>
                      </div>
                    </div>
                    <div className="room-card__content">
                      <div className="room-card__content__inner__element"></div>
                      <h4 className="room-card__content__title">
                        <a href="room-details-3.html">Deluxe Room</a>
                      </h4>
                      <p className="room-card__content__text">
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                      <div className="room-card__content__star">
                        <div className="room-card__content__star__item">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <p className="room-card__content__star__parson">
                          Person: <strong>08</strong>
                        </p>
                      </div>
                      <a
                        href="blog-details-left.html"
                        className="room-card__content__btn solinom-btn"
                      >
                        Book Now
                      </a>
                      <div className="room-card__content__element">
                        <img src="assets/images/shapes/room-1-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-12">
                  <ul className="post-pagination list-unstyled justify-content-end">
                    <li className="active">
                      <Link>1</Link>
                    </li>
                    <li>
                      <Link>2</Link>
                    </li>
                    <li>
                      <Link>
                        <i className="icon-right-arrow2"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
