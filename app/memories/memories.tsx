"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import GiscusComments from "@/components/giscus-comments";

export default function () {
  const studentMemories = [
    {
      id: 1,
      name: "Siswa 1",
      avatar: "/placeholder.svg?",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 2,
      name: "Siswa 2",
      avatar: "/placeholder.svg?",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 3,
      name: "Siswa 3",
      avatar: "/placeholder.svg?",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 4,
      name: "Siswa 4",
      avatar: "/placeholder.svg?",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 5,
      name: "Siswa 5",
      avatar: "/placeholder.svg?",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 6,
      name: "Siswa 6",
      avatar: "/placeholder.svg?",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
  ];

  const teacherMemories = [
    {
      id: 1,
      name: "Pak Sebastianus Sulistyanto, S.Pd.",
      avatar: "/placeholder.svg?",
      role: "Wali Kelas",
      message:
        "Kalian hebat, kalian sangat-sangat mantap! Kalian sudah mempunyai bekal dari mulai kelas X, kelas XI, kalian semua hebat, Mantap!",
    },
    {
      id: 2,
      name: "Pak Nicolas Dwiatmoko, S.T",
      avatar: "/placeholder.svg?",
      role: "Guru Informatika",
      message: "Semoga sukses mau dimana pun kalian kuliah.",
    },
    {
      id: 3,
      name: "Pak Suprianus Gulo, S.Fil.",
      avatar: "/placeholder.svg?",
      role: "Guru Pendidikan Agama Katolik",
      message:
        "Tetap semangat, kompak, kamu satu sama lain harus bahagia dalam perjalanan menuju perguruan tinggi.",
    },
    {
      id: 4,
      name: "Pak Asep Wawan Setiawan, S.Pd.",
      avatar: "/placeholder.svg?",
      role: "Guru Sejarah",
      message:
        "Selamat berkarir! Semangat untuk US-nya yang menjadi puncak di SMA Santa Maria, semoga perjuangan SNBP dan SNBT semoga menjadi milik kalian masing-masing.",
    },
    {
      id: 5,
      name: "Pak Bartolomeus Delfian Wicaksono, S.Pd.",
      avatar: "/placeholder.svg?",
      role: "Guru Fisika",
      message:
        "Hebat! Selalu percaya diri, optimis untuk meraih masa depan, jangan pernah menyerah selama tenaga kita masih ada.",
    },
    {
      id: 6,
      name: "Pak Ganjar Anoegrah, S.Pd.",
      avatar: "/placeholder.svg?",
      role: "Guru Bahasa Sunda",
      message: "Selalu tersenyum!",
    },
  ];

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Quote className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Memori
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Kumpulan kesan dan pesan dari siswa dan guru yang telah menjadi bagian
          dari perjalanan kita.
        </p>
      </div>

      <Tabs defaultValue="students" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="students">Pesan Siswa</TabsTrigger>
          <TabsTrigger value="teachers">Pesan Guru</TabsTrigger>
        </TabsList>

        <TabsContent value="students">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentMemories.map((memory) => (
              <Card key={memory.id}>
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <Avatar className="self-center">
                    <AvatarImage
                      src={memory.avatar}
                      alt={memory.name}
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                    <AvatarFallback>
                      {memory.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <CardTitle>{memory.name}</CardTitle>
                    <CardDescription>{memory.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {memory.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teachers">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teacherMemories.map((memory) => (
              <Card key={memory.id}>
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <Avatar className="self-center">
                    <AvatarImage src={memory.avatar} alt={memory.name} />
                    <AvatarFallback>
                      {memory.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <CardTitle>{memory.name}</CardTitle>
                    <CardDescription>{memory.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {memory.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <GiscusComments className="max-w-4xl mx-auto" />
    </div>
  );
}
