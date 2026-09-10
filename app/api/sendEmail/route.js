import nodemailer from "nodemailer";

const json = (body, status) => new Response(JSON.stringify(body), { status });

export async function POST(req) {
  try {
    const { name, email, subject, message, website } = await req.json();

    // Honeypot: field "website" tersembunyi dari manusia, jadi hanya bot yang mengisinya.
    // Balas sukses palsu supaya bot tidak mencoba lagi.
    if (website) {
      return json({ message: "Email berhasil dikirim!" }, 200);
    }

    if (![name, email, subject, message].every((v) => typeof v === "string" && v.trim())) {
      return json({ error: "Semua field harus diisi!" }, 400);
    }

    if (!/^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/.test(email)) {
      return json({ error: "Format email tidak valid!" }, 400);
    }

    if (name.length > 100 || email.length > 200 || subject.length > 200 || message.length > 5000) {
      return json({ error: "Isian terlalu panjang!" }, 400);
    }

    if (!process.env.EMAIL_SERVER || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return json({ error: "Konfigurasi email tidak lengkap!" }, 500);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "xiipalingtekniks@gmail.com",
      replyTo: email,
      subject: `Pesan dari ${name}: ${subject}`.replace(/[\r\n]+/g, " "),
      text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
    });

    return json({ message: "Email berhasil dikirim!" }, 200);
  } catch (error) {
    console.error("Error mengirim email:", error);
    return json({ error: "Gagal mengirim email!" }, 500);
  }
}
