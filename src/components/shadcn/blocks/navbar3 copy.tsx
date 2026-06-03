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
import { NavCardItem, NavIconItem, Page } from "@/payload-types";
import GenericDropDown from "@/components/custom/navigation/dropdowns/generic";
import ProductDropDown from "@/components/custom/navigation/dropdowns/Product";

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
  items: {
      label: string;
      hasDropdown?: boolean;
      linkType?: "internal" | "custom";
      page?: number | Page;
      url?: string | null;
      newTab?: boolean | null;
      dropdownLayout?: ("cards" | "icons" | "mixed") | null;
      dropdownItems?: (NavCardItem | NavIconItem)[] | null;
      id?: string | null;
  }[]
}

const Navbar3 = ({ className, items }: Navbar3Props) => {
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

  console.log('Nav Items: ', items);
  return (
 <section
      className={cn(
        "sticky top-0 z-110 w-full bg-background py-4 z-50",
        className,
      )}
    >
      <div className="container max-w-screen-xl px-6 mx-auto">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-1/2 [&>div:last-child]:-translate-x-1/2">
          <div className="relative z-110 flex w-full items-center justify-between gap-12 bg-background">
            {/* Logo */}
            <div>
              {(!open || !submenu) && (
                <>
                  <Logo url="https://shadcnblocks.com">
                    <LogoImageDesktop
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.svg"
                      className="h-7 dark:invert"
                      alt="Shadcn UI Navbar"
                    />
                    <LogoImageMobile
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg"
                      className="h-7 dark:invert"
                      alt="Shadcn UI Navbar"
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

            <NavigationMenuList className="hidden lg:flex relative z-110 ">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[900px] box-border p-0!">
                  <div className="box-border flex justify-between gap-5 px-5 py-4">
                    <NavigationMenuLink
                      href="#"
                      className="group w-1/3 p-0 hover:bg-transparent"
                    >
                      <div className="overflow-clip rounded-lg border border-input bg-background transition-colors hover:bg-muted/90 dark:hover:bg-muted/70">
                        <div>
                          <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                            alt="Placeholder image"
                            className="aspect-video object-cover object-center"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-1.5 text-base font-medium text-foreground">
                            Platform Overview
                          </div>
                          <div className="text-sm font-normal text-muted-foreground">
                            Discover how our platform transforms your workflow.
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <div className="max-w-[760px] min-w-0 flex-1">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-2">
                        {solutions.map((solution, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={solution.href}
                            className="group block rounded-md px-3 py-2.5 transition-colors hover:bg-muted/90 dark:hover:bg-muted/70"
                          >
                            <div className="">
                              <solution.icon className="size-[18px] text-foreground" />
                            </div>
                            <div className="mb-1 text-base font-medium text-foreground">
                              {solution.title}
                            </div>
                            <div className="text-sm font-normal text-muted-foreground">
                              {solution.description}
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Chairs</NavigationMenuTrigger>
                <ProductDropDown useCases={useCases} />
                {/* <NavigationMenuContent className="min-w-[900px] box-border p-0!">
                  <div className="box-border flex justify-between gap-5 px-5 py-4">
                    <NavigationMenuLink
                      href="#"
                      className="group w-1/3 p-0 hover:bg-transparent"
                    >
                      <div className="overflow-clip rounded-lg border border-input bg-background transition-colors hover:bg-muted/90 dark:hover:bg-muted/70">
                        <div>
                          <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                            alt="Placeholder image"
                            className="aspect-video object-cover object-center"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-1.5 text-base font-medium text-foreground">
                            Platform Overview
                          </div>
                          <div className="text-sm font-normal text-muted-foreground">
                            Discover how our platform transforms your workflow.
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <div className="max-w-[760px] min-w-0 flex-1">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-2">
                        {solutionsChairs.map((solution, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={solution.href}
                            className="group block rounded-md px-3 py-2.5 transition-colors hover:bg-muted/90 dark:hover:bg-muted/70"
                          >
                            <div className="">
                              <solution.icon className="size-[18px] text-foreground" />
                            </div>
                            <div className="mb-1 text-base font-medium text-foreground">
                              {solution.title}
                            </div>
                            <div className="text-sm font-normal text-muted-foreground">
                              {solution.description}
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <GenericDropDown useCases={useCases}/>
                {/* <NavigationMenuContent className="min-w-[900px] p-5">
                  <div className="flex justify-between gap-5">
                    <NavigationMenuLink
                      href="#"
                      className="group flex-1 self-start p-0 hover:bg-transparent"
                    >
                      <div className="flex w-full min-w-0 flex-col overflow-clip rounded-lg border border-input bg-background transition-colors hover:bg-muted/90 dark:hover:bg-muted/70">
                        <div className="relative w-full overflow-clip rounded-t-lg pb-[56.25%]">
                          <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                            alt="Placeholder image"
                            className="absolute inset-0 size-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-col p-4 xl:p-5">
                          <div className="mb-2 text-lg font-semibold text-foreground">
                            Call to action for user persona
                          </div>
                          <div className="text-sm font-normal text-muted-foreground">
                            Tailored solutions designed specifically for your
                            team's unique needs.
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                    <div className="w-1/2 max-w-[510px]">
                      <div className="grid grid-cols-2 gap-1">
                        {useCases.map((useCase, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={useCase.href}
                            className="group flex flex-row items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-muted/90 dark:hover:bg-muted/70"
                          >
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted p-1.5 transition-colors group-hover:bg-muted-foreground/20 dark:group-hover:bg-muted-foreground/25">
                              <useCase.icon className="size-3.5 text-foreground" />
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {useCase.title}
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
      
                  </div>
                </NavigationMenuContent> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[900px] p-5">
                  <div className="flex justify-between gap-5">
                    <div className="w-1/3 max-w-[404px]">
                      <div className="mb-3 text-xs font-semibold tracking-wide text-foreground uppercase">
                        Documentation
                      </div>
                      <div className="mb-4 text-sm font-normal text-muted-foreground">
                        Call to action for developers
                      </div>
                      <div className="space-y-1">
                        {documentationLinks.map((documentationLink, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={documentationLink.href}
                            className="group flex flex-row items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-muted/90 focus:text-accent-foreground dark:hover:bg-muted/70"
                          >
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted p-1.5 transition-colors group-hover:bg-muted-foreground/20 dark:group-hover:bg-muted-foreground/25">
                              <ArrowUpRight className="size-3.5 text-foreground" />
                            </span>
                            <div className="text-sm font-medium text-foreground">
                              {documentationLink.title}
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="max-w-[716px] flex-1 space-y-4">
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-row items-center overflow-clip rounded-lg border border-input bg-background p-0 hover:bg-transparent"
                      >
                        <div className="flex-1 p-4 xl:p-5">
                          <div className="mb-1.5 text-base font-medium text-foreground">
                            Showcase link
                          </div>
                          <div className="text-sm font-normal text-muted-foreground">
                            Explore real-world implementations and success
                            stories from our community.
                          </div>
                        </div>
                        <div className="h-[140px] max-w-[240px] shrink-0">
                          <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                            alt="Placeholder image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-row items-center overflow-clip rounded-lg border border-input bg-background p-0 hover:bg-transparent"
                      >
                        <div className="flex-1 p-4 xl:p-5">
                          <div className="mb-1.5 text-base font-medium text-foreground">
                            Another showcase link
                          </div>
                          <div className="text-sm font-normal text-muted-foreground">
                            Learn best practices and advanced techniques from
                            expert developers.
                          </div>
                        </div>
                        <div className="h-[140px] max-w-[240px] shrink-0">
                          <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                            alt="Placeholder image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[900px] p-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-1 flex-col">
                      <div className="mb-4 text-xs font-semibold tracking-wide text-foreground uppercase">
                        Resources
                      </div>
                      <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                        {resources.map((resource, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={resource.href}
                            className="group flex h-full flex-col overflow-clip rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="aspect-video w-full overflow-hidden border-b border-border/60">
                              <img
                                src={resource.image}
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="p-4">
                              <div className="mb-1 text-base font-medium text-foreground group-hover:text-accent-foreground">
                                {resource.title}
                              </div>
                              <div className="text-sm font-normal text-muted-foreground group-hover:text-accent-foreground/90">
                                {resource.description}
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <div className="mb-4 text-xs font-semibold tracking-wide text-foreground uppercase">
                        Customers
                      </div>
                      <NavigationMenuLink
                        href="#"
                        className="mb-4 flex flex-row overflow-clip rounded-lg border border-input bg-background p-0 hover:bg-transparent"
                      >
                        <div className="flex-1 p-4 xl:p-5">
                          <div className="mb-1.5 text-base font-medium text-foreground">
                            Customers
                          </div>
                          <div className="text-sm font-normal text-muted-foreground">
                            See how leading companies leverage our platform to
                            drive innovation.
                          </div>
                        </div>
                        <div className="w-1/3 max-w-[130px] shrink-0">
                          <img
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                            alt="Placeholder image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-row items-center gap-3 rounded-lg bg-secondary/30 p-2.5 hover:bg-secondary/80 focus:bg-secondary/80"
                      >
                        <Badge variant="secondary">NEW</Badge>
                        <span className="text-sm text-ellipsis text-secondary-foreground">
                          Introducing our latest feature: enhanced analytics
                          dashboard
                        </span>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            <div className="hidden items-center gap-2 lg:flex">
              <Button variant="ghost">Login</Button>
              <Button variant="default">Sign Up</Button>
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
      </div>
    </section>
  );
};

export { Navbar3 };
