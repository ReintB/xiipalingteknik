"use client"

import { Button } from "@/components/ui/button"
import { ImageViewer } from "@/components/image-viewer"
import MotionWrapper from "@/components/motion-wrapper"
import CustomLink from "@/components/custom-link"

export default function GalleryPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="gallery">
      <div className="container px-4 md:px-6">
        <MotionWrapper animation="fadeInUp">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Galeri Foto & Video</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kumpulan momen berharga yang diabadikan dalam foto dan video.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <MotionWrapper key={item} animation="zoomIn" delay={item * 0.1} duration={0.5}>
              <div className="group relative overflow-hidden rounded-lg">
                <ImageViewer
                  src={`/placeholder.svg?height=400&width=600&text=Foto ${item}`}
                  width={600}
                  height={400}
                  alt={`Foto kegiatan ${item}`}
                  className="aspect-video"
                />
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fadeInUp" delay={0.6}>
          <div className="flex justify-center">
            <CustomLink href="/gallery">
              <Button>Lihat Semua Galeri</Button>
            </CustomLink>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}