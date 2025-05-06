"use client"

import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import CustomLink from "@/components/custom-link"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
  }

  const navItems = [
    { name: "Beranda", path: "/" },
    {
      name: "Tentang Kami",
      dropdown: [
        { name: "Pengurus", path: "/pengurus" },
        { name: "Siswa", path: "/siswa" },
      ]
    },
    {
      name: "Kegiatan",
      dropdown: [
        { name: "Timeline", path: "/timeline" },
        { name: "Kegiatan", path: "/activities" },
        { name: "Prestasi", path: "/achievements" },
      ]
    },
    {
      name: "Galeri & Memori",
      dropdown: [
        { name: "Galeri", path: "/gallery" },
        { name: "Memori", path: "/memories" },
      ]
    },
    { name: "Kontak", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const isDropdownActive = (item: any) => {
    if (!item.dropdown) return false
    return item.dropdown.some((dropdownItem: any) => pathname.startsWith(dropdownItem.path))
  }

  const mobileMenuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open mobile menu</span>
            </Button>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={backdropVariants}
                >
                  <motion.div
                    className="fixed inset-y-0 left-0 w-3/4 bg-background p-6 shadow-lg"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileMenuVariants}
                  >
                    <div className="flex items-center justify-between">
                      <Link href="/">
                        <button
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                            setOpen(false)
                          }}
                          className="font-bold text-xl cursor-pointer"
                        >
                          <motion.span whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            XIIPALINGTEKNIK
                          </motion.span>
                        </button>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close mobile menu</span>
                      </Button>
                    </div>
                    <nav className="mt-6 flex flex-col gap-4">
                      {navItems.map((item, i) => (
                        <motion.div
                          key={item.path || item.name}
                          className="flex flex-col gap-2"
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          variants={navItemVariants}
                        >
                          {item.dropdown ? (
                            <>
                              <div className={`text-sm font-medium ${isDropdownActive(item) ? "text-primary font-bold" : ""}`}>
                                {item.name}
                              </div>
                              <div className="pl-4 flex flex-col gap-3 border-l border-border">
                                {item.dropdown.map((dropdownItem) => (
                                  <CustomLink
                                    key={dropdownItem.path}
                                    href={dropdownItem.path}
                                    className={`text-sm ${isActive(dropdownItem.path) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground transition-colors"}`}
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
                              className={`text-sm font-medium ${isActive(item.path) ? "text-primary font-bold" : ""}`}
                              onClick={() => setOpen(false)}
                            >
                              {item.name}
                            </CustomLink>
                          )}
                        </motion.div>
                      ))}
                    </nav>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Logo */}
          <Link href="/">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.span className="font-bold text-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                XIIPALINGTEKNIK
              </motion.span>
            </button>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <nav className="hidden md:flex gap-6 mr-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path || item.name}
                className="flex items-center h-16 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                {item.dropdown ? (
                  <>
                    <div className="flex items-center h-full">
                      <motion.span
                        className={`text-sm font-medium hover:text-primary flex items-center gap-1 cursor-pointer ${isDropdownActive(item) ? "text-primary font-bold" : ""}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                      </motion.span>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-popover rounded-md border shadow-md p-1 overflow-hidden">
                        {item.dropdown.map((dropdownItem, index) => (
                          <React.Fragment key={dropdownItem.path}>
                            <div className="w-full cursor-pointer">
                              <CustomLink
                                href={dropdownItem.path}
                                className={`block py-2.5 px-2 rounded hover:bg-accent transition-colors ${isActive(dropdownItem.path) ? "font-bold" : ""}`}
                              >
                                <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                  {dropdownItem.name}
                                </motion.span>
                              </CustomLink>
                            </div>
                            {index < item.dropdown.length - 1 && <div className="h-px bg-border mx-2 my-1" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <CustomLink
                    href={item.path}
                    className={`text-sm font-medium hover:text-primary ${isActive(item.path) ? "text-primary font-bold" : ""}`}
                  >
                    <motion.span whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      {item.name}
                    </motion.span>
                  </CustomLink>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}