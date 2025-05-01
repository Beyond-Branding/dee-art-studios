export interface TestimonialItemProps {
  testimonal: string;
}

export default function TestimonialItem(props: TestimonialItemProps) {
  const { testimonal } = props;

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
          <p className="disc">{testimonal}</p>
          <div className="author-area">
            <div className="thumbnail">
              <img
                src="/creative-mighty/assets/images/testimonials/01.png"
                alt="testimonials"
              />
            </div>
            <div className="info-wrapper">
              <h6 className="title">Adam Daniel Smith</h6>
              <span>Product Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
