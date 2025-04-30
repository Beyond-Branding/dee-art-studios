const slideItems = [
  {
    // image: "https://res.cloudinary.com/daoju0r3c/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1745600296/IMG_0843_nptqzl.png",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/t_Sketch/v1745694926/IMG_2194_xv1tsh.jpg",
    title: "Bond of Unity",
    paragraph: () => (
      <>
        Symbolizing unity, partnership, friendship, love, or support. Also
        representing a close bond between two individuals or thc idea ofhelping
        and supporting each other through life's challenges. Itcan also bc a
        symbol ofsolidarity and connection between people.
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/t_Sketch/v1745694927/IMG_1393_wuvwkb.jpg",
    title: "Spirit of the Lion",
    paragraph: () => (
      <>
        Symbolizes strength, courage. and leadership. It can also represent
        protection, nobility, and loyalty. reflecting a person's inner power and
        determination. Additionally, in various cultures, lions may have
        specific rneanings related to honor and familial bonds. Overall, it
        embodies a fierce spirit and a commitment to overcorning challenges.
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/t_Sketch/v1745694927/IMG_2524_jbf9qr.jpg",
    title: "Call of the Wild",
    paragraph: () => (
      <>
        Symbolizes strength. loyalty. and a deep connection to nature. It often
        represents a sense of freedom and the call of the wild, reflecting a
        person' inner spirit and resilience. This powerful imagery can also
        signify a longing for belonging and the importance of family or
        community
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/t_Sketch/v1745694926/IMG_2196_fhyerg.jpg",
    title: "Eternal Bond",
    paragraph: () => (
      <>
        Symbolizing eternal love and commitment bctwccn partners or loved ones,
        representing a lasting bond that transcends time and challenges.
      </>
    ),
  },
  {
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/t_Sketch/v1745694926/IMG_2197_cyc5d4.jpg",
    title: "Healing Heart",
    paragraph: () => (
      <>
        Symbolizing the process of healing and moving on from emotional pain
        caused by a broken heart, often incorporating elements representing
        strength, resilience, growth, and self-love.
      </>
    ),
  },
] as SlideItemProps[];

export default function VerticalSlider() {
  return (
    <div className="swiper-portfolio-main-wrapper-7">
      <div className="swiper mySwiper-7-varticle ">
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
                <h1 className="title font-playfair">{title}</h1>
                <p className="disc font-lato">{paragraph()}</p>
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
