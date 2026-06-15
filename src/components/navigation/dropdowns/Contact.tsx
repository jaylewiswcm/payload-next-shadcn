/*
Render all blocks components from payload 
*/
'use client';
import React, { Fragment, useEffect } from 'react'
import { Page } from '@/payload-types'
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu'
import {CardLink} from '../components/CardLink';
import {IconLink} from '../components/IconLink';
import { ContactSubnmenu, ProductSubmenu } from '.';
import { ProductLink } from '../components/ProductLink';
import { ChevronDown } from 'lucide-react';
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import { useNavContext } from '@/globals/context/navContext';

type Props = {
 submenu: ContactSubnmenu
 label: string
};


export default function ContactDropDown({submenu, label}: Props) {

  const { pullOutLink, linkList, body} = submenu;
  
  const { activeMenu, setNavWidth, navWidth } = useNavContext();
          
  useEffect(() => {
    if(activeMenu == label) { setNavWidth('900px') }
  },[activeMenu])

  const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children })
    const classes: Record<string, string> = {
      h1: 'text-2xl font-bold',
      h2: 'text-2xl font-extrabold',
      h3: 'text-sm',
    }
    const Tag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    return <Tag className={classes[node.tag] ?? ''}>{children}</Tag>
  },
  autolink: ({ node, nodesToJSX }) => {
    const { url, newTab } = node.fields
    return (
        <a
            href={node.fields.url}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            className="!text-primary text-bold underline underline-offset-2 hover:!text-primary/80"  
        >
        {nodesToJSX({ nodes: node.children })}
        </a>
    )
    },
  paragraph: ({ node, nodesToJSX }) => (
    <p className="text-sm font-normal text-muted-foreground mt-2">
      {nodesToJSX({ nodes: node.children })}
    </p>
  ),
})

  return (
        <NavigationMenuContent className={`min-w-[${navWidth}] p-8`}>
            <div className="flex justify-between gap-6">
             
                <div className="grid grid-cols-1 gap-x-1 gap-y-1 h-fit">
                    <div className="flex items-center mb-5">
                        <p className="text-2xl font-extrabold">{label}</p>
                        <ChevronDown className="ml-1 h-6 w-6 text-gray-500" aria-hidden="true"/>
                    </div>
                    {linkList.map((item, index) => (
                        <IconLink link={{url: item.url ?? (typeof item.page === 'object' && item.page.slug) ?? '/', title: item.title, icon: item.icon}} key={index}/>
                    ))}
                </div>
                <CardLink link={pullOutLink}/>
                <div className="w-1/3 max-w-[510px] flex flex-col">
                <p className="text-base font-semibold mt-auto">{body.heading}</p>
                <div className='h-[1px] bg-gray-300 my-2'></div>
                <RichText data={body.content} converters={converters} />
                </div>
            </div>
    </NavigationMenuContent>
    )
}

