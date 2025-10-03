import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const POST = async (req: Request) => {
  const { SMTP_EMAIL, SMTP_PASSWORD, MY_EMAIL } = process.env;

  try {
    const body = await req.json();
    
    // Validate required fields
    const { name, email, phone, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const emailSubject = `Portfolio Contact: ${subject}`;
    
    const emailText = `
New contact form submission:

Name: ${name}
Email: ${email}${phone ? `\nPhone: ${phone}` : ''}
Subject: ${subject}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
    `.trim();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Portfolio Contact
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #007bff;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #333;">Message</h3>
          <p style="line-height: 1.6; white-space: pre-line;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 5px; text-align: center;">
          <small style="color: #6c757d;">
            Submitted on ${new Date().toLocaleString('en-US', { 
              timeZone: 'Asia/Kolkata',
              dateStyle: 'full',
              timeStyle: 'short'
            })} IST
          </small>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `Portfolio Contact <${SMTP_EMAIL}>`,
      to: MY_EMAIL?.split(","),
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully! I'll get back to you soon." 
    });
  } catch (err) {
    console.error('Email sending error:', err);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
};

export { POST };
