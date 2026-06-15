/*
Render all blocks components from payload 
*/

'use client';
import React, { Fragment, useEffect, useState } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import {CardLink} from '../components/CardLink';
import {IconLink} from '../components/IconLink';
import { ProductSubmenu } from '.';
import { ProductLink } from '../components/ProductLink';
import { ChevronDown } from 'lucide-react';
import { useNavContext } from '@/globals/context/navContext';


type Props = {
 submenu: ProductSubmenu
 label: string
};


export default function ProductDropDown({submenu, label}: Props) {
    const { products, viewAll} = submenu;

    const { activeMenu, setNavWidth, navWidth } = useNavContext();
    
    useEffect(() => {
        if(activeMenu == label) {
            setNavWidth(products.length > 3 ? '1100px' : '900px');
        }
    },[activeMenu])
    
    // const minWidth = products.length > 3 ? '1100px' : '900px'
    const cols = products.length > 3 ? 'grid-cols-5' : 'grid-cols-3'
    
    
  return (
        <NavigationMenuContent className={`min-w-[${navWidth}] p-8`} >
            <div className="flex justify-between gap-6">
                <CardLink link={viewAll} className="min-w-[200px]"/>
                <div className="w-[100%]">
                    <div className="flex items-center mb-5">
                        <p className="text-2xl font-extrabold">{label}</p>
                        <ChevronDown className="ml-1 h-6 w-6 text-gray-500" aria-hidden="true"/>
                    </div>
                    <div className={`grid gap-1 ${cols}`}> 
                    {products.map((product, index) => (
                        <ProductLink product={product} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    </NavigationMenuContent>
    )
}

