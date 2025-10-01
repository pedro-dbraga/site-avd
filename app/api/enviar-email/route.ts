import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email,celular, mensagem } = await req.json();

  if (!email ||!celular || !mensagem) {
    return NextResponse.json('Campos obrigatórios faltando');
  }

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['natanmolina@aasp.org.br'],
      subject: 'Nova mensagem do site',
      text: `Email do cliente: ${email}\n\n${celular}Mensagem:\n${mensagem}`,
    });

    return NextResponse.json('Enviado com sucesso!');
  } catch (error) {
    console.error(error);
    return NextResponse.json('Erro ao enviar e-mail', {status: 500});
  }
}
