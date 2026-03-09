import { NextResponse } from "next/server";
import { transporter } from "../nodemailerConfig";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const mailMessage = await transporter.sendMail({
      from: `"Contato do portifólio" <${process.env.HOST_MAIL}>`,
      replyTo: email,
      to: process.env.HOST_MAIL,
      subject: "Novo contato do portifólio",
      html: `<h2>Novo contato recebido</h2>

        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>`,
    });

    if (mailMessage.accepted.length > 0) {
      await transporter.sendMail({
        from: `"Lucas Ribeiro" <${process.env.HOST_MAIL}>`,
        to: email,
        subject: "Recebemos sua mensagem!",
        html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;padding:40px;">
            
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <h1 style="color:#6b21a8;margin:0;font-size:24px;">
                  Mensagem recebida 📩
                </h1>
              </td>
            </tr>

            <tr>
              <td style="color:#333;font-size:16px;line-height:1.6;">
                <p>Olá <strong>${name}</strong>,</p>

                <p>
                  Obrigado por entrar em contato! Sua mensagem foi recebida com sucesso
                  e será analisada em breve.
                </p>

              </td>
            </tr>

            <tr>
              <td style="padding:20px 0;">
                <table width="100%" style="background:#f9f9f9;border-radius:6px;padding:20px;">
                  <tr>
                    <td style="color:#555;font-size:14px;">
                      <strong>Sua mensagem:</strong>
                      <p style="margin-top:10px;">${message}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="color:#333;font-size:16px;line-height:1.6;">
                <p>
                  Em breve entrarei em contato pelo e-mail <strong>${process.env.HOST_MAIL}</strong>.
                </p>

                <p>
                  Atenciosamente,<br>
                  <strong>Lucas Ribeiro</strong>
                </p>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding-top:30px;font-size:12px;color:#888;">
                <p>
                  Este e-mail foi enviado automaticamente após o envio de uma mensagem
                  no site.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false, error: e });
  }
}
