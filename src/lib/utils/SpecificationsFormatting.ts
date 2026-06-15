export interface FormattedStat {
    value: number
    unit?: string
    secondary?: {
        value: number
        unit: string
    }
}
        
export const formatKey = (key: string) => {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .trim()

    }
export  const formatValue = (key: string, val: any): FormattedStat => {
        if (val === null || val === undefined) return { value: 0 }

        // Stone + lbs fields
        if (typeof val === 'object' && 'stone' in val && 'lbs' in val) {
            return { 
            value: val.stone, 
            unit: 'st',
            secondary: { value: val.lbs, unit: 'lbs' }
            }
        }

    
        if (typeof val === 'object' && 'value' in val && 'unit' in val) {
            return { value: val.value, unit: val.unit }
        }

    
        return { value: val }
}