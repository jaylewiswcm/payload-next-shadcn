/*
Render all blocks components from payload 
*/
'use client'
import React, { Fragment, useEffect } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import {CardLink} from '../components/CardLink';
import {IconLink} from '../components/IconLink';
import { GenericSubmenu } from '.';
import { ChevronDown } from 'lucide-react';
import { useNavContext } from '@/globals/context/navContext';

type Props = {
 submenu: GenericSubmenu
 label: string
};

export default function GenericDropDown({submenu, label}: Props) {

    const { link, linkList} = submenu;
    const { activeMenu, setNavWidth, navWidth } = useNavContext();
        
    useEffect(() => {
        if(activeMenu == label) { setNavWidth('900px') }
    },[activeMenu])

  return (
        <NavigationMenuContent className={`min-w-[${navWidth}}] p-8`}>
            <div className="flex justify-between gap-6">
                <CardLink link={link}/>
                <div className="w-3/5 max-w-[510px]">
                    <div className="flex items-center mb-5">
                        <p className="text-2xl font-extrabold">{label}</p>
                        <ChevronDown className="ml-1 h-6 w-6 text-gray-500" aria-hidden="true"/>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                        {linkList.map((item, index) => (
                            <IconLink link={{url: item.url ?? (typeof item.page === 'object' && item.page.slug) ?? '/', title: item.title, icon: item.icon}} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </NavigationMenuContent>
    )
}

