"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import { classXII } from "@/data/pengurus"
import { ImageViewers } from "@/components/image-viewers"
import MotionWrapper from "@/components/motion-wrapper"
import CustomLink from "@/components/custom-link"

export default function PengurusPreview() {
  const waliKelas = classXII.find((m) => m.position === "Wali Kelas")
  const ketuaKelas = classXII.find((m) => m.position === "Ketua Kelas")
  const wakilKetua = classXII.find((m) => m.position === "Wakil Ketua Kelas")

  const previewMembers = [ketuaKelas, waliKelas, wakilKetua].filter(Boolean)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="pengurus">
      <div className="container px-4 md:px-6">
        <MotionWrapper animation="fadeInUp">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pengurus Kelas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Struktur organisasi kelas yang membantu kegiatan belajar mengajar berjalan dengan baik.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {previewMembers.map((member, index) => (
            <MotionWrapper key={index} animation="fadeInUp" delay={index * 0.2} duration={0.6}>
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <ImageViewers
                    src={member?.photo || "/placeholder.svg"}
                    alt={member?.name || "Placeholder"}
                    width={400}
                    height={400}
                    className="aspect-square object-cover object-top"
                  />
                </div>
                <CardHeader className="p-4">
                  {member && (
                    <>
                      <CardTitle>{member.position}</CardTitle>
                      <CardDescription>{member.name}</CardDescription>
                    </>
                  )}
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  {member && <p className="text-sm text-muted-foreground">{member.description}</p>}
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fadeInUp" delay={0.6}>
          <div className="flex justify-center">
            <CustomLink href="/pengurus">
              <Button>Lihat Semua Pengurus</Button>
            </CustomLink>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}