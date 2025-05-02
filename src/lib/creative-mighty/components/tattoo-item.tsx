export interface TattooItemCardProps {
  title: string;
  image: string;
  description: string;
}

const tattoosItems = [
  {
    title: "The falling angel",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746116409/The_falling_angel_tcnoop.jpg",
    description:
      "They said stay low.He aimed higher.This tattoo isn’t about crashing — it’s about having the guts to rise when you know the risks.",
  },
  {
    title: "Fragments of Order, Threads of Freedom",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115619/Fragments_of_Order__Threads_of_Freedom_wiakoc.jpg",
    description:
      "An intricate journey stitched along the skin- Sculpted faces, measured lines, and timeless figures woven together, capturing a mind that seeks both structure and liberation.",
  },
  {
    title: "Earth. Air. Water. Fire.",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746102200/Earth._Air._Water._Fire_aqvkgs.jpg",
    description:
      "Not just elements — instincts. Power stitched under the skin, echoing the oldest truths of the universe.",
  },
  {
    title: "Ace of Power",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115815/Ace_of_Power_lxpwy0.jpg",
    description:
      "Not just a card — it’s a piece of the bigger game. Art, luck, and design all dealt in one shot.",
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
  {
    title: "Built to Survive",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114493/Built_to_Survive_krxbfx.jpg",
    description:
      "Tiny in size, massive in spirit. This shark doesn’t roar — it rules in silence.",
  },
  {
    title: "Pieces Stitched in Ink",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114645/Pieces_Stitched_in_Ink_mr32rb.jpg",
    description:
      "Scars, faith, loss, hope — not separate moments but a single journey. This tattoo is a journal without pages, a soul spelled out across skin.",
  },
  {
    title: "Two Sides, One Story",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114760/Two_Sides_One_Story_u8bopt.jpg",
    description:
      "A single word, split by meaning — LOVE and HATE, intertwined in clean geometry.",
  },
  {
    title: "Burn Loud, Die Later",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114956/Burn_Loud_Die_Later_cthy39.jpg",
    description:
      "An open book, a burning candle, a grinning skull — a visual rebellion against time. Paired with the bold words, “We are here to laugh at the odds,” this tattoo burns bright with a fearless, untamed spirit.",
  },
  {
    title: "Wings and flowers",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115090/Wings_and_flowers_lx8pe2.jpg",
    description:
      "One side a delicate butterfly, the other blooming wild. A piece that blurs the lines between transformation and growth — a reminder that beauty is both a becoming and a blossoming.",
  },
  {
    title: "Where Life and Death Bloom Together",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115231/Where_Life_and_Death_Bloom_Together_kgqbpc.jpg",
    description:
      "A vivid red rose grows through the hollow of a skull, touched by the flutter of a butterfly — a striking balance between mortality and renewal. Bold colors and fine details weave a story of endings that give birth to new beginnings.",
  },
  {
    title: "Born from Fire",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115411/Born_from_Fire_tpmf65.jpg",
    description:
      "This fierce dragon curls in mid-roar, etched with intricate scales and sharpened edges — a timeless guardian of strength, wisdom, and relentless spirit. Dark, bold, and alive with detail, this piece speaks of inner battles fought and victories earned.",
  },
  {
    title: "Ashes to Ascent",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115953/Ashes_to_Ascen_giqnji.jpg",
    description:
      "A phoenix captured in elegant motion, rising with fluid, almost whispered lines — paired with the words “Still I Rise.” This piece is a testament to resilience, to the beauty of falling and flying again, stronger and more luminous with every rebirth.",
  },
  {
    title: "Anchored in Faith, Lifted by Hope",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746116014/Anchored_in_Faith_Lifted_by_Hope_exdnlc.jpg",
    description:
      "A rugged cross crowned with thorns and draped in cloth, standing as a raw symbol of endurance and divine love. Below it, “Psalm 121” whispers a promise of unwavering protection and guidance — a piece rooted deeply in faith and strength through life’s journey.",
  },
  {
    title: "The Hands Behind the Shears",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746116121/The_Hands_Behind_the_Shears_mp3zyd.jpg",
    description:
      "Not just any scissors — her scissors. The ones that have seen early mornings, last-minute trims, new beginnings, and quiet transformations. Etched forever in ink, this piece is a salute to the artist behind the chair, and the hands that turned a simple tool into a lifelong craft since 2002.",
  },
  {
    title: "Whispers of Bloom",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746116291/Whispers_of_Bloom_kmj6dz.jpg",
    description:
      "Delicate florals unfurl across the collarbone, blending softness with strength in a dance of shaded petals and graceful leaves. A timeless symbol of growth, femininity, and quiet power that blooms beautifully against the skin.",
  },

  {
    title: "Bloom Where You Stand",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746116518/Bloom_Where_You_Stand_fshoiz.jpg",
    description:
      " A bundle of wildflowers growing upward. A quiet symbol of growth — thriving right where life plants you.",
  },
  {
    title: "Carved in Bloodlines",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746116597/Carved_in_Bloodlines_fuwkaf.jpg",
    description: "Old English initials, stacked clean",
  },
  {
    title: "Small but deadly",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746116670/Small_but_deadly_zhfm3d.jpg",
    description: "Quick moves. No second chances.",
  },
  {
    title: "Fight and grow.",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114247/Fight_and_grow_yi8yi5.jpg",
    description:
      "Built from heat, carried by calm. Fire raised the flowers, not the rain.",
  },
  {
    title: "Howling Majesty",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114440/Howling_Majesty_dwijho.jpg",
    description:
      " A detailed wolf portrait that doesn’t need words to say what it stands for — loyalty, instinct, and knowing exactly who you are without second-guessing.",
  },
  {
    title: "Burn and Breathe",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114505/Burn_and_Breathe_i60xd9.jpg",
    description:
      "A sun wrapped in smoke lines. This piece is about carrying your fire without losing your flow — a symbol of steady energy even when life feels scattered.",
  },
  {
    title: "Strength Worn Softly",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114647/Strength_Worn_Softly_tnnjrw.jpg",
    description:
      "A bull skull framed by roses — a reminder that toughness and tenderness can live side by side. Worn like a badge earned through survival.",
  },
  {
    title: "Directions Carved in Skin",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114715/Directions_Carved_in_Skin_bvgrpc.jpg",
    description:
      "A raw, almost sketch-like compass inked on the hand — worn as a permanent reminder to stay on course through chaos.",
  },
  {
    title: "Both Sides of the Fire",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114808/Both_Sides_of_the_Fire_cz6yhi.jpg",
    description:
      "Dragon for the strength, demon for the chaos. Sometimes you gotta wear both to make it through.",
  },
  {
    title: "A Love That Stays",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114856/A_Love_That_Stays_bnpygd.jpg",
    description:
      "A fingerprint turned into a butterfly — carrying the memory of her late husband close. This piece isn’t just a tattoo; it’s a reminder that even after someone’s gone, their touch never really leaves.",
  },
  {
    title: "Quiet Warnings",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114905/Quiet_Warnings_de2kir.jpg",
    description: "No noise, no rush. Just what’s waiting at the end.",
  },
  {
    title: "Silent Fear, Loud Legacy",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746114961/Silent_Fear__Loud_Legacy_nkficn.jpg",
    description:
      "A bold composition featuring the scream mask, “DEATH” banner, and gothic elements, paying tribute to horror culture.",
  },
  {
    title: "Strength in Elegance",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115011/Strength_in_Elegance_kzxu5x.jpg",
    description: "Power carried with pride. Battle-born, not borrowed.",
  },
  /* {
    title: "Guarded By Loyalty",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115059/Guarded_By_Loyalty_il4n65.jpg",
    description:
      "Three Dobermans across the chest — bold, loyal, and always watching. It’s about protecting what matters, standing strong without saying much.",
  }, */
  {
    title: "Ephemeral Beauty",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115114/Ephemeral_Beauty_pkoblc.jpg",
    description:
      "Time cracks and things fall apart, but from it something lighter ishttps://res.cloudinary.com/daoju0r3c/image/upload/v1746115619/Fragments_of_Order__Threads_of_Freedom_wiakoc.jpg born. This piece is a reminder that growth often comes when everything feels like it’s breaking.",
  },
  {
    title: "Built Sharp, Grown Wild",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115175/Built_Sharp__Grown_Wild_vllm7y.jpg",
    description:
      "A sword that stayed sharp while life kept wrapping around it. It’s a piece about balance — knowing when to stay solid and when to let things grow naturally.",
  },

  {
    title: "The Guardian & The Beast",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115653/The_Guardian_The_Beast_kperap.jpg",
    description:
      "One protects, the other hunts. Together they form the full story — instinct, memory, and meaning beyond this world.",
  },
  {
    title: "Sacred in Silence",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115718/Sacred_in_Silence_gv5akr.jpg",
    description:
      "Minimal yet intricate, this fine-lined cross speaks without shouting — a quiet emblem of faith, strength, and inner stillness.",
  },
  {
    title: "The Mark of Endurance",
    image:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1746115767/The_Mark_of_Endurance_z4ch88.jpg",
    description:
      "Victory inked into skin. A symbol for those who’ve been through the storm and stood tall anyway.",
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
