/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import {CardLink} from '../components/CardLink';
import {IconLink} from '../components/IconLink';
import { ResourceSubmenu } from '.';
import { ChevronDown } from 'lucide-react';

type Props = {
 submenu: ResourceSubmenu
 label: string
};

export default function ResourceDropDown({submenu, label}: Props) {

    const {linkList, articles} = submenu;

    // console.log(submenu)
  return (
        <NavigationMenuContent className="min-w-[900px] p-8">
            <div className="flex justify-between gap-6">
                <div className="w-1/3 max-w-[510px]">
                    <div className="flex items-center mb-5">
                        <p className="text-2xl font-extrabold">{label}</p>
                        <ChevronDown className="ml-1 h-6 w-6 text-gray-500" aria-hidden="true"/>
                    </div>
                    <div className="grid grid-cols-1 gap-x-2 gap-y-4">
                        {linkList.map((item, index) => (
                            <IconLink link={{url: item.url ?? (typeof item.page === 'object' && item.page.slug) ?? '/', title: item.title, icon: item.icon}} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="w-3/5 max-w-[510px]">
                <p className="text-base font-bold">{articles.heading}</p>
                </div>
            </div>
        </NavigationMenuContent>
    )
}

