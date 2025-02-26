"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface NavigationContextType {
  scrollToView: (index: number) => void
  activeView: number
  setActiveView: (index: number) => void
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider")
  }
  return context
}

interface NavigationProviderProps {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [activeView, setActiveView] = useState(0)

  const scrollToView = useCallback((index: number) => {
    setActiveView(index)
    // Find the element and scroll to it
    const element = document.querySelector(`[data-view-index="${index}"]`)
    element?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    })
  }, [])

  return (
    <NavigationContext.Provider value={{ scrollToView, activeView, setActiveView }}>
      {children}
    </NavigationContext.Provider>
  )
}

