import type { LucideIcon } from "lucide-react";
import { Eye, Keyboard, Volume2 } from "lucide-react";

import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { CoverBanner as CoverBannerTypes, Media } from "@/payload-types";
import MediaImage from "@/components/ui/MediaImage";

type CoverBannerProps = CoverBannerTypes & {
  className?: string;
}
 
const CoverBanner = ({ className, backgroundImage, content }: CoverBannerProps) => {
  return (
    <section className={cn("w-full flex flex-col items-center", className)}>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 w-full flex flex-col items-center after:absolute after:inset-0 after:z-10 after:block after:size-full after:bg-black/40 after:content-[''] md:py-16 xl:px-6 xl:py-28"
        style={{
          backgroundImage:
            `url(${(backgroundImage as Media)?.url})`,
        }}
      >
        <div className="relative z-20 container">
          <div className="flex flex-col items-center justify-center gap-12 text-center">
            <div className="flex max-w-6xl flex-col items-center gap-5">
              <MediaImage 
                image={content.logo}
                className="max-w-[250px]"
                />
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-6xl">
                {content.heading}
              </h2>
              <div className="text-lg font-medium tracking-tight text-white">
                {content.body}
              </div>
              <div className="divider bg-white h-[1px] w-[200px]"></div>
              <div className="text-sm font-medium tracking-tight text-white">{content.bottomLogos.body}</div>
              {content.bottomLogos.logos &&
                <div className="flex flex-row gap-6">
                  {content.bottomLogos.logos.map((logo, index) => 
                    <MediaImage 
                      image={logo.logo}
                      className="max-w-[80px]"
                      key={index}
                    />
                  )}
                </div>
              }
            </div>
            {/* <div className="max-w-xl">
              <AspectRatio
                ratio={0.80239521}
                className="w-full overflow-hidden rounded-xl shadow-xl"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt=""
                  className="block size-full object-cover object-center"
                />
              </AspectRatio>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CoverBanner };
