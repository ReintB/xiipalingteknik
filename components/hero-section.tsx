"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageViewer } from "@/components/image-viewer";
import { heroImages } from "@/data/hero-images";
import MotionWrapper from "@/components/motion-wrapper";
import { Cog } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-start justify-center py-32 md:py-36 lg:py-40 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_700px] items-center py-12">
          <MotionWrapper
            animation="fadeInLeft"
            duration={0.7}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex flex-col justify-center space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="flex items-center justify-center lg:justify-start gap-3 text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                  XIIPALINGTEKNIK
                  <Cog className="w-10 h-10 sm:w-12 sm:h-12" />
                </h1>
                <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
                  Tempat untuk mengabadikan kenangan, prestasi, dan momen
                  berharga selama masa sekolah kita.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                <Link href="/gallery">
                  <Button size="lg" className="text-lg px-8 py-3 h-14">
                    Jelajahi Galeri
                  </Button>
                </Link>
                <Link href="/siswa">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-3 h-14"
                  >
                    Lihat Siswa
                  </Button>
                </Link>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeInRight" duration={0.7} delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
                <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
                  {heroImages.map((image) => (
                    <ImageViewer
                      key={image.id}
                      src={image.src || "/placeholder.svg"}
                      width={800}
                      height={600}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
