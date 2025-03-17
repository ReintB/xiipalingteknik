import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Semua field harus diisi!" }), { status: 400 });
    }

    console.log("Data yang diterima:", { name, email, subject, message });
    console.log("SMTP Config:", {
      server: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
    });

    if (!process.env.EMAIL_SERVER || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return new Response(JSON.stringify({ error: "Konfigurasi email tidak lengkap!" }), { status: 500 });
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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "xiipalingtekniks@gmail.com",
      replyTo: email,
      subject: `Pesan dari ${name}: ${subject}`,
      text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
    };

    console.log("Mengirim email...");
    await transporter.sendMail(mailOptions);
    console.log("Email berhasil dikirim!");

    return new Response(JSON.stringify({ message: "Email berhasil dikirim!" }), { status: 200 });
  } catch (error) {
    console.error("Error mengirim email:", error);
    return new Response(JSON.stringify({ error: "Gagal mengirim email!" }), { status: 500 });
  }
}