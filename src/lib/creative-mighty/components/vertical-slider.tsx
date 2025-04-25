const slideItems = [
  {
    // image: "https://res.cloudinary.com/daoju0r3c/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1745600296/IMG_0843_nptqzl.png",
    image: "/creative-mighty/assets/images/product/40.png",
    title: "TemplateTrove Studios",
    paragraph: () => (
      <>
        Transitioning from a tattoo apprentice to a professional tattoo artist
        has been an incredible journey for me. I delved into the tattoo industry
        four years ago with an unexpected desire to master the art of tattooing.
        My apprenticeship lasted for a dedicated period of 15 months, during
        which I was privileged to learn from none other than my senior tattoo
        artist @ryantattoo who served as my mentor.
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1745600497/IMG_2584_v8j2yp.png",
    title: "TemplateTrove Studios",
    paragraph: () => (
      <>
        The apprenticeship phase was a transformative experience where I
        absorbed the essence of tattoo culture and refined my skills under the
        careful guidance of my mentor. I embraced every aspect of the training,
        from observing and assisting in daily tasks to practicing drawing and
        designing intricate tattoo concepts.
      </>
    ),
  },
  {
    image: "/creative-mighty/assets/images/product/40.png",
    title: "TemplateTrove Studios",
    paragraph: () => (
      <>
        As I progressed through the apprenticeship, I transitioned from basic
        tasks to more advanced techniques, gradually gaining confidence in my
        abilities. The apprenticeship not only sharpened my technical skills but
        also instilled in me the importance of professionalism, ethics, and
        client interactions in the tattooing industry.
      </>
    ),
  },
  {
    image: "/creative-mighty/assets/images/product/40.png",
    title: "TemplateTrove Studios",
    paragraph: () => (
      <>
        Upon completing my apprenticeship, I embraced the role of a professional
        tattoo artist with a profound sense of accomplishment. I am now at a
        stage where I can create art independently, cater to clients with
        creativity and skill, and uphold the values instilled in me during my
        apprenticeship journey.
      </>
    ),
  },
  {
    image: "/creative-mighty/assets/images/product/40.png",
    title: "TemplateTrove Studios",
    paragraph: () => (
      <>
        The transition from apprentice to artist signifies not just a
        professional milestone but a personal transformation. I am grateful for
        the experiences and knowledge gained during my apprenticeship, which
        have laid a solid foundation for my career as a tattoo artist. This
        journey has sustained my passion for tattooing and inspired me to
        continue pushing the boundaries of creativity in this dynamic and
        artistic field.
      </>
    ),
  },
] as SlideItemProps[];

export default function VerticalSlider() {
  return (
    <div className="swiper-portfolio-main-wrapper-7">
      <div className="swiper mySwiper-7-varticle pl--150 pl_md--100 pl_sm--40">
        <div className="swiper-wrapper">
          {slideItems.map((element, index) => (
            <SlideItem
              key={index}
              image={element.image}
              title={element.title}
              paragraph={element.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SlideItemProps {
  image: string;
  title: string;
  paragraph: () => React.ReactNode;
}

function SlideItem(props: SlideItemProps) {
  const { image, title, paragraph } = props;
  return (
    <div className="swiper-slide">
      <div className="banner-slider-portfolio-seven-area">
        <div className="container">
          <div className="row pt--130 pt_sm--70 align-items-center">
            <div className="col-lg-6 col-md-6 one">
              <div className="banner-wrapper-seven pt--75 pt_sm--15">
                <h1 className="title">{title}</h1>
                <p className="disc">{paragraph()}</p>
                {/*  <a href="portfolio-details.html" className="learn-more-btn">
                  Learn More <i className="fa-solid fa-arrow-up-right"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="thumbnail-image-banner-7">
                <img src={image} alt="portfolio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
