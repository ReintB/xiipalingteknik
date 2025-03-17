"use client"

import Link from "next/link"
import type { LinkProps } from "next/link"
import type { ReactNode } from "react"

interface CustomLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function CustomLink({ href, children, className = "", onClick, ...props }: CustomLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick()
    }

    window.scrollTo({ top: 0 })
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}