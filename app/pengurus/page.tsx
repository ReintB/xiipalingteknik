"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users } from "lucide-react";
import { classXI, classXII } from "@/data/pengurus";
import { ImageViewers } from "@/components/image-viewers";
import MotionWrapper from "@/components/motion-wrapper";

export default function PengurusPage() {
  interface Member {
    position: string;
    name: string;
    photo?: string;
    description?: string;
  }

  const organizeMembers = (members: Member[]) => {
    const waliKelas = members.find((m: Member) => m.position === "Wali Kelas");
    const ketuaKelas = members.find(
      (m: Member) => m.position === "Ketua Kelas"
    );
    const wakilKetua = members.find(
      (m: Member) => m.position === "Wakil Ketua Kelas"
    );

    const sekretaris1 = members.find(
      (m: Member) => m.position === "Sekretaris 1"
    );
    const sekretaris2 = members.find(
      (m: Member) => m.position === "Sekretaris 2"
    );
    const bendahara1 = members.find(
      (m: Member) => m.position === "Bendahara 1"
    );
    const bendahara2 = members.find(
      (m: Member) => m.position === "Bendahara 2"
    );

    const sieRohani = members.find((m: Member) => m.position === "Sie Rohani");
    const sieKebersihan = members.find(
      (m: Member) => m.position === "Sie Kebersihan"
    );
    const sieOlahraga = members.find(
      (m: Member) => m.position === "Sie Olahraga"
    );
    const humas = members.find((m: Member) => m.position === "Humas");

    return {
      row1: [ketuaKelas, waliKelas, wakilKetua].filter(Boolean),
      row2: [sekretaris1, sekretaris2, bendahara1, bendahara2].filter(Boolean),
      row3: [sieRohani, sieKebersihan, sieOlahraga, humas].filter(Boolean),
    };
  };

  const organizedXI = organizeMembers(classXI);
  const organizedXII = organizeMembers(classXII);

  return (
    <div className="container py-12">
      <MotionWrapper animation="fadeInDown">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pengurus Kelas
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Struktur organisasi kelas XI-4 dan XII-4 lengkap dengan foto dan
            jabatan.
          </p>
        </div>
      </MotionWrapper>

      <Tabs defaultValue="xii" className="w-full max-w-6xl mx-auto">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="xi">Kelas XI-4</TabsTrigger>
          <TabsTrigger value="xii">Kelas XII-4</TabsTrigger>
        </TabsList>

        <TabsContent value="xi">
          {/* Row 1: Ketua, Wali Kelas, Wakil */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {organizedXI.row1.map(
              (member, index) =>
                member && (
                  <MotionWrapper
                    key={index}
                    animation="fadeInUp"
                    delay={index * 0.2}
                  >
                    <Card
                      className={`overflow-hidden ${
                        index === 1 ? "md:col-span-1" : ""
                      }`}
                    >
                      <div className="aspect-square relative">
                        <ImageViewers
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="aspect-square object-cover object-top"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{member.position}</CardTitle>
                        <CardDescription>{member.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                )
            )}
          </div>

          {/* Row 2: Sekretaris 1, Sekretaris 2, Bendahara 1, Bendahara 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {organizedXI.row2.map(
              (member, index) =>
                member && (
                  <MotionWrapper
                    key={index}
                    animation="fadeInUp"
                    delay={0.3 + index * 0.2}
                  >
                    <Card className="overflow-hidden">
                      <div className="aspect-square relative">
                        <ImageViewers
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="aspect-square"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{member.position}</CardTitle>
                        <CardDescription>{member.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                )
            )}
          </div>

          {/* Row 3: Sie Rohani, Sie Kebersihan, Sie Olahraga, Humas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {organizedXI.row3.map(
              (member, index) =>
                member && (
                  <MotionWrapper
                    key={index}
                    animation="fadeInUp"
                    delay={0.7 + index * 0.2}
                  >
                    <Card className="overflow-hidden">
                      <div className="aspect-square relative">
                        <ImageViewers
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="aspect-square"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{member.position}</CardTitle>
                        <CardDescription>{member.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                )
            )}
          </div>
        </TabsContent>

        <TabsContent value="xii">
          {/* Row 1: Ketua, Wali Kelas, Wakil */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {organizedXII.row1.map(
              (member, index) =>
                member && (
                  <MotionWrapper
                    key={index}
                    animation="fadeInUp"
                    delay={index * 0.2}
                  >
                    <Card
                      className={`overflow-hidden ${
                        index === 1 ? "md:col-span-1" : ""
                      }`}
                    >
                      <div className="aspect-square relative">
                        <ImageViewers
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="aspect-square"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{member.position}</CardTitle>
                        <CardDescription>{member.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                )
            )}
          </div>

          {/* Row 2: Sekretaris 1, Sekretaris 2, Bendahara 1, Bendahara 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {organizedXII.row2.map(
              (member, index) =>
                member && (
                  <MotionWrapper
                    key={index}
                    animation="fadeInUp"
                    delay={0.3 + index * 0.2}
                  >
                    <Card className="overflow-hidden">
                      <div className="aspect-square relative">
                        <ImageViewers
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="aspect-square"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{member.position}</CardTitle>
                        <CardDescription>{member.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                )
            )}
          </div>

          {/* Row 3: Sie Rohani, Sie Kebersihan, Sie Olahraga, Humas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {organizedXII.row3.map(
              (member, index) =>
                member && (
                  <MotionWrapper
                    key={index}
                    animation="fadeInUp"
                    delay={0.7 + index * 0.2}
                  >
                    <Card className="overflow-hidden">
                      <div className="aspect-square relative">
                        <ImageViewers
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="aspect-square"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle>{member.position}</CardTitle>
                        <CardDescription>{member.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                )
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}