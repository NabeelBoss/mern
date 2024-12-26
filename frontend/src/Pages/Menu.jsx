import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
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
            alt="products right sidebar"
            className="page-header__shape"
          />
          <h2 className="page-header__title">Menu</h2>
          <ul className="solinom-breadcrumb list-unstyled">
            <li>
              <Link to={"/restaurant"}>Restaurant</Link>
            </li>
            <li>
              <span>Menu</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-one product-one--page">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row gutter-y-30">
                <div className="col-md-6 col-lg-4">
                  <div
                    className="product__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <div className="product__item__img">
                      <div className="product__item__img__item">
                        <img
                          src="assets/images/products/product-1-1.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="product__item__btn">
                        <a href="cart.html">
                          <i className="far fa-heart"></i>
                        </a>
                        <a href="product-details.html">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product__item__content">
                      <div className="product__item__ratings">
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                      </div>
                      <h4 className="product__item__title">
                        <a href="product-details.html">body cream</a>
                      </h4>
                      <div className="product__item__price">
                        $82.00
                        <del className="product__item__price__del">$30.00</del>
                      </div>
                      <a
                        href="cart.html"
                        className="solinom-btn product__item__link"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="product__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <div className="product__item__img">
                      <div className="product__item__img__item">
                        <img
                          src="assets/images/products/product-1-1.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="product__item__btn">
                        <a href="cart.html">
                          <i className="far fa-heart"></i>
                        </a>
                        <a href="product-details.html">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product__item__content">
                      <div className="product__item__ratings">
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                      </div>
                      <h4 className="product__item__title">
                        <a href="product-details.html">body cream</a>
                      </h4>
                      <div className="product__item__price">
                        $82.00
                        <del className="product__item__price__del">$30.00</del>
                      </div>
                      <a
                        href="cart.html"
                        className="solinom-btn product__item__link"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="product__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <div className="product__item__img">
                      <div className="product__item__img__item">
                        <img
                          src="assets/images/products/product-1-1.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="product__item__btn">
                        <a href="cart.html">
                          <i className="far fa-heart"></i>
                        </a>
                        <a href="product-details.html">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product__item__content">
                      <div className="product__item__ratings">
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                      </div>
                      <h4 className="product__item__title">
                        <a href="product-details.html">body cream</a>
                      </h4>
                      <div className="product__item__price">
                        $82.00
                        <del className="product__item__price__del">$30.00</del>
                      </div>
                      <a
                        href="cart.html"
                        className="solinom-btn product__item__link"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="product__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <div className="product__item__img">
                      <div className="product__item__img__item">
                        <img
                          src="assets/images/products/product-1-1.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="product__item__btn">
                        <a href="cart.html">
                          <i className="far fa-heart"></i>
                        </a>
                        <a href="product-details.html">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product__item__content">
                      <div className="product__item__ratings">
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                      </div>
                      <h4 className="product__item__title">
                        <a href="product-details.html">body cream</a>
                      </h4>
                      <div className="product__item__price">
                        $82.00
                        <del className="product__item__price__del">$30.00</del>
                      </div>
                      <a
                        href="cart.html"
                        className="solinom-btn product__item__link"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="product__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <div className="product__item__img">
                      <div className="product__item__img__item">
                        <img
                          src="assets/images/products/product-1-1.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="product__item__btn">
                        <a href="cart.html">
                          <i className="far fa-heart"></i>
                        </a>
                        <a href="product-details.html">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product__item__content">
                      <div className="product__item__ratings">
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                      </div>
                      <h4 className="product__item__title">
                        <a href="product-details.html">body cream</a>
                      </h4>
                      <div className="product__item__price">
                        $82.00
                        <del className="product__item__price__del">$30.00</del>
                      </div>
                      <a
                        href="cart.html"
                        className="solinom-btn product__item__link"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="product__item wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="000ms"
                  >
                    <div className="product__item__img">
                      <div className="product__item__img__item">
                        <img
                          src="assets/images/products/product-1-1.jpg"
                          alt="error"
                        />
                      </div>
                      <div className="product__item__btn">
                        <a href="cart.html">
                          <i className="far fa-heart"></i>
                        </a>
                        <a href="product-details.html">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product__item__content">
                      <div className="product__item__ratings">
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                        <span className="icon-star1"></span>
                      </div>
                      <h4 className="product__item__title">
                        <a href="product-details.html">body cream</a>
                      </h4>
                      <div className="product__item__price">
                        $82.00
                        <del className="product__item__price__del">$30.00</del>
                      </div>
                      <a
                        href="cart.html"
                        className="solinom-btn product__item__link"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="product__sidebar product__sidebar-right">
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
                  className="product__categories wow fadeInUp"
                  data-wow-delay="900ms"
                >
                  <h3 className="product__categories__title">Categories</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="products.html">
                        <i className="icon-right-arrow2"></i>Luxury
                      </a>
                    </li>
                    <li>
                      <a href="products.html">
                        <i className="icon-right-arrow2"></i>Web Development
                      </a>
                    </li>
                    <li>
                      <a href="products.html">
                        <i className="icon-right-arrow2"></i>UI/UX Design
                      </a>
                    </li>
                    <li>
                      <a href="products.html">
                        <i className="icon-right-arrow2"></i>Marketing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12">
              <ul className="post-pagination list-unstyled justify-content-start">
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
      </section>
    </>
  );
};

export default Menu;
