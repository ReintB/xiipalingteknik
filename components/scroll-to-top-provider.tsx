"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, type ReactNode, Suspense } from "react";

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
    <>
      <Suspense fallback={null}>
        <ScrollToTopInner />
      </Suspense>
      {children}
    </>
  );
}
