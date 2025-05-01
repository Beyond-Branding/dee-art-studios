export interface TattooItemCardProps {
  title: string;
  image: string;
  description: string;
}

const tattoosItems = [
  {
    title: "Earth. Air. Water. Fire.",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746102200/Earth._Air._Water._Fire_aqvkgs.jpg",
    description:
      "Not just elements — instincts. Power stitched under the skin, echoing the oldest truths of the universe.",
  },
  {
    title: "Made of Light",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746102345/Made_of_Light_ve34ra.jpg",
    description:
      "Even if the world carves you from darkness, you choose what you become. Light stitched into every scar.",
  },
] as TattooItemCardProps[];

function TattooItemCard(props: TattooItemCardProps) {
  const { title, image, description } = props;

  return (
    <div className="single-product-9 rts-team__item">
      <a href="#">
        <img src={image} alt="product" />
      </a>
      <div className="inner-content">
        <span>{title}</span>
        <a
          href="#"
          style={{
            fontSize: "0.75rem",
          }}
        >
          {description}
        </a>
      </div>
    </div>
  );
}

export default function TattoosList() {
  return (
    <div className="product-wrapper-9 rts-team__area rts-portfolio-area">
      <div className="product-row pt--200 pt_md--50 pt_sm--30">
        <div className="inner">
          {tattoosItems
            .filter((_, index) => index % 2 === 0)
            .map((element) => (
              <TattooItemCard
                key={element.title}
                title={element.title}
                image={element.image}
                description={element.description}
              />
            ))}
        </div>
      </div>
      <div className="product-row two">
        <div className="inner">
          {tattoosItems
            .filter((_, index) => index % 2 !== 0)
            .map((element) => (
              <TattooItemCard
                key={element.title}
                title={element.title}
                image={element.image}
                description={element.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
