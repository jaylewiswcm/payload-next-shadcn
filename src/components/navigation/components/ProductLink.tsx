/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import Icon from '@/components/icons';
import { ProductSubmenu } from '../dropdowns';

import { isIconName } from '@/components/icons/registry'
import Image from 'next/image';


type ProductLinkType = NonNullable<ProductSubmenu['products']>[number]

type Props = {
 product: ProductLinkType
};


export function ProductLink({product}: Props) {
    
    const {relationTo, value } = product;


    // bail if not populated — TS narrows `value` to the object below
    if (typeof value !== 'object' || value === null) return null
    

    const { slug, productName, category, productCutout, menuDesc} = value
    
    // console.log('product: ', value);

    const url = typeof category == 'object' && category ? '/' + category.slug + '/' + slug : '/' + slug;

    return (
        <NavigationMenuLink href={url} className="group flex flex-col items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-muted/90 dark:hover:bg-muted/70">
            <div className="flex size-50 shrink-0 items-center justify-center rounded-md p-1.5 transition-colors aspect-[8/7] as w-full group-hover:bg-muted dark:group-hover:bg-muted">
                {typeof productCutout === 'object' && productCutout !== null && (
                    <Image
                        src={productCutout.url}
                        alt={productCutout.alt ?? `Cutout of ${productName}`}
                        width={productCutout.width}
                        height={productCutout.height}
                    />
                )}
            </div>
            <div className=" text-foreground">
                <p className="text-sm font-semibold">{productName}</p>
                <p className="text-xs font-normal text-gray-500 mt-1">{menuDesc}</p>
            </div>
        </NavigationMenuLink>
    )
}

