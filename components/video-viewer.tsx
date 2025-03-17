"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface VideoViewerProps {
  thumbnail: string;
  title: string;
  videoSrc: string;
  className?: string;
  [key: string]: any;
}

export function VideoViewer({ thumbnail, title, videoSrc, className, ...props }: VideoViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`cursor-pointer relative group ${className}`} onClick={() => setIsOpen(true)} {...props}>
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative w-full aspect-video">
            {videoSrc ? (
              <video src={videoSrc} controls autoPlay className="w-full h-full" />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-black">
                <div className="text-center text-white p-4">
                  <p className="text-xl font-bold mb-2">{title}</p>
                  <p className="text-sm opacity-70">Video tidak tersedia</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}