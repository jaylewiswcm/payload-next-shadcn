"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import type { CarouselApi } from "@/components/shadcn/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import { FeatureAccordion } from "@/payload-types";
import Link from "next/link";
import MediaImage from "@/components/custom/MediaImage";
import { Button } from "@/components/ui/button";
 
type FeatureAccordionsProps = FeatureAccordion & {
  className?: string;
}

const FeatureAccordions = ({ className, heading, body, accordions, button }: FeatureAccordionsProps) => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);
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

  return (
    <section className={cn("section", className)}>
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="aspect-5/6 overflow-clip  bg-accent">
            <Carousel
              setApi={setCarouselApi}
              className="h-full w-full [&>div]:h-full"
            >
              <CarouselContent className="mx-0 h-full w-full">
                {accordions.map((accordion) => (
                  <CarouselItem key={accordion.id} className="px-0">
                    <MediaImage
                      image={accordion.image}
                      className="h-full w-full object-cover object-center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex shrink-0 flex-col md:w-1/2 md:pr-8 lg:pl-24 lg:text-left 2xl:pl-32">
            <h2 className="mb-6 text-3xl font-extrabold text-pretty lg:text-5xl">
              {heading}
            </h2>
            <p className="mb-16 text-muted-foreground lg:text-xl">
              {body}
            </p>
            <ul className="space-y-2">
              {accordions.map((accordion, i) => (
                <li
                  key={accordion.id}
                  className="group relative w-full cursor-pointer px-6 py-3 transition data-[open=true]:bg-accent"
                  data-open={selection === i ? "true" : undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-base font-bold text-accent-foreground">
                      {accordion.title}
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors group-hover:bg-gray-400 group-hover:text-primary-foreground group-data-[open=true]:bg-gray-400 group-data-[open=true]:text-primary-foreground">
                      <ChevronDown className="size-4 shrink-0 transition-transform duration-200  group-data-[open=true]:rotate-180" />
                    </div>
                  </div>
                  <div className="hidden text-base font-normal group-data-[open=true]:block">
                    <p className="my-4 text-muted-foreground lg:my-6">
                      {accordion.body}
                    </p>
                    <Link
                      href={accordion.url}
                      className="group/link flex items-center pb-3 text-sm text-accent-foreground"
                    >
                      Learn more{" "}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
              {button.url &&
                <Link
                  href={button.url}
                  className="group flex w-fit items-center justify-center gap-2 rounded-full mt-12 px-5 py-2 tracking-tight font-normal bg-red-500 text-white cursor-pointer"
                >
                <span>{button.label}</span>
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Link>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureAccordions };
