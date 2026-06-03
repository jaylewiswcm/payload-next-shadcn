/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import Icon from '@/components/icons';
import { GenericSubmenu } from '../dropdowns';

import { isIconName } from '@/components/icons/registry'


type IconLinkType = NonNullable<GenericSubmenu['linkList']>[number]

type Props = {
 link: IconLinkType
};


export function IconLink({link}: Props) {
    
    const {title, url, page, icon} = link;
    
    console.log('link: ', link)

  return (
    <NavigationMenuLink href={url} className="group flex flex-row items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-muted/90 dark:hover:bg-muted/70">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted p-1.5 transition-colors group-hover:bg-muted-foreground/20 dark:group-hover:bg-muted-foreground/25">
            {isIconName(icon) && ( <Icon name={icon} className="size-6 text-foreground" /> )}
        </div>
        <div className="text-base font-semibold  text-foreground">
            {title}
        </div>
    </NavigationMenuLink>
    )
}

