"use client"
import { Logo } from "@/components/logo"
import { useNavigation } from "@/components/providers"
import { cn } from "@/lib/utils"

export function Navigation() {
  const { scrollToView, activeView } = useNavigation()

  const navItems = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Projects", index: 2 },
    { label: "Services", index: 3 },
    { label: "Contact", index: 4 },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-b-black dark:border-b-white bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="ml-auto flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToView(item.index)}
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

