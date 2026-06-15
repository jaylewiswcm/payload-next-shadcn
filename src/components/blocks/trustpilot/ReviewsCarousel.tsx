"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import type { CarouselApi } from "@/components/shadcn/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import { ReviewsCarousel as ReviewsCarouselType} from "@/payload-types";
import { TrustpilotStars } from "@/components/svgs/trustpilot/stars";
import Icon from "@/components/icons";
import { TrustpilotBadge } from "@/components/svgs/trustpilot/badge";
import { TrustpilotLogo } from "@/components/svgs/trustpilot/logo";
import { TrustpilotRatedExcellent } from "@/components/svgs/trustpilot/rated-excellent";

const data = [
  {
    id: "feature-1",
    title: "A R Davies",
    description:
      "A quality product assembled and delivered very promptly. Good communication by company and professionally dealt with.",
    label: "09/05/2026",
    href: "https://www.shadcnblocks.com",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-2",
    title: "John And Avis Mackay",
    description:
      "Really made up with both our chairs. Imogen and Joe have been amazing. A true credit to your company.",
    label: "09/05/2026",
    href: "https://www.shadcnblocks.com",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-3",
    title: "Geraghty",
    description:
      "The first scooter was unstable to me. I'm waiting delivery on Wednesday of a fold up scooter. Everyone i have dealt with we're good.",
    label: "09/05/2026",
    href: "https://www.shadcnblocks.com",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-4",
    title: "Sheena Mcconaghy",
    description:
      "I had a small problem with a loose connection and the engineer Trevor was so helpful and pleasant. Would certainly recommend.",
    label: "09/05/2026",
    href: "https://www.shadcnblocks.com",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "feature-5",
    title: "Judy Welch",
    description:
      "Seamlessly integrate with existing systems through our robust API framework, enabling smooth data exchange and functionality extension.",
    label: "09/05/2026",
    href: "https://www.shadcnblocks.com",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
];

interface Gallery3Props {
  className?: string;
  content: ReviewsCarouselType['content']
}

const ReviewsCarousel = ({ className, content }: Gallery3Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
     

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      const snaps = carouselApi.scrollSnapList();
      const current = carouselApi.selectedScrollSnap();
      const thumb = (1 / snaps.length) * 100;
      const left = snaps.length > 1 ? (current / (snaps.length - 1)) * (100 - thumb) : 0;

      setThumbWidth(thumb);
      setScrollProgress(left);

    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  function handleTrackInteraction(clientX: number) {
  if (!trackRef.current || !carouselApi) return;

  const { left, width } = trackRef.current.getBoundingClientRect();
  const ratio = Math.min(Math.max((clientX - left) / width, 0), 1);
  const snaps = carouselApi.scrollSnapList();
  const index = Math.round(ratio * (snaps.length - 1));
  carouselApi.scrollTo(index);
}

function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
  e.currentTarget.setPointerCapture(e.pointerId); // keeps drag working outside the bar
  handleTrackInteraction(e.clientX);
}

function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
  if (e.buttons !== 1) return; // only while mouse is held
  handleTrackInteraction(e.clientX);
}


  const { heading, body } = content;
  return (
    <>
    <section className={cn("section", className)}>
      <div className="container">
        <div className="mb-8 flex items-start justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-lg leading-7 max-w-[900px] text-muted-foreground">{body}</p>
          </div>
          <div className="shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="mr-[20px] ml-[20px] 2xl:mr-[calc(50vw-700px+20px)] 2xl:ml-[calc(50vw-700px+20px)]">
            {data.map((item,index) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                onClick={() => setActiveIndex(index)}
              >
                <a
                  href='#'
                  // href={item.href}
                  className="group flex flex-col justify-between rounded-xl bg-muted border border-color-gray-300 p-6"
                >
                 
                 <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-3 h-fit block"/>
                    <p className="text-xs leading-4 font-medium text-gray-700">{item.label}</p>
                 </div>
                  
               
                  <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.description}
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <TrustpilotStars />
                  <div className="flex items-center text-sm invisible">
                    Full Review{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
        <div
          ref={trackRef}
          className="relative h-[3px] bg-gray-200 w-fill overflow-hidden mt-10 cursor-grab"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          style={{ touchAction: 'none' }} // prevents page scroll interfering on mobile
        >
          <div
            className="absolute top-0 left-0 h-full bg-[#2AAD76]  transition-all duration-350 ease-in-out pointer-events-none"
            style={{ width: `${thumbWidth}%`, left: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
      <div className="section section--strip bg-muickblue w-fill ">
        <div className="container">
          <div className="flex flex-row gap-6">
          <TrustpilotLogo />
          <span className="flex w-[1px] h-fill bg-[#6D799E] ml-6"></span>
          <TrustpilotRatedExcellent />
          </div>
        </div>
      </div>
      </>
  );
};

export { ReviewsCarousel };
