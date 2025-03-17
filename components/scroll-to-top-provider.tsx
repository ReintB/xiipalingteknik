"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { createContext, useContext, useEffect, type ReactNode, useState, Suspense } from "react"

const ScrollToTopContext = createContext(null)

export function ScrollToTopProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <ScrollToTopInner>{children}</ScrollToTopInner>
    </Suspense>
  )
}

function ScrollToTopInner({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
      return
    }
    window.scrollTo({ top: 0 })
  }, [pathname, searchParams, isFirstRender])

  return <ScrollToTopContext.Provider value={null}>{children}</ScrollToTopContext.Provider>
}

export function useScrollToTop() {
  const context = useContext(ScrollToTopContext)
  if (context === undefined) {
    throw new Error("useScrollToTop must be used within a ScrollToTopProvider")
  }
  return context
}