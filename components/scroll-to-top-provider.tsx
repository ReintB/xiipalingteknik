"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  Suspense,
} from "react";

const ScrollToTopContext = createContext(null);

function ScrollToTopInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    window.scrollTo({ top: 0 });
  }, [pathname, searchParams, isFirstRender]);

  return null;
}

export function ScrollToTopProvider({ children }: { children: ReactNode }) {
  return (
    <ScrollToTopContext.Provider value={null}>
      <Suspense fallback={null}>
        <ScrollToTopInner />
      </Suspense>
      {children}
    </ScrollToTopContext.Provider>
  );
}

export function useScrollToTop() {
  const context = useContext(ScrollToTopContext);

  if (context === undefined) {
    throw new Error("useScrollToTop must be used within a ScrollToTopProvider");
  }

  return context;
}