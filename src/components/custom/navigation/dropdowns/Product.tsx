/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import {CardLink} from '../components/CardLink';
import {IconLink} from '../components/IconLink';
import { ProductSubmenu } from '.';
import { ProductLink } from '../components/ProductLink';
import { ChevronDown } from 'lucide-react';


type Props = {
 submenu: ProductSubmenu
 label: string
};


export default function ProductDropDown({submenu, label}: Props) {

    const { products, viewAll} = submenu;

  return (
        <NavigationMenuContent className="min-w-[900px] p-8">
            <div className="flex justify-between align-stretch gap-6">
                <CardLink link={viewAll}/>
                <div className="w-4/5 max-w-[600px]">
                    <div className="flex items-center mb-5">
                        <p className="text-2xl font-extrabold">{label}</p>
                        <ChevronDown className="ml-1 h-6 w-6 text-gray-500" aria-hidden="true"/>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                    {products.map((product, index) => (
                        <ProductLink product={product} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    </NavigationMenuContent>
    )
}

