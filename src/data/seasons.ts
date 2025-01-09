import { seasonType } from "@/_types/seasonsType";
import mainImage1 from "@/assets/seasons/season1/main.jpg";
import season01 from "@/assets/seasons/season1/39a2413ccb76604653af802779279da0.jpg";
import season001 from "@/assets/seasons/season1/9b282f8bb78fbb52a6af6e4e141b78d9.jpg";
import season0001 from "@/assets/seasons/season1/c4743b3e460a95bb5942932bba9e3780.jpg";
import mainImage2 from "@/assets/seasons/season2/main.jpeg";
import season02 from "@/assets/seasons/season2/cf3f6217c84ebc89a65273e968f389714f1d9d1cr1-735-728v2_uhq.jpg";
import season002 from "@/assets/seasons/season2/cute-aesthetic-couple-pictures-8omhgddksp6mea5o.jpg";
import season0002 from "@/assets/seasons/season2/68747470733a2f2f73332e6.jpeg";
import mainImage3 from "@/assets/seasons/season3/main.jpg";
import season03 from "@/assets/seasons/season3/312808f9c3719059738ddb6227b78aa9.jpg";
import season003 from "@/assets/seasons/season3/23e14587cbdbee3857935def1156e57d.jpg";
import season0003 from "@/assets/seasons/season3/bf00a3ba9c6df19e6a2d8bccd92e4798.jpg";

export const seasons: seasonType[] = [
  {
    title: "It could have been something",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, aspernatur. Ratione velit corporis qui inventore, blanditiis hic nemo? Quod iusto distinctio voluptatem laudantium iste quos! Dolorum autem, porro enim accusantium nobis vero quaerat! Autem facilis, nihil temporibus repellat officiis quasi commodi ad, debitis delectus accusamus eaque eum, quibusdam ipsam rem.",
    rating: {
      score: 2.5,
      votes: 1,
    },
    time: "11/03/2024",
    season: 1,
    images: {
      mainImage: {
        src: mainImage1,
        alt: "",
      },
      subImages: [
        { src: season01, alt: "" },
        { src: season001, alt: "" },
        { src: season0001, alt: "" },
      ],
    },
    tags: [{ tag: "Série" }, { tag: "Chaotic" }, {tag: 'Depressed'}],

    trailer:
      "https://www.youtube.com/embed/l5t9IXtTr6g?si=zZb5h9QK4I3k0uWq&autoplay=1",
  },
  {
    title: "Alone, again",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, aspernatur. Ratione velit corporis qui inventore, blanditiis hic nemo? Quod iusto distinctio voluptatem laudantium iste quos! Dolorum autem, porro enim accusantium nobis vero quaerat! Autem facilis, nihil temporibus repellat officiis quasi commodi ad, debitis delectus accusamus eaque eum,..",
    rating: {
      score: 3.5,
      votes: 1,
    },
    time: "11/03/2025",
    season: 2,
    images: {
      mainImage: {
        src: mainImage2,
        alt: "",
      },
      subImages: [
        { src: season02, alt: "" },
        { src: season002, alt: "" },
        { src: season0002, alt: "" },
      ],
    },
    tags: [{ tag: "Série" }, { tag: "Chaotic" }],

    trailer:
      "https://www.youtube.com/embed/izGwDsrQ1eQ?si=-Y_p8VBNrzVVMoHr&autoplay=1",
  },
  {
    title: "Maybe a restart?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, aspernatur. Ratione velit corporis qui inventore, blanditiis hic nemo? Quod iusto distinctio voluptatem laudantium iste quos! Dolorum autem, porro enim accusantium nobis vero quaerat! Autem facilis, nihil temporibus repellat officiis quasi commodi ad, debitis delectus accusamus eaque eum,..Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, aspernatur. Ratione velit corporis qui inventore, blanditiis hic nemo? Quod iusto distinctio voluptatem laudantium iste quos! Dolorum autem, porro enim accusantium nobis vero quaerat! Autem facilis, nihil temporibus repellat officiis quasi commodi ad, debitis delectus accusamus eaque eum,..Lorem ipsum dolor sit amet consectetur.",
    rating: {
      score: 4.5,
      votes: 1,
    },
    time: "11/03/2026",
    season: 3,
    images: {
      mainImage: {
        src: mainImage3,
        alt: "",
      },
      subImages: [
        { src: season03, alt: "" },
        { src: season003, alt: "" },
        { src: season0003, alt: "" },
      ],
    },
    tags: [{ tag: "Série" }, { tag: "Chaotic" }],
    trailer:
      "https://www.youtube.com/embed/RVk3jW4TeMA?si=cgQ2pjeA9BH7qxbK&autoplay=1",
  },
];
