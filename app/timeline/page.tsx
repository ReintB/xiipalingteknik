import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, GraduationCap } from "lucide-react"
import { events } from "@/data/timeline"

export default function TimelinePage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Timeline</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">Perjalanan kelas kita dari awal hingga akhir.</p>
        <div className="mx-auto max-w-3xl py-12">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-border md:before:mx-auto md:before:translate-x-0">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${event.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"} shrink-0 md:order-1 md:mx-auto`}
              >
                <CalendarDays className="w-5 h-5" />
              </div>
              <Card
                className={`w-[calc(100%-4rem)] ${event.highlight ? "border-primary/50" : ""} md:w-[calc(50%-2.5rem)]`}
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <time
                      className={`text-sm font-semibold ${event.highlight ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {event.date}
                    </time>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Selesai.</h1>
      </div>
      </div>
    </div>
  )
}