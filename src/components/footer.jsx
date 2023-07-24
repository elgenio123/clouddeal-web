import React from "react";

function Footer() {
  return (
    <>
      <section className="social-newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsletter text-center">
                <h3>Subscribe Newsletter</h3>
                <div className="newsletter-form">
                  <form
                    method="POST"
                    name="newsletter-form"
                    onSubmit="event.preventDefault()"
                    action="{{ route('home') }}"
                  >
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email Address..."
                    />
                    <button type="submit">
                      <i className="fa fa-send"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-area">
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-12">
                <div className="footer-icon">
                  <ul className="d-flex">
                    <li>
                      <a href="facebook.com">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="twitter.com">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="google-plus.com">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-12">
                <div className="footer-content text-justify">
                  <p>
                    Simplifiez et améliorez vos transactions en ligne avec
                    CloudDeal ! Publiez, promouvez et gérez vos annonces
                    efficacement. Boostez votre visibilité en tant que vendeur
                    et découvrez des annonces de qualité à des prix incroyables
                    en tant qu'acheteur. Filtrage facile, chat en temps réel et
                    expérience d'achat exceptionnelle vous attendent sur
                    CloudDeal. Rejoignez-nous dès maintenant !
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-8 col-sm-12 ">
                <div className="footer-adress">
                  <ul className="text-justify">
                    <li>
                      <a href="mailto:tegonguefolefackf@gmail.com">
                        <span>Email:</span>
                        <br />
                        tegonguefolefackf@gmail.com
                      </a>
                    </li>
                    <li>
                      <span>
                        Tel:
                        <a href="https://web.whatsapp.com/send?phone=237672044430">
                          +237 672 044 430
                        </a>
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Address:</span> Dschang
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="footer-reserved">
                  <ul>
                    <li>Copyright © 2023 CloudDeal.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
