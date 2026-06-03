import {
  Blocks,
  Globe,
  Layers,
  Palette,
  Rocket,
  Zap,
} from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";

import { cn } from "@/lib/utils";
import { FeaturesGrid as FeaturesGridTypes } from "@/payload-types";
import MediaImage from "@/components/custom/MediaImage";
import Icon from "@/components/icons";


type Props = {
  className?:string,
  features: FeaturesGridTypes['features']
  sectionHeading: FeaturesGridTypes['sectionHeading']
}

const FeaturesGrid = ({className, features, sectionHeading}: Props) => {

  const {heading, buttons} = sectionHeading


  return (
    <section className={cn("section bg-muted", className)}>
      <div className="container mx-auto">
        <div className="mx-auto">
          <div className="mb-9 flex flex-col items-center justify-between gap-y-4 md:flex-row lg:mb-14">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-balance md:text-left md:text-4xl">
              {heading?.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <div className="flex flex-row gap-2 ml-auto">
              {buttons?.map((button, i) => 
              <Button variant="outline" size="lg" asChild className="rounded-full" key={i}>
                  <a href={button.link.url}>{button.link.linkLabel}</a>
                </Button>
              )}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features?.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="">
                {feature.image &&
                  <div className="mb-6 flex gap-4 w-full border relative">
                    <MediaImage image={feature.image} className="h-auto w-full"/>
                    <Icon name="Expand" className="absolute top-4 right-4 text-gray-400"/>
                  </div>
                }
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  <span className="font-light mr-1">{idx + 1}.</span>                 
                  {feature.heading}
                </h3>
                <p className="mb-4 text-lg text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesGrid };
