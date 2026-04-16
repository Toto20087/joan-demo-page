import { NextRequest, NextResponse } from "next/server";

// TODO: Future payment integration point
// When integrating MercadoPago or Stripe, this endpoint can be extended to:
// 1. Create a quote/invoice record in the database
// 2. Generate a payment link
// 3. Return the payment URL alongside the requestId
//
// For now, it logs the form data and returns a requestId.
// To enable email sending, install Resend: npm install resend
// and add RESEND_API_KEY to your .env.local

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, phone, service, message } = data;

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        { success: false, error: "El mensaje debe tener al menos 20 caracteres" },
        { status: 400 }
      );
    }

    // Generate a request ID for future payment integration
    const requestId = `req_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

    // Log the submission (replace with email sending or DB save)
    console.log("Contact form submission:", {
      requestId,
      name,
      email,
      phone,
      service,
      message,
      quotable: true, // Flag for future payment integration
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email via Resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'RMA Estudio <noreply@rmaestudio.com.ar>',
    //   to: 'info@rmaestudio.com.ar',
    //   subject: `Nueva solicitud de presupuesto: ${service}`,
    //   html: `<p><strong>Nombre:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Teléfono:</strong> ${phone}</p>
    //          <p><strong>Servicio:</strong> ${service}</p>
    //          <p><strong>Mensaje:</strong> ${message}</p>`,
    // });

    return NextResponse.json({
      success: true,
      requestId,
      message: "Solicitud recibida correctamente",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
