"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import MotionWrapper from "@/components/motion-wrapper";
import CustomLink from "@/components/custom-link";

export default function TimelinePreview() {
  const events = [
    {
      date: "17 Juli 2023",
      title: "Awal Tahun Ajaran Baru Kelas XI",
      description:
        "Memulai tahun ajaran baru dengan semangat dan harapan baru.",
    },
    {
      date: "19 Januari 2024",
      title: "Study Tour Bali-Jogja",
      description:
        "Mengikuti study tour ke Bali dan Jogja untuk menambah wawasan dan pengetahuan.",
    },
    {
      date: "15 Juli 2024",
      title: "Awal Tahun Ajaran Baru Kelas XII",
      description:
        "Memulai tahun ajaran baru dengan semangat dan harapan baru.",
    },
    {
      date: "10 Maret 2025",
      title: "Ujian Sekolah",
      description: "Mengikuti ujian sekolah untuk menyelesaikan tahun ajaran.",
    },
    {
      date: "15 Mei 2025",
      title: "Hari Kelulusan",
      description: "Merayakan kelulusan bersama teman-teman sekelas.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="timeline">
      <div className="container px-4 md:px-6">
        <MotionWrapper animation="fadeInUp">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Timeline Kelas
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Perjalanan kelas XIIPALINGTEKNIK dari awal hingga akhir.
              </p>
            </div>
          </div>
        </MotionWrapper>

        <div className="mx-auto max-w-3xl py-12">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-border md:before:mx-auto md:before:translate-x-0">
            {events.map((event, index) => (
              <MotionWrapper
                key={index}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={index * 0.2}
                duration={0.6}
              >
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shrink-0 md:order-1 md:mx-auto">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] rounded-lg border bg-background p-4 md:w-[calc(50%-2.5rem)]">
                    <div className="flex items-center space-x-2 mb-1">
                      <time className="text-sm font-semibold text-primary">
                        {event.date}
                      </time>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>

        <MotionWrapper animation="fadeInUp" delay={0.6}>
          <div className="flex justify-center">
            <CustomLink href="/timeline">
              <Button>Lihat Timeline Lebih Lengkap</Button>
            </CustomLink>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}