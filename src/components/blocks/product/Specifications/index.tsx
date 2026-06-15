 "use client";
 
 import NumberFlow from "@number-flow/react";
 import { motion } from "framer-motion";
 import { ArrowRight } from "lucide-react";
 import React, { useRef, useState } from "react";
 import { ToggleGroup, ToggleGroupItem } from "@/components/shadcn/ui/toggle-group"
 import { Button } from "@/components/shadcn/ui/button";
 import { cn } from "@/lib/utils";
import { Scooter, SpecificationsBlock as SpecificationsTypes } from "@/payload-types";
import { TopLine } from "./TopLine";
import { SpecificationTables } from "./Tables";
 
 interface SpecificationsProps {
   className?: string;
   content: SpecificationsTypes['content']
   product: Scooter
 }
 
 const Specifications = ({ className, content, product}: SpecificationsProps) => {
   const ref = useRef(null);
   const [selectedYear, setSelectedYear] = useState('imperial');
  
   const { heading, body, includeSwitch} = content;
   
    const { specs}  = product;

  

   return (
     <section className={cn("section", className)}>
       <div className="container flex flex-col md:flex-row">
         <div className="specifications z-10 md:flex-1">
            <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-6 border-gray-400">
                <div className="h-fit">
                    <h1 className="font-cal text-2xl font-extrabold tracking-tighter md:text-4xl">{heading}</h1>
                    {body && <p className="mt-4 max-w-xl text-muted-foreground/80">{body}</p>}
                </div>
                  {/* <div className="relative flex w-fit flex-row flex-wrap gap-2 md:mt-42 md:flex-col">
                    <ToggleGroup
                        type="single"
                        value={selectedYear}
                        onValueChange={setSelectedYear}
                        className="rounded-full border p-1"
                        >
                        <ToggleGroupItem
                            value="imperial"
                            className="rounded-full px-5 py-2 text-gray-400 data-[state=on]:bg-red-500 data-[state=on]:text-white"
                        >
                            Imperial
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="metric"
                            className="rounded-full px-5 py-2 text-gray-400 data-[state=on]:bg-red-500 data-[state=on]:text-white"
                        >
                            Metric
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div> */}
            </div>

            <TopLine specs={specs.stats} ref={ref}/>
            <SpecificationTables specs={specs}/>
         </div>
       </div>
     </section>
   );
 };
 
 export { Specifications };
 