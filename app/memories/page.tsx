import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function MemoriesPage() {
  const studentMemories = [
    {
      id: 1,
      name: "Lorem ipsum 1",
      avatar: "/siswa/22.JPG?height=40&width=40&text=AR",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 2,
      name: "Lorem ipsum 2",
      avatar: "/siswa/22.JPG?height=40&width=40&text=SN",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 3,
      name: "Lorem ipsum 3",
      avatar: "/siswa/22.JPG?height=40&width=40&text=BS",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 4,
      name: "Lorem ipsum 4",
      avatar: "/siswa/22.JPG?height=40&width=40&text=DP",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 5,
      name: "Lorem ipsum 5",
      avatar: "/siswa/22.JPG?height=40&width=40&text=RH",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 6,
      name: "Lorem ipsum 6",
      avatar: "/siswa/22.JPG?height=40&width=40&text=DS",
      role: "Siswa",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
  ]

  const teacherMemories = [
    {
      id: 1,
      name: "Pak Sebastianus Sulistyanto, S.Pd.",
      avatar: "/placeholder.svg?height=40&width=40&text=PH",
      role: "Wali Kelas",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 2,
      name: "Bu Murnijati, M.Pd.",
      avatar: "/placeholder.svg?height=40&width=40&text=BS",
      role: "Guru Bahasa Inggris Lanjut",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 3,
      name: "Pak Suprianus Gulo, S.Fil.",
      avatar: "/placeholder.svg?height=40&width=40&text=PD",
      role: "Guru Pendidikan Agama Katolik",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
    {
      id: 4,
      name: "Pak Asep Wawan Setiawan, S.Pd.",
      avatar: "/placeholder.svg?height=40&width=40&text=BR",
      role: "Guru Sejarah",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare dignissim diam, nec mattis mauris. Phasellus sagittis efficitur sapien, eget volutpat leo tempus a. Donec finibus faucibus nisi, facilisis semper erat commodo vel. Curabitur rutrum ex sit amet pulvinar viverra. In tempus mattis lobortis.",
    },
  ]

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Quote className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Memori</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Kumpulan kesan dan pesan dari siswa dan guru yang telah menjadi bagian dari perjalanan kita.
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
                    <AvatarImage src={memory.avatar} alt={memory.name} className="w-full h-full object-cover object-top rounded-full" />
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
                  <p className="text-sm text-muted-foreground">{memory.message}</p>
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
                  <p className="text-sm text-muted-foreground">{memory.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}