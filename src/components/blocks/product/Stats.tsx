 "use client";
 
 import NumberFlow from "@number-flow/react";
 import { motion } from "framer-motion";
 import { ArrowRight } from "lucide-react";
 import React, { useRef, useState } from "react";
 import { ToggleGroup, ToggleGroupItem } from "@/components/shadcn/ui/toggle-group"
 import { Button } from "@/components/shadcn/ui/button";
 import { cn } from "@/lib/utils";
import { Stats as StatsTypes } from "@/payload-types";
 
 interface StatsProps {
   className?: string;
   content: StatsTypes['content']
 }
 
 const Stats = ({ className, content}: StatsProps) => {
   const ref = useRef(null);
   const IllustrationRef = useRef(null);
   const [selectedYear, setSelectedYear] = useState('imperial');
 
   const { heading, body, includeSwitch} = content;

   const Stats = {
     imperial: {
       test: 4,
       maxSpeed: 4,
       maxRange: 9,
       maxUserWeight: {
        stone: 21,
        pounds: 7,
        kg: 136.5
       },
       scooterWeight: {
        stone: 2,
        pounds: 7,
        kg: 15.8
       },
       battery: 6.6,
       fixedLights: 'Yes',
       offBoardCharging: 'Yes',
       suspension: 'Yes',
       maximumSlope: 10,
       turningRadius: 55,
       tyreType: 'Solid',
       PathHeight: 0,
     },
     metric: {
        test: 4,
       maxSpeed: 14,
       maxRange: 28,
       maxUserWeight: {
        stone: 21,
        pounds: 7,
        kg: 136.5
       },
       scooterWeight: {
        stone: 2,
        pounds: 7,
        kg: 15.8
       },
        battery: 6.6,
       fixedLights: 'Yes',
       offBoardCharging: 'Yes',
       suspension: 'Yes',
       maximumSlope: 10,
       turningRadius: 55,
       tyreType: 'Solid',
       PathHeight: 55,
     },

   };
 
   const years = Object.keys(Stats).map(String);

   console.log(selectedYear);


 
   return (
     <section className={cn("section", className)}>
       <div className="container flex flex-col md:flex-row">
         <div className="z-10 md:flex-1">
            <div className="flex flex-wrap gap-2 justify-between items-center border-b pb-6 border-gray-400">
                <div className="h-fit">
                    <h1 className="font-cal text-2xl font-extrabold tracking-tighter md:text-4xl">{heading}</h1>
                    {body && <p className="mt-4 max-w-xl text-muted-foreground/80">{body}</p>}
                </div>
                  <div className="relative flex w-fit flex-row flex-wrap gap-2 md:mt-42 md:flex-col">
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
                </div>
            </div>

           <div
             ref={ref}
             className="mt-12 flex flex-col items-end bg-background md:mt-16 xl:bg-transparent"
           >
             <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
               <div className="w-full text-left">
                  <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Maximum Speed
                 </p>
                 <h2 className="text-4xl font-medium lg:text-5xl">
                   <NumberFlow
                     value={Stats[selectedYear as keyof typeof Stats].maxSpeed ?? 0}
                     suffix={selectedYear == 'imperial' ? 'mph' : 'kph'}
                   />
                 </h2>
               </div>
               <div className="w-full text-left">
                 <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Maximum Range
                 </p>
                 <h2 className="text-4xl font-medium lg:text-5xl">
                   <NumberFlow
                     value={
                       Stats[selectedYear as keyof typeof Stats].maxRange
                     }
                      suffix={selectedYear == 'imperial' ? 'miles' : 'km'}
                   />
                 </h2>
                
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Maximum User Weight
                 </p>
                 <h2 className="text-4xl font-medium lg:text-5xl">
                   <NumberFlow
                     value={
                       Stats[selectedYear as keyof typeof Stats].maxUserWeight[selectedYear == 'imperial' ? 'stone' : 'kg']
                     }
                    suffix={selectedYear == 'imperial' ? 'st' : 'kg'}
                   />
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Scooter Weight
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                    {/* <NumberFlow 
                        value={Stats[selectedYear as keyof typeof Stats].scooterWeight} 
                        suffix={selectedYear === 'imperial' ? 'st' : 'kg'} 
                    /> */}
                     <NumberFlow
                     value={
                       Stats[selectedYear as keyof typeof Stats].scooterWeight[selectedYear == 'imperial' ? 'stone' : 'kg']
                     }
                    suffix={selectedYear == 'imperial' ? 'st' : 'kg'}
                   />
                    <NumberFlow 
                     value={
                       Stats[selectedYear as keyof typeof Stats].scooterWeight[selectedYear == 'imperial' ? 'pounds' : 'kg']
                     }
                    suffix={selectedYear == 'imperial' ? 'st' : 'lbs'}
                    className={`transition-opacity duration-300 ${selectedYear === 'imperial' ? 'opacity-100' : 'opacity-0'}`}
                         />
                   {/* <NumberFlow
                     value={
                       Stats[selectedYear as keyof typeof Stats].scooterWeight
                     }
                    suffix={selectedYear == 'imperial' ? 'st' : 'kg'}
                   /> */}
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Battery
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                     <NumberFlow
                     value={
                       Stats[selectedYear as keyof typeof Stats].battery
                     }
                    suffix={'Ah Lith.'}
                   />
            
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Fixed Lights
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                    <span>{Stats[selectedYear as keyof typeof Stats].fixedLights}</span>
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Off-board Charging
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                   <span>{Stats[selectedYear as keyof typeof Stats].offBoardCharging}</span>
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Suspension
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                    <span>{Stats[selectedYear as keyof typeof Stats].suspension}</span>
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Maximum Slope
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                    <span>{Stats[selectedYear as keyof typeof Stats].maximumSlope}</span>
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Turning Radius
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                     <NumberFlow
                     value={
                       Stats[selectedYear as keyof typeof Stats].turningRadius
                     }
                    suffix={'in'}
                   />
                 </h2>
               </div>
               <div className="w-full text-left">
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                   Tyre Type
                 </p>
                 <h2 className="text-4xl font-medium flex flex-row gap-3 lg:text-5xl">
                    <span>{Stats[selectedYear as keyof typeof Stats].tyreType}</span>
                 </h2>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export { Stats };
 
 const LinkIllustration = ({ className = "", PathHeight = 0 }) => {
   return (
     <svg
       width="280"
       height="124"
       viewBox="0 0 412 178"
       overflow="visible"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
       className={className}
     >
       <motion.path
         initial={{ pathLength: 0 }}
         animate={{ pathLength: 1 }}
         transition={{ duration: 1 }}
         key={PathHeight}
         d={`M408.308 ${PathHeight}H294L114.965 274H1`}
         stroke="currentColor"
         strokeWidth="1.5"
       />
       <motion.path
         d={`M408.308 ${PathHeight}H294L114.965 274H1`}
         stroke="black"
         strokeWidth="1.5"
         opacity="0.1"
       />
       <circle cx="408.309" cy={PathHeight} r="5" fill="currentColor" />
       <circle cx="2" cy="274" r="5" fill="currentColor" />
     </svg>
   );
 };
 