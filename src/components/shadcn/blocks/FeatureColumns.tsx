import type { LucideIcon } from "lucide-react";
import { Eye, Keyboard, Volume2 } from "lucide-react";

import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { CoverBanner, FeatureColumns as FeatureColumnsTypes, Media } from "@/payload-types";
import MediaImage from "@/components/ui/MediaImage";
import { isIconName } from "@/components/icons/registry";
import Icon from "@/components/icons";

type Feature = NonNullable<FeatureColumnsTypes['features']>[number]

const FeatureItem = ({ heading, body, icon }: Feature) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6">
      {/* <Icon className="size-7 stroke-muted-foreground" /> */}
       {isIconName(icon) && ( <Icon name={icon} className="size-6 text-gray-500" /> )}
      <div className="max-w-xs text-center text-xl font-semibold">{heading}</div>
      <div className="max-w-lg text-center text-base text-muted-foreground">
        {body}
      </div>
    </div>
  );
};

type FeatureColumnsProps = FeatureColumnsTypes & {
  className?: string;
}
 
const FeatureColumns = ({ className, features }: FeatureColumnsProps) => {
  return (
    <section className={cn("w-full px-6 flex flex-col items-center bg-muted", className)}>
      <div className="container">
        <div className="grid items-start gap-8 py-20 lg:grid-cols-3">
          {features.map((item) => (
            <FeatureItem key={item.heading} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureColumns };
