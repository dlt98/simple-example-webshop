import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronButton } from "../ChevronButton";

interface IProps {
  collectionTitle: string;
  images: string[];
}

export const ImageCarousel = ({ images, collectionTitle }: IProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="md:w-1/2">
      <div className="relative">
        <ChevronButton
          position="left"
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2"
        />
        <img
          src={images[currentImageIndex]}
          alt={collectionTitle}
          className="h-auto w-full rounded-lg object-cover"
        />
        <ChevronButton
          position="right"
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2"
        />
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${collectionTitle} thumbnail ${index + 1}`}
            className={twMerge(
              "size-20 cursor-pointer rounded object-cover",
              currentImageIndex === index && "border-2 border-blue-500",
            )}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
