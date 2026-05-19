"use server";

import { Resend } from "resend";

interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormInput) {
  // Server-side validation as a security best practice
  if (!formData.name?.trim()) {
    return { success: false, error: "Name is required." };
  }
  if (!formData.email?.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
    return { success: false, error: "A valid email address is required." };
  }
  if (!formData.subject?.trim()) {
    return { success: false, error: "Subject is required." };
  }
  if (!formData.message?.trim()) {
    return { success: false, error: "Message is required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not defined in the environment variables.",
    );
    return {
      success: false,
      error:
        "Resend API key is not configured in the environment. Please check your .env.local file.",
    };
  }

  const resend = new Resend(apiKey);
  const senderEmail = process.env.RESEND_USER;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

  if (!senderEmail) {
    console.error("Resend sender email is not defined in the environment.");
    return {
      success: false,
      error:
        "Email sender is not configured. Please check your environment variables.",
    };
  }

  if (!receiverEmail) {
    console.error("Contact receiver email is not defined in the environment.");
    return {
      success: false,
      error:
        "Email receiver is not configured. Please check your environment variables.",
    };
  }

  try {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Message</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #18181b; margin: 0; padding: 0; -webkit-font-smoothing: antialiased;">
          <div style="width: 100%; background-color: #f4f4f5; padding: 48px 16px; box-sizing: border-box; text-align: center; margin: 0;">
            
            <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px; padding: 40px; text-align: left; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); box-sizing: border-box;">
              
              <!-- Category Tag -->
              <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #7c3aed; margin-bottom: 8px; display: block;">
                Collaboration Inquiry
              </span>
              
              <!-- Email Title -->
              <h1 style="font-size: 22px; font-weight: 800; color: #09090b; margin: 0 0 28px 0; letter-spacing: -0.02em; line-height: 1.25;">
                New Portfolio Message
              </h1>
              
              <!-- From Section -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #71717a; margin-bottom: 6px;">
                  From
                </div>
                <div style="font-size: 15px; color: #18181b; line-height: 1.5;">
                  <strong style="color: #09090b; font-weight: 600;">${formData.name}</strong> 
                  <span style="color: #d4d4d8; margin: 0 6px;">&bull;</span> 
                  <a href="mailto:${formData.email}" style="color: #7c3aed; text-decoration: none; font-weight: 500;">${formData.email}</a>
                </div>
              </div>

              <!-- Subject Section -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #71717a; margin-bottom: 6px;">
                  Subject
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #09090b; line-height: 1.4;">
                  ${formData.subject}
                </div>
              </div>

              <!-- Message Section -->
              <div style="margin-bottom: 8px;">
                <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #7c3aed; margin-bottom: 8px;">
                  Message
                </div>
                <div style="background-color: #fafafa; border-left: 3px solid #7c3aed; border-radius: 0 8px 8px 0; padding: 16px 20px; font-size: 15px; line-height: 1.6; color: #27272a; white-space: pre-wrap; font-weight: 400; margin: 0;">${formData.message}</div>
              </div>

              <!-- Divider line -->
              <hr style="border: 0; border-top: 1px solid #f4f4f5; margin: 32px 0 20px 0;" />

              <!-- Footer Section -->
              <div style="font-size: 12px; color: #71717a; line-height: 1.5;">
                Sent via Portfolio Contact Form &bull; 
                <a href="mailto:${formData.email}" style="color: #7c3aed; text-decoration: none; font-weight: 600;">Reply directly to sender</a>
              </div>
              
            </div>
            
          </div>
        </body>
      </html>
    `;



    const result = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      subject: `[Portfolio Contact] ${formData.subject}`,
      replyTo: formData.email,
      html: htmlContent,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return {
        success: false,
        error: result.error.message || "Failed to send email via Resend.",
      };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Unexpected email sending error:", error);
    return {
      success: false,
      error: error.message || "An unexpected error occurred. Please try again.",
    };
  }
}
