"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Circle } from "lucide-react";

import { BorderBeam } from "@/components/shadcn/ui/border-beam";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";


import { cn } from "@/lib/utils";
import { ProductHero as ProductHeroTypes } from "@/payload-types";
import Icon from "@/components/icons";
import Button from "@/components/ui/Button";
import MediaImage from "@/components/ui/MediaImage";
import ButtonGroup from "@/components/ui/ButtonGroup";
import { useEffect, useState } from "react";
interface ProductHeroProps {
  className?: string;
  heroContent?: ProductHeroTypes['heroContent']
  heroImages?: ProductHeroTypes['heroImages']
}


const ProductHero = ({className, heroContent, heroImages }: ProductHeroProps) => {
  
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const {heading, body, list, buttons} = heroContent;
    

    return (
    <section
      className={cn(
        "section overflow-hidden",
        className,
      )}
    >
      <div className="section__background bg-muted">
      <div className="container">
        <div className="product-hero flex flex-col gap-20">
          <div className="product-hero__inner">
            <div className="product-hero__content">
              <div className="flex w-full flex-col items-start gap-10">
                <div className="flex w-full max-w-2xl flex-col items-start gap-3">
                 
                  <h1 className="text-4xl leading-none font-semibold tracking-tighter text-foreground md:text-7xl">
                    {heading}
                  </h1>
                  <div className="text-base leading-6 text-muted-foreground md:text-lg">
                    {body}
                  </div>
                  {list  && 
                    <ul className="product-hero__list text-sm leading-6 text-muted-foreground md:text-l"> 
                      {list.map((item, index) => 
                        <li className="flex flex-row gap-2 items-center" key={index}>
                          <Icon name="CheckMark"/>
                          {item.listItem}</li>
                      )}
                    </ul>
                  }
                </div>
                  <ButtonGroup buttons={buttons}/>
              </div>
            </div>
            <div className="product-hero__carousel-wrapper"> 
              {heroImages.images &&  heroImages.images && 
                 <Carousel 
                   className="product-hero__carousel"
                   opts={{
                    loop: true,
                  }}
                  setApi={setApi} 
                  plugins={[Autoplay({ delay: 5000 })]}
                  >
                  <CarouselContent className="product-hero__carousel-content">
                    {heroImages.images.map((image, index) => 
                      <CarouselItem className="product-hero__carousel-item " key={index}>
                        <MediaImage image={image} className="product-hero__carousel-media"/>
                      </CarouselItem>
                    )}
                </CarouselContent>
                 <CarouselPrevious className="product-hero__carousel-button product-hero__carousel-prev bg-gray-300 border-0 text-white hover:bg-gray-400"/>
                 <CarouselNext className="product-hero__carousel-button product-hero__carousel-next bg-gray-300 border-o text-white hover:bg-gray-400"/>
              
                </Carousel>
              }
            </div>
           
          </div>
        </div>
      </div>
      </div>
      <div className="product-hero__carousel-pagination flex gap-2 justify-center mt-4">
        {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          className={cn("w-2 h-2 rounded-full transition-width duration-300 ease", i === current ? "bg-gray-400 w-3" : "bg-gray-200")}
          onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
};

export { ProductHero };
