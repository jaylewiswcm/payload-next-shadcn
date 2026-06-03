"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";

interface HeroCarouselSlide {
  src: string;
  alt: string;
  name?: string;
  title?: string;
  description?: string;
  href?: string;
}

interface HeroSliderProps {
  slides: HeroCarouselSlide[];
  slideCtaLabel: string;
  className?: string;
}

interface ProductHeroProps extends HeroSliderProps {}
type Props = Partial<ProductHeroProps>;

const defaultProps: HeroSliderProps = {
  slides: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/1-3x4.jpg",
      alt: "Residential architecture exterior",
      title: "Build Your Dream Home with us",
      description: "More than homes — we build dreams.",
      href: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/2-3x4.jpg",
      alt: "Smart home interior",
      title: "Smart Homes",
      description: "Intelligent living spaces for the future",
      href: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/3-3x4.jpg",
      alt: "Sustainable home",
      title: "Eco Friendly",
      description: "Sustainable and environmentally conscious homes",
      href: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/4-3x4.jpg",
      alt: "Custom build",
      title: "Custom Builds",
      description: "Tailored solutions for your unique vision",
      href: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/5-3x4.jpg",
      alt: "Bespoke home",
      title: "Custom Builds",
      description: "Tailored solutions for your unique vision",
      href: "#",
    },
  ],
  slideCtaLabel: "Try it for free",
};

const ProductHero = (props: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const { slides, slideCtaLabel, className } = {
    ...defaultProps,
    ...props,
  };

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={cn("py-32", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="flex w-full gap-4">
            {slides.map((img, index) => (
              <CarouselItem key={index} className="w-full basis-[91%]">
                <div className="p-1">
                  <div className="relative flex h-166 flex-col items-end justify-between bg-muted p-8">
                    <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="aspect-video h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="z-10 mt-42 text-background">
                      <h1 className="max-w-lg text-right text-6xl font-medium tracking-tight">
                        {img.title ?? ""}
                      </h1>
                      <p className="my-6 max-w-lg text-right text-lg">
                        {img.description ?? ""}
                      </p>
                    </div>
                    <div className="z-10 flex w-full justify-between bg-transparent">
                      <a href={img.href ?? "#"}>
                        <Button
                          variant="outline"
                          className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
                        >
                          {slideCtaLabel}
                          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  current === index
                    ? "w-4 bg-primary"
                    : "bg-muted-foreground/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export { ProductHero };
