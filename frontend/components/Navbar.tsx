"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Hosting",
    description: "Deploy and manage your sites",
    items: [
      { name: "Web Hosting", href: "/hosting/web-hosting" },
      { name: "cPanel Hosting", href: "/hosting/cPanel-hosting" },
      { name: "Reseller Hosting", href: "/hosting/reseller-hosting" },
    ],
  },
  {
    name: "WordPress",
    description: "Powerful WordPress hosting",
    items: [
      { name: "WordPress hosting", href: "/hosting/wordpress-hosting" },
      { name: "Managed WordPress", href: "/hosting/wordpress-hosting/managed" },
    ],
  },
  {
    name: "VPS & Dedicated",
    description: "Personalised Hosting",
    items: [
      { name: "VPS Hosting", href: "/hosting/vps-hosting" },
      { name: "Managed VPS Hosting", href: "/hosting/vps-hosting/managed" },
      { name: "Dedicated Server", href: "/hosting/dedicated-servers" },
    ],
  },
  {
    name: "Domain",
    description: "Register Best Domains",
    items: [
      { name: "Domain", href: "/domains" },
      { name: "Business Email", href: "/business-email" },
    ],
  },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name))
  }

  return (
    <header>
      <nav>
        <div className="flex min-h-24 w-full flex-row flex-wrap items-center justify-between px-6 lg:justify-evenly">
          <div className="flex w-auto items-center lg:w-60">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center gap-[3px]"
            >
              <span className="-ml-0.9 text-lg font-bold">Host Humble</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex">
            <ul className="flex flex-row items-center gap-8 font-mono text-md">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.items ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 font-mono text-muted-foreground outline-none hover:text-accent-foreground">
                        {item.name}
                        <ChevronDown aria-hidden="true" className="size-3.5" />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="start" className="w-56">
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>
                            {item.description}
                          </DropdownMenuLabel>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuGroup>
                          {item.items.map((subItem) => (
                            <DropdownMenuItem
                              key={subItem.name}
                              render={<Link href={subItem.href} />}
                            >
                              {subItem.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-2 text-md lg:flex">
            <Button size="sm" className="hover:bg-black hover:text-white">
              <Link href="/">Your Account</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-none animate-border-glow bg-background"
            >
              <Link href="/">Ask AI</Link>
            </Button>
          </div>

          {/* Mobile: hamburger + mode toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              className="border-none animate-border-glow bg-background"
            >
              <Link href="/">Ask AI</Link>
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex size-9 items-center justify-center rounded-md text-muted-foreground hover:text-accent-foreground"
            >
              {mobileOpen ? (
                <X aria-hidden="true" className="size-6" />
              ) : (
                <Menu aria-hidden="true" className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        {mobileOpen && (
          <div className="w-full border-t px-6 py-4 lg:hidden">
            <ul className="flex flex-col gap-1 font-mono text-base">
              {menuItems.map((item) => (
                <li key={item.name} className="border-b py-2 last:border-b-0">
                  {item.items ? (
                    <div className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => toggleSubmenu(item.name)}
                        aria-expanded={openSubmenu === item.name}
                        className="flex w-full items-center justify-between py-1 text-left font-semibold text-muted-foreground hover:text-accent-foreground"
                      >
                        {item.name}
                        <ChevronDown
                          aria-hidden="true"
                          className={`size-4 transition-transform duration-200 ${
                            openSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openSubmenu === item.name && (
                        <ul className="flex flex-col gap-2 py-2 pl-3">
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-muted-foreground duration-150 hover:text-accent-foreground"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Link href="/">Your Account</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar