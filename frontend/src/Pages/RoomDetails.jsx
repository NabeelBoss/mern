import React from "react";
import { Link } from "react-router-dom";

const RoomDetails = () => {
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
            alt="Room Details"
            className="page-header__shape"
          />
          <h2 className="page-header__title">Room Details</h2>
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

      <section
        className="room-details-three wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <div className="container">
          <div className="row align-items-center gutter-y-30">
            <div className="col-lg-8">
              <h3 className="room-details-three__title">
                <a href="deluxe-room-details.html">Deluxe Room</a>
              </h3>
              <div className="room-details-three__left">
                <div className="room-details-three__inner">
                  <div className="room-details-three__item">
                    <div className="room-details-three__icon">
                      <i className="icon-audience"></i>
                    </div>
                    <div className="room-details-three__content">
                      <h5 className="room-details-three__content__title">
                        8 Person
                      </h5>
                      <span className="room-details-three__content__subtitle">
                        Guests
                      </span>
                    </div>
                  </div>
                  <div className="room-details-three__item">
                    <div className="room-details-three__icon">
                      <i className="icon-clock"></i>
                    </div>
                    <div className="room-details-three__content">
                      <h5 className="room-details-three__content__title">
                        3 days
                      </h5>
                      <span className="room-details-three__content__subtitle">
                        Duration
                      </span>
                    </div>
                  </div>
                  <div className="room-details-three__item">
                    <div className="room-details-three__icon">
                      <i className="icon-selection"></i>
                    </div>
                    <div className="room-details-three__content">
                      <h5 className="room-details-three__content__title">
                        460
                      </h5>
                      <span className="room-details-three__content__subtitle">
                        Guests
                      </span>
                    </div>
                  </div>
                </div>

                <div className="room-details-three__social">
                  <Link to={"/cart"} className="solinom-btn">
                    Book room
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4" style={{ marginTop: "29px" }}>
              <div className="room-details-three__right">
                <div className="room-details-three__top">
                  <span className="night">Per Night</span>
                  <p className="room-details-three__top__number">$129.00</p>
                </div>
                <div className="room-details-three__bottom">
                  <span className="reviews">3 Reviews</span>
                  <div className="star">
                    <i className="icon-star1"></i>
                    <i className="icon-star1"></i>
                    <i className="icon-star1"></i>
                    <i className="icon-star1"></i>
                    <i className="icon-star1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="room-details-thumb">
        <div className="container">
          <div className="room-details-thumb__inner">
            <div className="room-details-thumb__item">
              <img
                src="assets/images/resources/room-slider-1-1.jpg"
                alt="error"
              />
            </div>
            <div className="room-details-thumb__item">
              <img
                src="assets/images/resources/room-slider-1-2.jpg"
                alt="error"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="room-details">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-12">
              <div className="room-details__item">
                <div className="room-details__info">
                  <h3 className="room-details__title">Overview</h3>
                  <p className="room-details__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by injected humour, or randomised words which don't
                    look even slightly believable. If you are going There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                </div>
              </div>
              <div
                className="room-details__item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="room-details__amenities">
                  <h3 className="room-details__title">Amenities</h3>
                  <ul className="room-details__amenities__list list-unstyled">
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Conditioning
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Lawn
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>TV Cable
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Barbeque
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Microwave
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Washer
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Dryer
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Refrigerator
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>WiFi
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Gym
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-close"></i>Sauna
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Window Coverings
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-close"></i>Laundry
                    </li>
                    <li className="room-details__amenities__item">
                      <i className="icon-mark"></i>Swimming Pool
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="room-details__item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="room-details__tours">
                  <h3 className="room-details__title">Related Tours</h3>
                  <div className="row gutter-y-30">
                    <div className="col-md-4">
                      <div
                        className="room-card-three wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="000ms"
                      >
                        <div className="room-card-three__inner">
                          <div className="room-card-three__thumb">
                            <img
                              src="assets/images/room/room-3-1.jpg"
                              alt="Master Suite Room"
                            />
                            <p className="room-card-three__feature">feature</p>
                            <div className="room-card-three__thumb__popup">
                              <div className="room-card-three__thumb__popup__love">
                                <i className="icon-Heart"></i>
                              </div>
                              <a
                                href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                className="room-card-three__thumb__popup__item video-popup"
                              >
                                <i className="icon-video-camera-1-1"></i>
                              </a>
                              <a
                                href="assets/images/room/room-3-1.jpg"
                                className="room-card-three__thumb__popup__item room-list-card-popup"
                                data-gallery-options='{
                      "items": [
                        {
                          "src": "assets/images/room/room-3-1.jpg"
                        },
                        {
                          "src": "assets/images/room/room-3-2.jpg"
                        },
                        {
                          "src": "assets/images/room/room-3-3.jpg"
                        },
                        {
                          "src": "assets/images/room/room-3-4.jpg"
                        }
                      ],
                      "gallery": {
                        "enabled": true
                      },
                      "type": "image"
                    }'
                              >
                                <i className="icon-photo-camera-1"></i>
                              </a>
                            </div>
                          </div>
                          <div className="room-card-three__content">
                            <div className="room-card-three__content__star">
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                            </div>
                            <h4 className="room-card-three__content__title">
                              <a href="deluxe-room-details.html">
                                Master Suite Room
                              </a>
                            </h4>
                            <p className="room-card-three__content__text">
                              There are many variations of passages of Lorem
                              Ipsum available
                            </p>
                            <div className="room-card-three__content__number">
                              <div className="room-card-three__content__number__price">
                                $240.00/<span>night</span>
                              </div>
                              <p className="room-card-three__content__number__parson">
                                Person: <strong>09</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="room-card-three wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="000ms"
                      >
                        <div className="room-card-three__inner">
                          <div className="room-card-three__thumb">
                            <img
                              src="assets/images/room/room-3-2.jpg"
                              alt="Triple Room"
                            />
                            <p className="room-card-three__feature room-card-three__feature--two">
                              30% Off
                            </p>
                            <div className="room-card-three__thumb__popup">
                              <div className="room-card-three__thumb__popup__love">
                                <i className="icon-Heart"></i>
                              </div>
                              <a
                                href="https://www.youtube.com/watch?v=4jnzf1yj48M"
                                className="room-card-three__thumb__popup__item video-popup"
                              >
                                <i className="icon-video-camera-1-1"></i>
                              </a>
                              <a
                                href="assets/images/room/room-3-2.jpg"
                                className="room-card-three__thumb__popup__item room-list-card-popup"
                                data-gallery-options='{
                      "items": [
                        {
                          "src": "assets/images/room/room-3-1.jpg"
                        },
                        {
                          "src": "assets/images/room/room-3-2.jpg"
                        },
                        {
                          "src": "assets/images/room/room-3-3.jpg"
                        },
                        {
                          "src": "assets/images/room/room-3-4.jpg"
                        }
                      ],
                      "gallery": {
                        "enabled": true
                      },
                      "type": "image"
                    }'
                              >
                                <i className="icon-photo-camera-1"></i>
                              </a>
                            </div>
                          </div>
                          <div className="room-card-three__content">
                            <div className="room-card-three__content__star">
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                              <i className="icon-star1"></i>
                            </div>
                            <h4 className="room-card-three__content__title">
                              <a href="deluxe-room-details.html">Triple Room</a>
                            </h4>
                            <p className="room-card-three__content__text">
                              There are many variations of passages of Lorem
                              Ipsum available
                            </p>
                            <div className="room-card-three__content__number">
                              <div className="room-card-three__content__number__price">
                                $130.00/<span>night</span>
                              </div>
                              <p className="room-card-three__content__number__parson">
                                Person: <strong>08</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="room-details__item">
                <h3 className="room-details__title pt-30 pb-30">Reviews</h3>

                <ul className="room-details__posts list-unstyled">
                  <li
                    className="room-details__posts__card wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="room-details__posts__card__image">
                      <img
                        src="assets/images/room/room-man-1-1.jpg"
                        alt="error"
                      />
                    </div>
                    <div className="room-details__posts__card__content">
                      <h3 className="room-details__posts__card__title">
                        Belly Wave
                        <span className="room-details__posts__card__time">
                          20 Mar, 2024 . 4:00 Pm
                        </span>
                      </h3>
                      <div className="room-details__posts__card__star">
                        <p className="room-details__posts__card__star__item">
                          <span>Service</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Locations</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Amenities</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Prices</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Food</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                      </div>
                      <p className="room-details__posts__card__text">
                        Nam vel lacus eu nisl bibendum accumsan vitae vitae
                        nibh. Nam nec eros id magna hendrerit sagittis. Nullam
                        sed mi non odio feugiat
                      </p>
                      <div className="room-details__posts__card__btn">
                        <a
                          href="blog-details-right.html"
                          className="solinom-btn room-details__posts__card__reply"
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    className="room-details__posts__card wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <div className="room-details__posts__card__image">
                      <img
                        src="assets/images/room/room-man-1-2.jpg"
                        alt="error"
                      />
                    </div>
                    <div className="room-details__posts__card__content">
                      <h3 className="room-details__posts__card__title">
                        Belly Wave
                        <span className="room-details__posts__card__time">
                          20 Mar, 2024 . 4:00 Pm
                        </span>
                      </h3>
                      <div className="room-details__posts__card__star">
                        <p className="room-details__posts__card__star__item">
                          <span>Service</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Locations</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Amenities</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Prices</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                        <p className="room-details__posts__card__star__item">
                          <span>Food</span>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </p>
                      </div>
                      <p className="room-details__posts__card__text">
                        Nam vel lacus eu nisl bibendum accumsan vitae vitae
                        nibh. Nam nec eros id magna hendrerit sagittis. Nullam
                        sed mi non odio feugiat
                      </p>
                      <div className="room-details__posts__card__btn">
                        <a
                          href="blog-details-right.html"
                          className="solinom-btn room-details__posts__card__reply"
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className="room-details__item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="room-details__review">
                  <h3 className="room-details__title">Review Score</h3>
                  <div className="room-details__review__star">
                    <div className="room-details__review__item">
                      <span>Service</span>
                      <div className="room-details__review__star solinom-ratings">
                        <i className="far fa-star" data-value="1"></i>
                        <i className="far fa-star" data-value="2"></i>
                        <i className="far fa-star" data-value="3"></i>
                        <i className="far fa-star" data-value="4"></i>
                        <i className="far fa-star" data-value="5"></i>
                        <input type="hidden" className="rating" />
                      </div>
                    </div>
                    <div className="room-details__review__item">
                      <span>Locations</span>
                      <div className="room-details__review__star solinom-ratings">
                        <i className="far fa-star" data-value="1"></i>
                        <i className="far fa-star" data-value="2"></i>
                        <i className="far fa-star" data-value="3"></i>
                        <i className="far fa-star" data-value="4"></i>
                        <i className="far fa-star" data-value="5"></i>
                        <input type="hidden" className="rating" />
                      </div>
                    </div>
                    <div className="room-details__review__item">
                      <span>Amenities</span>
                      <div className="room-details__review__star solinom-ratings">
                        <i className="far fa-star" data-value="1"></i>
                        <i className="far fa-star" data-value="2"></i>
                        <i className="far fa-star" data-value="3"></i>
                        <i className="far fa-star" data-value="4"></i>
                        <i className="far fa-star" data-value="5"></i>
                        <input type="hidden" className="rating" />
                      </div>
                    </div>
                    <div className="room-details__review__item">
                      <span>Prices</span>
                      <div className="room-details__review__star solinom-ratings">
                        <i className="far fa-star" data-value="1"></i>
                        <i className="far fa-star" data-value="2"></i>
                        <i className="far fa-star" data-value="3"></i>
                        <i className="far fa-star" data-value="4"></i>
                        <i className="far fa-star" data-value="5"></i>
                        <input type="hidden" className="rating" />
                      </div>
                    </div>
                    <div className="room-details__review__item">
                      <span>Food</span>
                      <div className="room-details__review__star solinom-ratings">
                        <i className="far fa-star" data-value="1"></i>
                        <i className="far fa-star" data-value="2"></i>
                        <i className="far fa-star" data-value="3"></i>
                        <i className="far fa-star" data-value="4"></i>
                        <i className="far fa-star" data-value="5"></i>
                        <input type="hidden" className="rating" />
                      </div>
                    </div>
                  </div>
                  <form
                    className="room-details__review__form contact-form-validated form-one wow fadeInUp"
                    data-wow-duration="1500ms"
                    action="https://pixydrops.com/solinom-html/inc/sendemail.php"
                  >
                    <div className="form-one__group">
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-one__control">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-one__control form-one__control--full">
                        <textarea
                          name="message"
                          placeholder="Write a Message"
                        ></textarea>
                      </div>
                      <div className="form-one__control">
                        <button
                          type="submit"
                          className="solinom-btn solinom-btn--base"
                        >
                          Submit Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
