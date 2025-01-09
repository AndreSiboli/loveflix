import { StaticImageData } from "next/image";

export type seasonType = {
  title: string;
  text: string;
  rating: {
    score: number;
    votes: number;
  };
  time: string;
  season: number;
  images: {
    mainImage: {
      src: StaticImageData;
      alt: string;
    };
    subImages: [
      { src: StaticImageData; alt: string },
      { src: StaticImageData; alt: string },
      { src: StaticImageData; alt: string }
    ];
  };
  tags: {tag: string}[]
  trailer: string
};
