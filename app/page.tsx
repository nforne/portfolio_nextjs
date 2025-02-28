"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { useNavigation } from "@/components/providers"
import Home from "@/components/views/home"
import About from "@/components/views/about"
import Projects from "@/components/views/projects"
import Services from "@/components/views/services"
import Contact from "@/components/views/contact"

const views = [
  { id: "home", component: Home, label: "Home" },
  { id: "about", component: About, label: "About" },
  { id: "projects", component: Projects, label: "Projects" },
  { id: "services", component: Services, label: "Services" },
  { id: "contact", component: Contact, label: "Contact" },
]

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(true)
  const { scrollToView, activeView, setActiveView } = useNavigation()

  const handleScroll = () => {
    if (isScrolling || !containerRef.current || !isHorizontalScrolling) return

    const container = containerRef.current
    const scrollLeft = container.scrollLeft
    const viewWidth = container.offsetWidth
    const currentView = Math.round(scrollLeft / viewWidth)

    if (currentView !== activeView) {
      setActiveView(currentView)
    }
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isHorizontalScrolling) return
      if (e.deltaY === 0) return
      e.preventDefault()
      const direction = e.deltaY > 0 ? 1 : -1
      const newIndex = Math.max(0, Math.min(views.length - 1, activeView + direction))
      scrollToView(newIndex)
    },
    [activeView, scrollToView, isHorizontalScrolling],
  )

  const handleViewClick = useCallback(() => {
    setIsHorizontalScrolling(false)
  }, [])

  const handleNavigationClick = useCallback(
    (index: number) => {
      setIsHorizontalScrolling(true)
      scrollToView(index)
    },
    [scrollToView],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  return (
    <div className="fixed inset-0 overflow-hidden h-screen">
      <div className="h-full pt-[69px]">
        {/* Theme Toggle */}
        <div className="fixed left-6 top-20 z-50">
          <ThemeToggle />
        </div>

        <div
          ref={containerRef}
          className={cn(
            "flex h-full snap-x snap-mandatory overflow-x-auto scrollbar-none px-6",
            !isHorizontalScrolling && "overflow-x-hidden",
          )}
          onScroll={handleScroll}
        >
          {views.map((View, index) => (
            <motion.div
              key={View.id}
              data-view-index={index}
              className="flex h-full w-full flex-none snap-start items-center justify-center rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleViewClick}
            >
              <View.component />
            </motion.div>
          ))}
        </div>

        {/* View Indicators */}
        <div className="fixed right-6 top-20 space-y-2">
          {views.map((view, index) => (
            <motion.button
              key={view.id}
              className="group relative flex items-center"
              onClick={() => handleNavigationClick(index)}
              whileHover={{ scale: 1.2 }}
            >
              <span className="absolute right-8 rounded-md bg-background/80 px-2 py-1 text-sm opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100">
                {view.label}
              </span>
              <div
                className={cn(
                  "size-3 rounded-full border-[1.5px] border-black dark:border-white transition-all",
                  activeView === index ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
              />
            </motion.button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <AnimatePresence>
          {activeView > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="fixed left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg backdrop-blur-sm hover:bg-background border-[1.5px] border-black dark:border-white"
              onClick={() => handleNavigationClick(activeView - 1)}
            >
              <ChevronLeft className="size-6" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeView < views.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg backdrop-blur-sm hover:bg-background border-[1.5px] border-black dark:border-white"
              onClick={() => handleNavigationClick(activeView + 1)}
            >
              <ChevronRight className="size-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

