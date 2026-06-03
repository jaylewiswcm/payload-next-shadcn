/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import { GenericSubmenu } from '../dropdowns';


type CardLinkType = GenericSubmenu['link']

type Props = {
  link: GenericSubmenu['link']
}

export function CardLink({link}: Props) {
    
    const {image, title, description, url} = link;

    const src = typeof image === 'object' && image !== null ? image.url : undefined
    const alt = typeof image === 'object' && image !== null ? image.alt : undefined

  return (
       <NavigationMenuLink href={url} className="group flex flex-1  p-0 hover:bg-transparent" >
            <div className="flex w-full h-full min-w-0 flex-col overflow-clip rounded-lg border border-input bg-background transition-colors hover:bg-muted/90 dark:hover:bg-muted/70">
                <div className="relative w-full overflow-clip rounded-t-lg pb-[76.25%]">
                    <img
                        src={src}
                        alt={alt}
                        className="absolute inset-0 size-full object-cover object-center"
                    />
                </div>
                <div className="flex  flex-col p-4 xl:p-5">
                    <div className="mb-2 text-lg font-semibold text-foreground underline underline-offset-[5px] ">{title}</div>
                    <div className="text-sm font-normal text-muted-foreground">{description}</div>
                </div>
            </div>
        </NavigationMenuLink>
    )
}

