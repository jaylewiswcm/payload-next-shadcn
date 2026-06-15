import { formatKey, formatValue } from "@/lib/utils/SpecificationsFormatting";
import { Specifications } from "@/payload-types"
import NumberFlow from "@number-flow/react";

type Props = {
    specs: Specifications["stats"]
    ref: React.RefObject<any>
}

export function TopLine({specs, ref}:Props) {
    

    
    const topLineStats = specs


    return(
          <div
             ref={ref}
             className="specifications__top-line mt-12 flex flex-col items-end bg-background md:mt-9 xl:bg-transparent"
           >
             <div className="specifications__top-line-stats mt-auto mb-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
                {topLineStats && Object.entries(topLineStats).map(([key, val]) => {
                    const { value, unit, secondary } = formatValue(key, val)
                    return (
                    <div className="specifications__top-line-stat w-full text-left" key={key}>
                        <p className="text-sm whitespace-pre text-muted-foreground/70">
                            {formatKey(key)}
                        </p>
                        <h2 className="text-4xl font-medium lg:text-5xl">
                            {typeof value === 'number' ? (
                            <>
                                <NumberFlow value={value} suffix={''} />
                                <span className="suffix text-2xl">{unit}</span>
                                {secondary && (
                                <>
                                    <NumberFlow value={secondary.value} suffix={''} className="ml-2"/>
                                    <span className="suffix text-2xl">{secondary.unit}</span>
                                </>
                                )}
                            </>
                            ) : (
                            <span className="capitalize">{value}</span> 
                            )}
                        </h2>
                        </div>
                    )
                })}

             </div>
           </div>
    )

}