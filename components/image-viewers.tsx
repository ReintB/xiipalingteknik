"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageViewersProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  [key: string]: any;
}

export function ImageViewers({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: ImageViewersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={400}
          height={400}
          className="object-cover w-full h-full object-top"
        />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative w-full max-h-[80vh] flex items-center justify-center">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh]"
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
