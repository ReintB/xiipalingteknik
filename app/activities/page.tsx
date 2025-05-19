"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { activities } from "@/data/activities";
import { ImageViewer } from "@/components/image-viewer";

export default function ActivitiesPage() {
  const categories = [
    "Semua",
    ...new Set(activities.map((activity) => activity.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredActivities =
    activeCategory === "Semua"
      ? activities
      : activities.filter((activity) => activity.category === activeCategory);

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Calendar className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Kegiatan
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Dokumentasi berbagai kegiatan yang telah dilakukan bersama.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-sm ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredActivities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Tidak ada kegiatan dalam kategori ini
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <ImageViewer
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  width={400}
                  height={400}
                  className="aspect-video"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    {activity.icon}
                    <span className="ml-1">{activity.category}</span>
                  </div>
                </div>
                <CardDescription>{activity.date}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}