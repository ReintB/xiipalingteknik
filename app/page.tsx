"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import GalleryPreview from "@/components/gallery-preview";
import AchievementsSection from "@/components/achievements-section";
import TimelinePreview from "@/components/timeline-preview";
import PengurusPreview from "@/components/pengurus-preview";
import HeroVideo from "@/components/hero-video";
import { useState } from "react";
import GiscusComments from "@/components/giscus-comments";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"></header>
      <main>
        <HeroSection />
        <HeroVideo />
        <PengurusPreview />
        <TimelinePreview />
        <AchievementsSection />
        <GalleryPreview />
      </main>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open mobile menu</span>
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-3/4 bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <Link href="/" className="font-bold text-xl">
                XIIPALINGTEKNIK
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close mobile menu</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
