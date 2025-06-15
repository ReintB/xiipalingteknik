"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageViewer } from "@/components/image-viewer";
import { heroImages } from "@/data/hero-images";
import MotionWrapper from "@/components/motion-wrapper";
import { Cog, Wrench, Pickaxe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-starts py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <MotionWrapper
            animation="fadeInLeft"
            duration={0.7}
            className="self-center"
          >
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  XIIPALINGTEKNIK
                  <Cog className="w-8 h-8" />
                  <Wrench className="w-8 h-8" />
                  <Pickaxe className="w-8 h-8" />
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Tempat untuk mengabadikan kenangan, prestasi, dan momen
                  berharga selama masa sekolah kita.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/gallery">
                  <Button>Jelajahi Galeri</Button>
                </Link>
                <Link href="/siswa">
                  <Button variant="outline">Lihat Siswa</Button>
                </Link>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeInRight" duration={0.7} delay={0.2}>
            <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center lg:max-w-none">
              <div className="aspect-video overflow-hidden rounded-xl">
                {heroImages.map((image) => (
                  <ImageViewer
                    key={image.id}
                    src={image.src || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt={image.alt}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
