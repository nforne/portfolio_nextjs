"use client"

import { useState, useEffect } from "react"

export function Footer() {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      const scrollPosition = target.scrollTop + target.clientHeight
      const scrollHeight = target.scrollHeight
      setShowFooter(scrollPosition >= scrollHeight - 10)
    }

    // Add scroll event listeners to all scrollable containers
    const scrollableContainers = document.querySelectorAll(".scrollbar-none")
    scrollableContainers.forEach((container) => {
      container.addEventListener("scroll", handleScroll)
    })

    return () => {
      scrollableContainers.forEach((container) => {
        container.removeEventListener("scroll", handleScroll)
      })
    }
  }, [])

  return (
    <footer
      className={`border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-opacity duration-300 ${
        showFooter ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container flex items-center justify-between h-12 px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

