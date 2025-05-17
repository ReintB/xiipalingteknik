"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Film, ImageIcon as ImageLucide } from "lucide-react"
import { photos, videos } from "@/data/gallery"
import { ImageViewer } from "@/components/image-viewer"
import { useRef, useEffect } from "react"

export default function GalleryPage() {
  // Create a ref to store all video elements
  const videoRefs = useRef<HTMLVideoElement[]>([])

  // Function to handle when a video starts playing
  const handlePlay = (currentVideo: HTMLVideoElement) => {
    // Pause all other videos and reset them to the beginning
    videoRefs.current.forEach((video) => {
      if (video !== currentVideo) {
        if (!video.paused) {
          video.pause()
        }
        // Reset video to the beginning (0 seconds)
        video.currentTime = 0
      }
    })
  }

  // Reset video refs when component mounts or videos change
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length)

    // Clean up function
    return () => {
      videoRefs.current = []
    }
  }, [videos.length])

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <ImageLucide className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galeri</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Kumpulan foto dan video kegiatan kelas.
        </p>
      </div>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="photos" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            <span>Foto</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Film className="h-4 w-4" />
            <span>Video</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg">
                <ImageViewer
                  src={photo.src || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={photo.title}
                  className="aspect-video"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {videos.map((video, index) => (
              <div key={video.id}>
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el
                  }}
                  src={video.src}
                  controls
                  preload="metadata"
                  onPlay={(e) => handlePlay(e.currentTarget)}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}