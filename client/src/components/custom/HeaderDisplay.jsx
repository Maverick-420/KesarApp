import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeaderDisplay = () => {
  const imagesData = ["branding2.jpg", "branding3.jpg", "branding4.jpg"];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000; // 3 seconds

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) =>
        prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="relative my-10 mx-auto w-[93vw] overflow-hidden">
      <Carousel>
        <CarouselContent
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: "transform 0.5s ease",
          }}
          className="flex"
        >
          {imagesData.map((image, index) => (
            <CarouselItem
              key={index}
              className="w-[full] h-[50vh] flex-shrink-0"
            >
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeaderDisplay;
