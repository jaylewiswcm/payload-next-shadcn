"use client";

import MediaImage from "@/components/ui/MediaImage";
import { cn } from "@/lib/utils";
import { CardGrid as CardGridTypes} from "@/payload-types";
const integrations = [
  {
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9jsQcDsxyqA-unsplash.jpg",
    title: "Indigo Technology",
    description:
      "Enhance teamwork with our real-time collaboration tools that keep your team connected and productive.",
  },
  {
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-uR__S5GX8Io-unsplash.jpg",
    title: "Rapid Financial",
    description:
      "Leverage powerful analytics to make informed decisions and drive your business forward.",
  },
];

interface CardGridProps {
  className?: string;
  heading?: CardGridTypes['heading']
  body?: CardGridTypes['body']
  cardGrid: CardGridTypes['cardGrid']
}

const CardGrid = ({ className, heading, body, cardGrid}: CardGridProps) => {
  return (
    <section className={cn("section bg-muted", className)}>
      <div className="container">
        {heading && 
            <h1 className="mx-auto mb-12 max-w-3xl text-center text-4xl font-semibold sm:text-5xl lg:text-[56px]">
                Our customers get results and save time
            </h1>
        }
        {body && 
            <p>{body}</p>
        }
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {cardGrid.map((card, index) => (
            <div
              key={index}
              className="relative flex-auto basis-1 transition-opacity delay-150 duration-300 hover:opacity-80"
            >
                <MediaImage image={card.image} className="mb-6 aspect-[1.5] w-full object-cover"/>
              <div className="mb-2 text-2xl font-bold">{card.title}</div>
              <div className="text-lg text-muted-foreground">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CardGrid };
