"use client";

import {
  ArrowUpRight,
  BarChart,
  Bitcoin,
  Building,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Factory,
  Film,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  Leaf,
  Lock,
  Menu,
  ShoppingBag,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  Logo,
  LogoImageDesktop,
  LogoImageMobile,
} from "@/components/shadcn/blocks/logo";
import { Badge } from "@/components/shadcn/ui/badge";
import { Button } from "@/components/shadcn/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Submenu from "@/components/navigation/dropdowns";
import { navigationMenuTriggerStyle } from '@/components/shadcn/ui/navigation-menu'

import { Header } from '@/payload-types'
import { NavProvider } from "@/globals/context/navContext";

const solutions = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions built for modern businesses.",
    href: "#",
    icon: Cloud,
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with automated compliance.",
    href: "#",
    icon: Lock,
  },
  {
    title: "Identity Management",
    description: "Advanced authentication and access control systems.",
    href: "#",
    icon: Fingerprint,
  }
];
const solutionsChairs = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions built for modern businesses.",
    href: "#",
    icon: Cloud,
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with automated compliance.",
    href: "#",
    icon: Lock,
  },
  {
    title: "Identity Management",
    description: "Advanced authentication and access control systems.",
    href: "#",
    icon: Fingerprint,
  },
  {
    title: "Identity Management",
    description: "Advanced authentication and access control systems.",
    href: "#",
    icon: Fingerprint,
  },
  {
    title: "Identity Management",
    description: "Advanced authentication and access control systems.",
    href: "#",
    icon: Fingerprint,
  }
];

const useCases = [
  {
    title: "Banking",
    href: "#",
    icon: Building2,
  },
  {
    title: "Healthcare",
    href: "#",
    icon: HeartPulse,
  },
  {
    title: "Technology",
    href: "#",
    icon: Cpu,
  },
  {
    title: "Education",
    href: "#",
    icon: GraduationCap,
  },
  {
    title: "Agriculture",
    href: "#",
    icon: Leaf,
  },
  {
    title: "BaaS",
    href: "#",
    icon: Building,
  },
  {
    title: "Entertainment",
    href: "#",
    icon: Film,
  },
  {
    title: "SaaS",
    href: "#",
    icon: BarChart,
  },
  {
    title: "Crypto",
    href: "#",
    icon: Bitcoin,
  },
  {
    title: "Manufacturing",
    href: "#",
    icon: Factory,
  },
  {
    title: "Retail",
    href: "#",
    icon: ShoppingBag,
  },
  {
    title: "Logistics",
    href: "#",
    icon: Truck,
  },
];

const documentationLinks = [
  {
    title: "API Reference",
    href: "#",
  },
  {
    title: "SDK Documentation",
    href: "#",
  },
  {
    title: "Integration Guides",
    href: "#",
  },
  {
    title: "Code Examples",
    href: "#",
  },
];

const resources = [
  {
    title: "Blog",
    description: "Latest insights, tutorials, and industry best practices.",
    href: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    title: "News",
    description: "Product updates, announcements, and company news.",
    href: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
];

interface Navbar3Props {
  className?: string;
  header: Header
}

const Navbar3 = ({ className, header }: Navbar3Props) => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    "platform" | "usecases" | "developers" | "resources" | null
  >(null);

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const docEl = document.documentElement;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = docEl.style.overflow;
    body.style.overflow = "hidden";
    docEl.style.overflow = "hidden";
    return () => {
      body.style.overflow = prevBodyOverflow;
      docEl.style.overflow = prevHtmlOverflow;
    };
  }, [open]);

  
  const {items} = header;

  // console.log('Header: ', header);
  // console.log('Nav Items: ', items);
  const logo = typeof header.logo == 'object' ? header.logo  : null;
  return (
 <section
      className={cn(
        "sticky top-0 z-110 w-full bg-background py-4 z-50 border-b border-solid border-gray-200",
        className,
      )}
    >
      <div className="container  px-6 mx-auto">
        <NavProvider >
        {/* <NavigationMenu className="min-w-full [&>div:last-child]:left-1/2 [&>div:last-child]:-translate-x-1/2" value="Resources"> */}
        <NavigationMenu className="min-w-full [&>div:last-child]:left-1/2 [&>div:last-child]:-translate-x-1/2" > 
          <div className="relative z-110 flex w-full items-center justify-between gap-12 bg-background">
            {/* Logo */}
            <div>
              {(!open || !submenu) && (
                <>
                  <Logo url="/">
                    <LogoImageDesktop
                      src={logo.url}
                      className="h-9 dark:invert"
                      alt={logo.alt}
                    />
                    <LogoImageMobile
                      src={logo.url}
                      className="h-7 dark:invert"
                      alt={logo.alt}
                    />
                  </Logo>
                </>
              )}
              {open && submenu && (
                <Button variant="outline" onClick={() => setSubmenu(null)}>
                  <ChevronLeft />
                  Back
                </Button>
              )}
            </div>

              <NavigationMenuList className="hidden lg:flex relative z-110">
              {items.map((item, index) => 
                <NavigationMenuItem key={index} value={item.label}>
                  {item.hasDropdown ? 
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    {item.submenu.map((submenu, index) => 
                      <Submenu submenu={submenu} label={item.label} key={index}/>
                    )}
                  </>
                  :
                  <NavigationMenuLink key={index} className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
                  }
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
            <div className="hidden flex flex-col gap-0 lg:flex border-l-2 pl-6 border-solid border-red-500">
              <p className="">For a free home demo</p>
              <p className="text-xl font-extrabold">Call 0800 043 2344</p>
              {/* <Button variant="ghost">Login</Button>
              <Button variant="default">Sign Up</Button> */}
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu (Root) */}
          {open && (
            <div className="fixed inset-0 top-[72px] z-100 flex h-[calc(100vh-72px)] w-full flex-col overflow-y-auto overscroll-y-contain border-t border-border bg-background lg:hidden">
              <div>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-border px-8 py-7 text-left"
                  onClick={() => setSubmenu("platform")}
                >
                  <span className="flex-1">Platform</span>
                  <span className="shrink-0">
                    <ChevronRight className="size-4" />
                  </span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-border px-8 py-7 text-left"
                  onClick={() => setSubmenu("usecases")}
                >
                  <span className="flex-1">Solutions</span>
                  <span className="shrink-0">
                    <ChevronRight className="size-4" />
                  </span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-border px-8 py-7 text-left"
                  onClick={() => setSubmenu("developers")}
                >
                  <span className="flex-1">Developers</span>
                  <span className="shrink-0">
                    <ChevronRight className="size-4" />
                  </span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center border-b border-border px-8 py-7 text-left"
                  onClick={() => setSubmenu("resources")}
                >
                  <span className="flex-1">Resources</span>
                  <span className="shrink-0">
                    <ChevronRight className="size-4" />
                  </span>
                </button>
              </div>
              <div className="mx-[2rem] mt-auto flex flex-col gap-4 py-12">
                <Button variant="outline" className="relative" size="lg">
                  Login
                </Button>
                <Button className="relative" size="lg">
                  Start now
                </Button>
              </div>
            </div>
          )}
          {/* Mobile Menu > Platform */}
          {open && submenu === "platform" && (
            <div className="fixed inset-0 top-[72px] z-100 flex h-[calc(100vh-72px)] w-full flex-col overflow-y-auto overscroll-y-contain border-t border-border bg-background lg:hidden">
              <a href="#" className="block space-y-6 px-8 py-8">
                <div className="w-full overflow-clip rounded-lg">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="Placeholder image"
                    className="aspect-2/1 h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="mb-2 text-base">Platform Overview</div>
                  <div className="text-sm font-normal text-muted-foreground">
                    Pellentesque nec odio id elit dapibus rutrum.
                  </div>
                </div>
              </a>
              <div className="px-8 py-3.5 text-xs tracking-widest text-muted-foreground uppercase">
                Solutions
              </div>
              <div className="border-t border-border pb-16">
                {solutions.map((solution, index) => (
                  <a
                    key={index}
                    href={solution.href}
                    className="group flex w-full items-start gap-x-4 border-b border-border px-8 py-7 text-left hover:bg-accent"
                  >
                    <div className="shrink-0">
                      <solution.icon className="size-6" />
                    </div>
                    <div>
                      <div className="mb-1.5 text-base">{solution.title}</div>
                      <div className="text-sm font-normal text-muted-foreground">
                        {solution.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          {/* Mobile Menu > Solutions */}
          {open && submenu === "usecases" && (
            <div className="fixed inset-0 top-[72px] z-100 flex h-[calc(100vh-72px)] w-full flex-col overflow-y-auto overscroll-y-contain bg-background lg:hidden">
              <div className="px-8 py-3.5 text-xs tracking-widest text-muted-foreground uppercase">
                Solutions
              </div>
              <div>
                {useCases.map((useCase, index) => (
                  <a
                    key={index}
                    href={useCase.href}
                    className="group flex w-full items-start gap-x-4 border-t border-border px-8 py-7 text-left hover:bg-accent"
                  >
                    <div className="shrink-0">
                      <useCase.icon className="size-6" />
                    </div>
                    <div className="text-base">{useCase.title}</div>
                  </a>
                ))}
              </div>
              <div className="bg-secondary/30 px-8 pt-8 pb-16">
                <div className="mb-7 text-xs tracking-widest text-muted-foreground uppercase">
                  For user persona
                </div>
                <a href="#" className="block space-y-6">
                  <div className="overflow-clip rounded-lg">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="Placeholder image"
                      className="aspect-2/1 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 text-base">
                      Call to action for user persona
                    </div>
                    <div className="text-sm font-normal text-muted-foreground">
                      Etiam ornare venenatis neque, sit amet suscipit diam
                      pulvinar a.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
          {/* Mobile Menu > Developers */}
          {open && submenu === "developers" && (
            <div className="fixed inset-0 top-[72px] z-100 flex h-[calc(100vh-72px)] w-full flex-col overflow-y-auto overscroll-y-contain border-t border-border bg-background lg:hidden">
              <a href="#" className="block space-y-6 px-8 py-8">
                <div className="w-full overflow-clip rounded-lg">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="Placeholder image"
                    className="aspect-2/1 h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="mb-2 text-base">Start with our API</div>
                  <div className="text-sm font-normal text-muted-foreground">
                    Comprehensive documentation and guides to help you integrate
                    quickly.
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block space-y-6 border-t border-border px-8 py-8"
              >
                <div className="w-full overflow-clip rounded-lg">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="Placeholder image"
                    className="aspect-2/1 h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="mb-2 text-base">Quick Start</div>
                  <div className="text-sm font-normal text-muted-foreground">
                    Get up and running in minutes with our step-by-step
                    tutorials and examples.
                  </div>
                </div>
              </a>
              <div className="px-8 py-3.5 text-xs tracking-widest text-muted-foreground uppercase">
                Documentation
              </div>
              <div className="-mx-2.5 space-y-2.5 px-8 pb-16">
                {documentationLinks.map((documentationLink, index) => (
                  <NavigationMenuLink
                    key={index}
                    href={documentationLink.href}
                    className="py-[18px]focus:text-accent-foreground group flex flex-row items-center gap-2.5 rounded-md px-2.5"
                  >
                    <div className="flex size-5 items-center justify-center rounded">
                      <ArrowUpRight className="size-3" />
                    </div>
                    <div className="text-sm">{documentationLink.title}</div>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          )}
          {/* Mobile Menu > Resources */}
          {open && submenu === "resources" && (
            <div className="fixed inset-0 top-[72px] z-100 flex h-[calc(100vh-72px)] w-full flex-col overflow-y-auto overscroll-y-contain bg-background lg:hidden">
              <div className="px-8 py-3.5 text-xs tracking-widest text-muted-foreground uppercase">
                Resources
              </div>
              <div>
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    className="group flex w-full items-start gap-x-4 border-t border-border px-8 py-7 text-left hover:bg-accent"
                  >
                    <div>
                      <div className="mb-1.5 text-base">{resource.title}</div>
                      <div className="text-sm font-normal text-muted-foreground">
                        {resource.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="px-8 pt-8 pb-16">
                <div className="mb-7 text-xs tracking-widest text-muted-foreground uppercase">
                  Customers
                </div>
                <a href="#" className="block space-y-6">
                  <div className="overflow-clip rounded-lg">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="Placeholder image"
                      className="aspect-2/1 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 text-base">Customers</div>
                    <div className="text-sm font-normal text-muted-foreground">
                      See how leading companies leverage our platform to drive
                      innovation.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </NavigationMenu>
        </NavProvider>
      </div>
    </section>
  );
};

export { Navbar3 };
