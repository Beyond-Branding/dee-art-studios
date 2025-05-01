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
  {
    title: "Sacred Bloom",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746107147/Sacred_Bloom_u3ky4o.jpg",
    description:
      "A lily, eternal in ink and angles. Growth isn’t random — it’s sacred, even when built inside sharp edges.",
  },
  {
    title: "They See. They Bleed",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/c_pad,b_gen_fill,w_2796,h_3728/v1746107222/They_See._They_Bleed_i6gpnu.jpg",
    description:
      "Eyes that don’t just see life — they survive it. Burning, crying, fighting forward.",
  },
  {
    title: "We Wear Them All",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746107569/We_Wear_Them_All_nmaip7.jpg",
    description:
      "Behind every smile, a shadow; behind every laugh, a weight. This piece reminds us: masks aren’t fake — they’re survival.",
  },
  {
    title: "A Soul in the Scribbles",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746113817/A_Soul_in_the_Scribbles_b3shda.jpg",
    description:
      "This figure rises from the mess, proving that beauty and survival are found in the struggle itself.",
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
