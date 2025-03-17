"use client"

import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"
import MotionWrapper from "@/components/motion-wrapper"
import CustomLink from "@/components/custom-link"

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Science Fest 2023",
      student: "Vino, Jerikho, Deo",
    },
    {
      title: "Juara 1 BMC x Startup",
      student: "Vino, Marcel, Deo, Reint, Yahu",
    },
    {
      title: "Juara 1 Lomba Film Pendek FLS2N 2024",
      student: "Ezra Violentina",
    },
    {
      title: "Juara 2 Lomba Paduan Suara KODIM III Bandung",
      student: "Marcell, Theo, Geo, Rosa, Ari, Kusha, Ivan",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="achievements">
      <div className="container px-4 md:px-6">
        <MotionWrapper animation="fadeInUp">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Prestasi Kelas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Berbagai prestasi yang telah diraih oleh siswa-siswi kelas kita.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {achievements.map((achievement, index) => (
            <MotionWrapper key={index} animation="fadeInUp" delay={index * 0.15} duration={0.5}>
              <div className="flex items-start space-x-4 rounded-lg border p-6 bg-background">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.student}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fadeInUp" delay={0.6}>
          <div className="flex justify-center">
            <CustomLink href="/achievements">
              <Button>Lihat Semua Prestasi</Button>
            </CustomLink>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}