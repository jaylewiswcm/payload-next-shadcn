/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import {CardLink} from '../components/CardLink';
import {IconLink} from '../components/IconLink';
import ProductDropDown from './Product';
import GenericDropDown from './Generic';

import type { Header } from '@/payload-types'
import ContactDropDown from './Contact';
import ResourceDropDown from './Resources';

type SubmenuBlock = NonNullable<NonNullable<Header['items']>[number]['submenu']>[number]

export type ProductSubmenu = Extract<SubmenuBlock, { blockType: 'productSubmenu' }>
export type GenericSubmenu = Extract<SubmenuBlock, { blockType: 'genericSubmenu' }>
export type ContactSubnmenu = Extract<SubmenuBlock, { blockType: 'contactSubmenu' }>
export type ResourceSubmenu = Extract<SubmenuBlock, { blockType: 'resourceSubmenu' }>

type Props = {
 submenu: SubmenuBlock
 label:string
};


export default function Submenu({submenu, label}: Props) {

    switch(submenu.blockType) {
        case "productSubmenu": 
        return(<ProductDropDown submenu={submenu} label={label}/>)
        break;
        case "genericSubmenu": 
        return(<GenericDropDown submenu={submenu} label={label}/>)
        break;
        case "contactSubmenu": 
        return(<ContactDropDown submenu={submenu} label={label}/>)
        break;
        case "resourceSubmenu": 
        return(<ResourceDropDown submenu={submenu} label={label}/>)
        break;
        default:
            return null;
    }
}

