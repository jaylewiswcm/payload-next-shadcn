import { formatKey, formatValue } from "@/lib/utils/SpecificationsFormatting";
import { Specifications } from "@/payload-types"

type Props = {
    specs: Specifications
}

export function SpecificationTables({specs}: Props) {

    console.log(specs);
    const { stats, extraStats, ...tables } = specs


    return (
        <div className="specifications__tables mt-9  md:mt-12">
            {Object.entries(tables).map(([groupKey, groupValue]) => {
                if (!groupValue || typeof groupValue !== 'object') return null
                const entries = Object.entries(groupValue as Record<string, any>)
                if (!entries.length) return null
                return (
                    <div className="specifications__table" key={groupKey}>
                    <h3 className="text-2xl font-extrabold leading-8 text-foreground">{formatKey(groupKey)}</h3>
                    <div className="flex flex-col gap-3 border-t border-gray-400 mt-6 pt-6 w-full">
                        {entries.map(([key, val]) => {
                        const { value, unit, secondary } = formatValue(key, val)
                        return (
                            <div key={key} className="specifications__table-row flex flex-row gap-4">
                            <p className="text-muted-foreground leading-6">{formatKey(key)}</p>
                            <p className="font-bold text-accent-foreground">{value}</p>
                            </div>
                        )})}
                    </div>
                    </div>
                )
            })}
        </div>
    )
}