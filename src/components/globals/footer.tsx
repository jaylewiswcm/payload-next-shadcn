import { Separator } from '@/components/shadcn/ui/separator'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { fetchFooter } from '@/lib/payload/fetchGlobals'
import { Footer } from '@/payload-types'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { cn } from "@/lib/utils";
import MediaImage from '../ui/MediaImage'

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Marketing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" }, 
    ],
  },
];


export default async function FooterPage() {
  const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}`

  let data: Footer | null = null
  try {
    data = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  if (!data) {
    return <></>
  }

  const { logo, footerNavigation, copyrightNotice } = data

  return (
    <section className='section bg-slate-900'>
      <footer className="footer container">
              <div className="grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left">
                <div className="col-span-4 flex w-full flex-col gap-6 lg:col-span-2">
                  {/* Logo */}
                  <div className="flex items-center gap-2 lg:justify-start">
                    <Link href="/">
                      <MediaImage 
                        image={logo}
                        className=''
                      />
                    </Link>
                    {/* <h2 className="text-xl font-semibold">{logo.title}</h2> */}
                  </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="27" viewBox="0 0 46 27" fill="none">
                      <g clipPath="url(#clip0_25961_2239)">
                      <path d="M10.445 20.9034C16.3359 20.9034 20.8899 16.3354 20.8899 10.4584C20.8899 4.58137 16.3359 -0.000488281 10.445 -0.000488281C4.554 -0.000488281 0 4.56744 0 10.4445C0 16.3215 4.56793 20.8894 10.445 20.8894V20.9034Z" fill="#EF4444"/>
                      <path d="M0 10.4438H16.0992V26.543C7.21399 26.543 0 19.329 0 10.4438Z" fill="#EF4444"/>
                      <path d="M34.8862 20.9034C40.7772 20.9034 45.3312 16.3354 45.3312 10.4584C45.3312 4.58137 40.7772 -0.000488281 34.8862 -0.000488281C28.9953 -0.000488281 24.4413 4.56744 24.4413 10.4445C24.4413 16.3215 29.0092 20.8894 34.8862 20.8894V20.9034Z" fill="#EF4444"/>
                      <path d="M24.4413 10.4438H40.5405V26.543C31.6553 26.543 24.4413 19.329 24.4413 10.4438Z" fill="#EF4444"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_25961_2239">
                      <rect width="45.3451" height="26.5441" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  <p className="text-5xl font-extralight text-white">We help people unlock better, more enjoyable ways of living.</p>
                  {/* <ul className="flex items-center space-x-6">
                    <li className="font-medium duration-200 text-white hover:scale-110 hover:text-muted-foreground">
                      <a href="#">
                        <FaInstagram className="size-6" />
                      </a>
                    </li>
                    <li className="font-medium duration-200 text-white hover:scale-110 hover:text-muted-foreground">
                      <a href="#">
                        <FaFacebook className="size-6" />
                      </a>
                    </li>
                    <li className="font-medium duration-200 text-white hover:scale-110 hover:text-muted-foreground">
                      <a href="#">
                        <FaTwitter className="size-6" />
                      </a>
                    </li>
                    <li className="font-medium duration-200 text-white hover:scale-110 hover:text-muted-foreground">
                      <a href="#">
                        <FaLinkedin className="size-6" />
                      </a>
                    </li>
                  </ul> */}
                </div>
                 {footerNavigation.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="col-span-2 md:col-span-1">
                    <ul className="space-y-4 text-base text-white">
                      {section.links.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className="font-medium hover:opacity-70"
                        >
                          <a href={link.url}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                    
                <div className="col-span-4 md:col-span-2">
                  <h3 className="mb-5 font-bold text-lg text-white">Join our mailing list</h3>
                  <div className="grid gap-1.5">
                    <div className="flex w-full items-center space-x-2">
                      <Input type="email" placeholder="Email" />
                      <Button type="submit" className="border border-red-500 rounded-full bg-transparent">Subscribe</Button>
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-medium text-white">
                    By submitting, you agree to our
                    <a href="#" className="ml-1 text-white hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-20 flex flex-col justify-between gap-4 border-t border-slate-600 pt-8 text-sm font-medium text-white lg:flex-row lg:items-center lg:text-left">
                <p>
                  {copyrightNotice}
                </p>
                <div className="flex gap-4">
                  <Link href="/">
                  Terms and Conditions
                  </Link>
                  <Link href="/">
                  Privacy Policy
                  </Link>
                  <Link href="/">
                  Cookie Policy
                  </Link>
                  <Link href="/">
                  Finance Complaints Policy
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 pt-8 text-sm font-medium text-white lg:flex-row lg:items-center lg:text-left">
                <p>Muick Sandy Ltd is an appointed representative of Clearfc Ltd, which is authorised and regulated by the Financial Conduct Authority (FRN: 938464). Clearfc Ltd is a credit broker and not a lender. We offer finance on behalf of Snap Finance Limited. Credit subject to age and status. Muick Sandy Ltd offers both regulated and unregulated products. The interest-free plans which are repayable within 12 months and in no more than 12 instalments are not regulated by the Financial Conduct Authority. Unregulated plans are not covered by the Financial Ombudsman Service.</p>
              </div>
            </footer>
    </section>
  )
}
