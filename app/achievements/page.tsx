import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Trophy } from "lucide-react";
import { allAchievements } from "@/data/achievements";
import { ImageViewer } from "@/components/image-viewer";

export default function AchievementsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Prestasi
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Berbagai prestasi yang telah diraih oleh siswa-siswi kelas
          XIIPALINGTEKNIK.
        </p>
      </div>

      <Tabs defaultValue="academic" className="w-full mx-auto">
        <TabsContent value="academic">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allAchievements.map((achievement) => (
              <Card key={achievement.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <ImageViewer
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    width={600}
                    height={400}
                    className="aspect-video"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {achievement.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{achievement.student}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
