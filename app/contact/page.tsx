"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";
import { contactInfo, socialMedia } from "@/data/contact";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage("Email berhasil dikirim!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage(data.error || "Gagal mengirim email!");
      }
    } catch (error) {
      setResponseMessage("Terjadi kesalahan!");
    }

    setLoading(false);
  };

  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <MessageSquare className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Kontak Kami
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Hubungi kami untuk informasi lebih lanjut.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama"
            required
          />
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <Input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subjek"
            required
          />
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Pesan"
            required
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </Button>

          {responseMessage && (
            <p className="text-center text-sm mt-2">{responseMessage}</p>
          )}
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">
                {contactInfo.email}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Telepon</p>
              <p className="text-sm text-muted-foreground">
                {contactInfo.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Alamat</p>
              <p className="text-sm text-muted-foreground">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p className="font-medium mb-3">Media Sosial</p>
          <div className="flex space-x-3">
            {socialMedia.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <p className="font-medium mb-3">Playlist Kami</p>
          <div className="w-full">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2wqxm2bf7AS4NpTBIO4DYn?utm_source=generator&theme=0"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}