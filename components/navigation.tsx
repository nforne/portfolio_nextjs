"use client"

import { Logo } from "@/components/logo"
import { useNavigation } from "@/components/providers"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Navigation() {
  const { scrollToView, activeView } = useNavigation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Projects", index: 2 },
    { label: "Services", index: 3 },
    { label: "Contact", index: 4 },
  ]

  const handleNavClick = (index: number) => {
    // Re-enable horizontal scrolling when nav items are clicked
    const container = document.querySelector(".snap-x")
    if (container) {
      container.classList.remove("overflow-x-hidden")
    }
    scrollToView(index)
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-b-black dark:border-b-white bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />

        {/* Mobile Menu */}
        <div className="md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[280px]">
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.index)}
                    className={cn(
                      "text-left px-2 py-1 text-sm font-medium transition-colors hover:text-primary rounded-md",
                      activeView === item.index ? "bg-muted text-primary font-semibold" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="ml-auto hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.index)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeView === item.index ? "text-primary font-semibold" : "text-muted-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

