"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Users } from "lucide-react"
import { useState, useEffect } from "react"
import { students } from "@/data/siswa"
import { ImageViewers } from "@/components/image-viewers"

export default function SiswaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredStudents, setFilteredStudents] = useState(students)

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredStudents(students)
      return
    }

    const filtered = students.filter((student) => student.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredStudents(filtered)
  }, [searchQuery])

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Siswa</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Kenali lebih dekat teman-teman sekelas kita melalui profil, pesan, kesan, dan quotes mereka.
        </p>
      </div>

      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Cari siswa..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredStudents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Tidak ada siswa yang ditemukan dengan nama "{searchQuery}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative flex items-center justify-center w-full">
                <ImageViewers
                  src={student.photo || "/placeholder.svg"}
                  width={400}
                  height={400}
                  alt={student.name}
                  className="aspect-square object-cover object-top w-full"
                />
              </div>
              <div className="flex flex-col flex-1">
                <CardHeader className="p-4 pb-2">
                  <div className="min-h-[80px] flex flex-col justify-between">
                    <CardTitle className="text-lg line-clamp-2">{student.name}</CardTitle>
                    <CardDescription className="mt-2 text-xs">{student.ttl}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-1 flex flex-col">
                  <Tabs defaultValue="quote" className="flex-1 flex flex-col">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="quote">Quote</TabsTrigger>
                      <TabsTrigger value="instagram">Instagram</TabsTrigger>
                    </TabsList>
                    <div className="flex-1 flex flex-col">
                      <TabsContent value="quote" className="mt-3 flex-1">
                        <div className="bg-muted/30 p-3 rounded-md min-h-[100px] h-full">
                          <p className="text-sm italic text-muted-foreground line-clamp-5">{student.quote}</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="instagram" className="mt-3 flex-1">
                        <div className="bg-muted/30 p-3 rounded-md min-h-[100px] h-full">
                          <p className="text-sm text-muted-foreground">{student.instagram}</p>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}