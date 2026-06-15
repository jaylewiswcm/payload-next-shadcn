"use client";

import { Bolt, Cloud, MessagesSquare, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/shadcn/ui/badge";
import type { CarouselApi } from "@/components/shadcn/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import { KeyFeatures as KeyFeaturesTypes } from "@/payload-types";
import Icon from "@/components/icons";
import MediaImage from "@/components/ui/MediaImage";

interface KeyFeaturesProps {
  className?: string;
  content: KeyFeaturesTypes['content']
}

const KeyFeatures = ({ className, content}: KeyFeaturesProps) => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const handleSelection = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const { heading, features} = content;

  return (
    <section className={cn("section", className)}>
      <div className="container mx-auto px-4">
        <div className="mb-8 text-left md:mb-12">
          <h2 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {/* <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:mt-4 md:text-base">
            Our platform combines powerful features with elegant design to help
            you accomplish more and achieve your goals.
          </p> */}
        </div>
        <div>
          <div className="mx-auto flex flex-col-reverse gap-6 md:flex-row md:gap-8 lg:gap-16">
            <div className="md:w-1/2 lg:w-2/5">
              <ul className="grid grid-cols-1 gap-3 md:flex md:flex-col md:gap-2">
                {features.map((feature, i) => {
                  const isSelected = selection === i;
                  return (
                    <li
                      key={feature.id}
                      className={`group relative flex cursor-pointer px-4 py-3 transition-all duration-300 md:px-5 md:py-4 ${
                        isSelected
                          ? "bg-accent"
                          : "hover:bg-accent/30"
                      }`}
                      data-open={isSelected ? "true" : undefined}
                      onClick={() => handleSelection(i)}
                    >
                      <div className="flex w-full items-start gap-3 md:gap-4">
                        <div
                          className={`flex aspect-square w-9 shrink-0 items-center justify-center rounded-lg transition-colors md:w-10 ${
                            isSelected
                              ? "bg-gray-400 text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon name={feature.icon} className="size-4 md:size-5"/>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`mb-1 text-sm font-semibold transition-colors md:text-base lg:text-lg ${
                              isSelected
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature.heading}
                          </h3>
                          <p className="line-clamp-2 text-xs text-muted-foreground transition-all md:text-sm md:group-data-open:opacity-100 lg:text-sm">
                            {feature.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative md:w-1/2 lg:w-3/5">
              <div className="overflow-hidden">
                <Carousel
                  setApi={setCarouselApi}
                  className="aspect-4/5  w-full md:aspect-3/4 lg:aspect-4/5 [&>div]:h-full"
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent className="mx-0 h-full w-full">
                    {features.map((feature) => (
                      <CarouselItem key={feature.id} className="px-0 max-h-[550px]">
                        <div className="relative h-full w-full overflow-hidden">
                          <MediaImage image={feature.image} className="h-full w-full object-cover object-center transition-transform duration-500"/> 
                          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-background/80 via-background/40 to-transparent p-6 bg-muted">
                            <div className="flex items-start gap-3">
                              <div className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg bg-gray-400 text-primary-foreground">
                                 <Icon name={feature.icon} className="size-5"/>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  {feature.heading}
                                </h3>
                                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                                  {feature.body}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Carousel indicators */}
              <div className="mt-5 flex justify-center gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    className={`size-2 rounded-full transition-all ${
                      selection === i
                        ? "w-6 bg-gray-400"
                        : "bg-gray-200 hover:bg-muted-foreground/50"
                    }`}
                    onClick={() => handleSelection(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { KeyFeatures };
