import { ArrowRight } from "lucide-react";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Button } from "@/components/shadcn/ui/button";

import { cn } from "@/lib/utils";
import ButtonGroup from "@/components/ui/ButtonGroup";
import { CustomerPhotographs as CxPhotosType } from "@/payload-types";
import MediaImage from "@/components/ui/MediaImage";

import { TrustpilotBadge } from "@/components/svgs/trustpilot/badge";

type Props = {
  content: CxPhotosType['content']
  images: CxPhotosType['images']
  className? : string
}

/** Fan layout for three cards: wings angled back, center slightly raised and forward. */
const cardPositions = [
  "absolute top-16 left-[4%] z-10 origin-bottom rotate-[-14deg] sm:left-[8%] md:left-[12%] lg:top-12 lg:left-[14%]",
  "absolute top-4 left-1/2 z-30 origin-bottom -translate-x-1/2 rotate-[3deg] sm:top-2 lg:top-0",
  "absolute top-16 right-[4%] z-10 origin-bottom rotate-[14deg] sm:right-[8%] md:right-[12%] lg:top-12 lg:right-[14%]",
  "absolute top-16 right-[8%] z-10 origin-bottom rotate-[14deg] sm:right-[8%] md:right-[12%] lg:top-10 lg:right-[20%]",
] as const;

const CustomerPhotographs = ({content, images, className}: Props) => {
  // const { heading, description, buttons, cards, className } = {
  //   ...defaultProps,
  //   ...props,
  // };

  console.log(content);
  const {heading, body, buttons } = content;

  return (
    <section
      className={cn(
        "section relative grid min-h-[600px] overflow-hidden bg-muted py-32 lg:h-[46rem] lg:max-h-[1200px]",
        className,
      )}
    >
      <div className="relative z-10 container h-full grid-cols-1 items-center justify-center gap-10 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <span className="badge mb-6"><TrustpilotBadge/></span>
          <h1 className="font-extrabold max-w-lg text-5xl text-foreground">{heading}</h1>
          {body && (
            <p className="text-large leading-7 mt-10 max-w-md text-muted-foreground">
              {body}
            </p>
          )}
          <ButtonGroup buttons={buttons} className="mt-10"/>
        </div>
        <div className="flex w-full justify-center h-full">
          <DraggableCardContainer className="relative flex min-h-112 w-full h-full max-w-4xl items-center justify-center sm:min-h-120 lg:min-h-128">
            <div className="relative mx-auto h-full min-h-104 w-full max-w-3xl">
              {images.map((image, index) => (
                <DraggableCardBody
                  key={index}
                  className={cn(
                    cardPositions[index % cardPositions.length],
                    "scale-90 overflow-hidden rounded-2xl p-0 sm:scale-95 lg:scale-100",
                  )}
                >
                  {image && (
                    <MediaImage image={image} className="pointer-events-none relative z-10 aspect-3/4 w-full object-cover"/>
                  )}
                </DraggableCardBody>
              ))}
            </div>
          </DraggableCardContainer>
        </div>
      </div>
    </section>
  );
};

export { CustomerPhotographs };
