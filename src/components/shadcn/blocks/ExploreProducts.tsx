"use client";
import type { ExploreProducts } from '@/payload-types'
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from 'next/image';
import MediaImage from '@/components/ui/MediaImage';
import Link from 'next/link';
import { useState } from 'react';


type ExploreProductsProps = ExploreProducts & {
  className?: string;
}

const ExploreProducts = ({ className, subheading, heading, products }: ExploreProductsProps) => {
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={cn("section py-32 px-6 bg-muted w-full flex flex-col items-center justify-center", className)}>
      <div className="container">
        <h4 className="mb-4 text-center text-muted-foreground/50">{subheading}</h4>
        <h1 className="mx-auto mb-12 max-w-3xl text-center text-4xl font-extrabold sm:text-5xl lg:text-[56px]">{heading}</h1>
        {/* <div className="flex flex-col  justify-between gap-12 lg:flex-row">
        {products.map((product, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return(
            <Link
              key={index}
              className={cn("relative flex-auto basis-1 transition-opacity delay-150 duration-300 hover:opacity-80")}
              style={{  flex: isHovered ? 1.3 : isOtherHovered ? 0.85 : 1,}}
              href="#"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            > 
              <MediaImage
                image={product.image}
                className="mb-6 aspect-[1.5] w-full object-cover"
              />
              <div className="mb-2 text-2xl font-semibold">{product.title}</div>
              <div className="text-muted-foreground">{product.description}</div>
            </Link>
          )} )}
        </div> */}
        <div
          className="hide-scrollbar flex gap-8 overflow-x-auto pb-4 md:overflow-visible md:pb-0 flex flex-col  justify-between gap-12 lg:flex-row"
          role="list"
          aria-label="Featured stories"
          >
         {products.map((product, index) => {
                const isHovered = hoveredIndex === index;
                const isOtherHovered =
                  hoveredIndex !== null && hoveredIndex !== index;

                return (
                  <motion.article
                    layout
                    key={product.title}
                    role="listitem"
                    className={cn(
                      "group relative flex min-h-96 min-w-72 flex-none overflow-hidden transition duration-300 md:min-w-0 md:flex-1",
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    tabIndex={0}
                    animate={{
                      flex: isHovered ? 1.3 : isOtherHovered ? 0.85 : 1,
                    }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                  >
                    <Link href={'/'} className="flex flex-col h-full w-full">
                      {/* Image container with fixed height */}
                      <div className="relative w-full overflow-hidden h-96">
                        <MediaImage
                          image={product.image}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover transition duration-500",
                            isHovered ? "scale-105" : "scale-100",
                          )}
                        />
                      </div>

                      {/* Text below image */}
                      <div className="flex flex-col gap-2 py-4 max-w-lg">
                        <div className="text-2xl font-semibold">{product.title}</div>
                        <div className="text-muted-foreground">{product.description}</div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export { ExploreProducts };
