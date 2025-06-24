"use client";

import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomLink from "@/components/custom-link";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setAccordionOpen(null);
  }, [pathname]);

  // Close menu if click outside (mobile)
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
        setAccordionOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const navItems = [
    { name: "Beranda", path: "/" },
    {
      name: "Tentang Kami",
      dropdown: [
        { name: "Pengurus", path: "/pengurus" },
        { name: "Siswa", path: "/siswa" },
      ],
    },
    {
      name: "Kegiatan",
      dropdown: [
        { name: "Timeline", path: "/timeline" },
        { name: "Kegiatan", path: "/activities" },
        { name: "Prestasi", path: "/achievements" },
      ],
    },
    {
      name: "Galeri & Memori",
      dropdown: [
        { name: "Galeri", path: "/gallery" },
        { name: "Memori", path: "/memories" },
      ],
    },
    { name: "Kontak", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const isDropdownActive = (item: any) => {
    if (!item.dropdown) return false;
    return item.dropdown.some((dropdownItem: any) =>
      pathname.startsWith(dropdownItem.path)
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between relative">
        {/* Mobile Layout */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Hamburger menu (mobile only) */}
          <Button
            variant="ghost"
            size="icon"
            className="mr-1"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          {/* Logo center */}
          <Link
            href="/"
            className="font-bold text-lg flex-1 text-center truncate"
          >
            XIIPALINGTEKNIK
          </Link>
          {/* Theme toggle right */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-1"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Logo left */}
          <Link href="/" className="font-bold text-xl flex-shrink-0">
            XIIPALINGTEKNIK
          </Link>
          {/* Menu dan theme toggle kanan */}
          <div className="flex items-center gap-2">
            <nav className="flex gap-6">
              {navItems.map((item, i) => (
                <div
                  key={item.path || item.name}
                  className="flex items-center h-16 relative group"
                >
                  {item.dropdown ? (
                    <>
                      <span
                        className={`text-sm font-medium hover:text-primary flex items-center gap-1 cursor-pointer ${
                          isDropdownActive(item) ? "text-primary font-bold" : ""
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                      </span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-popover rounded-md border shadow-md p-1 overflow-hidden">
                          {item.dropdown.map((dropdownItem, index) => (
                            <React.Fragment key={dropdownItem.path}>
                              <div className="w-full cursor-pointer">
                                <CustomLink
                                  href={dropdownItem.path}
                                  className={`block py-2.5 px-2 rounded hover:bg-accent transition-colors ${
                                    isActive(dropdownItem.path)
                                      ? "font-bold"
                                      : ""
                                  }`}
                                >
                                  {dropdownItem.name}
                                </CustomLink>
                              </div>
                              {index < item.dropdown.length - 1 && (
                                <div className="h-px bg-border mx-2 my-1" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <CustomLink
                      href={item.path}
                      className={`text-sm font-medium hover:text-primary ${
                        isActive(item.path) ? "text-primary font-bold" : ""
                      }`}
                    >
                      {item.name}
                    </CustomLink>
                  )}
                </div>
              ))}
            </nav>
            {/* Theme toggle right */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-full w-full bg-background shadow-lg rounded-b-xl py-4 px-4 flex flex-col gap-2 md:hidden z-50"
            >
              {navItems.map((item, i) => (
                <div key={item.path || item.name} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center justify-between w-full text-base font-medium py-2 px-2 rounded-lg transition-colors ${
                          accordionOpen === item.name
                            ? "text-primary font-bold"
                            : "hover:bg-accent/40"
                        }`}
                        onClick={() =>
                          setAccordionOpen(
                            accordionOpen === item.name ? null : item.name
                          )
                        }
                        aria-expanded={accordionOpen === item.name}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-5 w-5 ml-1 transition-transform ${
                            accordionOpen === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
                          accordionOpen === item.name
                            ? "max-h-40 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                        style={{
                          pointerEvents:
                            accordionOpen === item.name ? "auto" : "none",
                        }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <CustomLink
                            key={dropdownItem.path}
                            href={dropdownItem.path}
                            className={`text-base py-2 px-2 rounded-lg transition-colors ${
                              isActive(dropdownItem.path)
                                ? "text-primary font-bold bg-accent/30"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent/20"
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {dropdownItem.name}
                          </CustomLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <CustomLink
                      href={item.path}
                      className={`text-base font-medium py-2 px-2 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? "text-primary font-bold bg-accent/30"
                          : "hover:bg-accent/40"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </CustomLink>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
