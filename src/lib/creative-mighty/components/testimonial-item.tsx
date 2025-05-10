export interface TestimonialItemProps {
  by: string;
  testimonial: string;
}

export default function TestimonialItem(props: TestimonialItemProps) {
  const { by, testimonial } = props;

  return (
    <div className="swiper-slide">
      <div className="single-testimonials-main-wrapper">
        <div className="star-area-start">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="body">
          <div className="quote-img">
            <img
              src="/creative-mighty/assets/images/testimonials/02.png"
              alt=""
            />
          </div>
          <p
            className="disc font-lato"
            style={{
              fontStyle: "normal !important",
            }}
          >
            {testimonial}
          </p>
          <div className="author-area">
            <div className="thumbnail">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  by
                )}`}
                alt="testimonials"
              />
            </div>
            <div className="info-wrapper">
              <h6 className="title">{by}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
