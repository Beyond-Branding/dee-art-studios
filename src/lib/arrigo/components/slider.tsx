import clsx from "clsx";

const sliderItems = [
  {
    title: "Piercing Collection",
    paragraph:
      "Piercing Collection, where artistry meets precision! I believe that body art is a powerful form of self-expression. Each piercing is not just a procedure; it’s an opportunity to enhance your individuality and celebrate your unique style.",
  },
  {
    title: "Diverse Selection",
    paragraph:
      "From classic ear piercings to bold body modifications, my collection features a wide range of styles to match every personality. Whether you prefer minimalist elegance or vibrant statement pieces, there’s something here for you.",
  },
  {
    title: "Personalized Experience",
    paragraph:
      "We pride on providing a personalized approach to every client. During your consultation, we’ll discuss your ideas, preferences, and any concerns you may have, ensuring that you feel informed and excited about your choices.",
  },
  {
    title: "Top-Quality Jewelry",
    paragraph:
      "Your safety and comfort are my top priorities. We use only the finest materials, from implant grade titanium, to ethically sourced gemstones, to ensure that your jewelry not only looks beautiful but is also safe for your skin.",
  },
  {
    title: "Custom Creations",
    paragraph:
      "We offer custom piercing designs tailored to your vision. If you have a specific idea in mind, let’s collaborate to create a piece that reflects your personal style and story.",
  },
  {
    title: "Aftercare Support",
    paragraph:
      "After your piercing, we provide comprehensive aftercare instructions and ongoing support, ensuring that your healing process is smooth and successful.",
  },
];

export default function Slider() {
  return (
    <section
      className="section section-fullscreen section-fullscreen_1"
      data-os-animation="data-os-animation"
    >
      <div className="slider-fullscreen slider js-slider-fullscreen">
        <div className="slider-fullscreen__wrapper-controls">
          <div className="slider__controls slider-fullscreen__controls">
            <div className="slider__dots js-slider-fullscreen__dots">
              {sliderItems.map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    "slider__dot",
                    index === 0 ? "slider__dot_active" : ""
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/*<!-- - slider controls --> */}
        <div className="slider-fullscreen__wrapper-img overflow">
          <div className="overflow__curtain bg-accent"></div>
          <div className="overflow__content">
            <div className="swiper-container swiper slider-fullscreen-img js-slider-fullscreen__slider-img">
              <div className="swiper-wrapper">
                {sliderItems.map((_, index) => (
                  <div
                    key={index}
                    className="swiper-slide slider-fullscreen__slide"
                  >
                    <img
                      className="slider-fullscreen-img__slide-bg of-cover"
                      src="/arrigo/img/assets/sectionFullscreen/slide_3-4.jpg"
                      width="892"
                      height="821"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*       <!-- - slider image -->*/}
        <div className="slider-fullscreen__wrapper-content container">
          <div className="row justify-content-xl-end">
            <div className="col-xl-5 col-lg-6">
              <div className="slider-fullscreen__slide-headline"></div>
              <div className="swiper-container swiper slider-fullscreen-content js-slider-fullscreen__slider-content">
                <div className="swiper-wrapper">
                  {/* <div className="swiper-slide">
                    <div className="slider-fullscreen__slide-content">
                      <header className="slider-fullscreen__slide-header">
                        <a href="portfolio-details-1-light.html">
                          <h2>Silence and Noise</h2>
                        </a>
                        <p>
                          This does not explain why some of us find peace and
                          other's find pain. But, such a philosophy will enable
                          us all to find grace in knowing our lives create in
                          our world facets of ourselves we all are a part of.
                        </p>
                      </header>
                      <div className="slider-fullscreen__slide-wrapper-button">
                        <a
                          className="slider-fullscreen__slide-button button-square"
                          href="portfolio-details-1-light.html"
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <rect
                                className="rect"
                                width="100%"
                                height="100%"
                              ></rect>
                            </g>
                          </svg>
                          <span>arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-fullscreen__slide-content">
                      <header className="slider-fullscreen__slide-header">
                        <a href="portfolio-details-1-light.html">
                          <h2>Eternal Art</h2>
                        </a>
                        <p>
                          One preferred sportsmen resolving the happiness
                          continued. High at of in loud rich true. Oh conveying
                          do immediate acuteness in he. Equally welcome her set
                          nothing has gravity whether parties. Fertile suppose
                          shyness mr up pointed in staying on respect.
                        </p>
                      </header>
                      <div className="slider-fullscreen__slide-wrapper-button">
                        <a
                          className="slider-fullscreen__slide-button button-square"
                          href="portfolio-details-1-light.html"
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <rect
                                className="rect"
                                width="100%"
                                height="100%"
                              ></rect>
                            </g>
                          </svg>
                          <span>arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-fullscreen__slide-content">
                      <header className="slider-fullscreen__slide-header">
                        <a href="portfolio-details-1-light.html">
                          <h2>Royal Plate Branding</h2>
                        </a>
                        <p>
                          Man entrance settling believed eat joy. Money as drift
                          begin on to. Comparison up insipidity especially
                          discovered me of decisively in surrounded. Points six
                          way enough she its father. Folly sex downs tears ham
                          green forty.
                        </p>
                      </header>
                      <div className="slider-fullscreen__slide-wrapper-button">
                        <a
                          className="slider-fullscreen__slide-button button-square"
                          href="portfolio-details-1-light.html"
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <rect
                                className="rect"
                                width="100%"
                                height="100%"
                              ></rect>
                            </g>
                          </svg>
                          <span>arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-fullscreen__slide-content">
                      <header className="slider-fullscreen__slide-header">
                        <a href="portfolio-details-1-light.html">
                          <h2>Vehicle of the Future</h2>
                        </a>
                        <p>
                          Residence gentleman yet preserved few convinced.
                          Coming regret simple longer little am sister on. Do
                          danger in to adieus ladies houses oh eldest. Gone pure
                          late gay ham. They sigh were not find are rent.
                        </p>
                      </header>
                      <div className="slider-fullscreen__slide-wrapper-button">
                        <a
                          className="slider-fullscreen__slide-button button-square"
                          href="portfolio-details-1-light.html"
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <rect
                                className="rect"
                                width="100%"
                                height="100%"
                              ></rect>
                            </g>
                          </svg>
                          <span>arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </div> */}

                  {sliderItems.map((element, index) => (
                    <div className="swiper-slide">
                      <div className="slider-fullscreen__slide-content">
                        <header className="slider-fullscreen__slide-header">
                          <a href="#">
                            <h2 style={{ color: "black" }}>{element.title}</h2>
                          </a>
                          <p>{element.paragraph}</p>
                        </header>
                        <div className="slider-fullscreen__slide-wrapper-button">
                          <a
                            className="slider-fullscreen__slide-button button-square"
                            href="portfolio-details-1-light.html"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <rect
                                  className="rect"
                                  width="100%"
                                  height="100%"
                                ></rect>
                              </g>
                            </svg>
                            <span>arrow_forward</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-fullscreen__wrapper-counter">
          <div className="slider__counter-big">
            <div className="swiper-container swiper slider__counter-big-current slider-fullscreen__counter-big-current js-slider-fullscreen__counter-current">
              <div className="swiper-wrapper"></div>
            </div>
            <div className="slider__counter-big-total js-slider-fullscreen__counter-total"></div>
          </div>
        </div>
      </div>
      <div className="section-fullscreen__backgrounds">
        <div className="section-fullscreen__inner-bg bg-dark"></div>
        <div className="section-fullscreen__inner-bg bg-light"></div>
      </div>
    </section>
  );
}
