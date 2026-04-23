import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, message, name } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"My website🚀" ${email}`,
      to: process.env.EMAIL_USER,
      subject: "Hello Mr. Moussa",
      html: `
        <div style="color: cyan; padding: 20px; font-family: Arial;">
          <h2 style="margin: 10px 0;">I'm ${name}</h2>
          <hr />
          <p>${message}</p>

          <br />
          <small style="color: gray;">
            Sent from your websit Senter Email ${email}
          </small>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}