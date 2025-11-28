const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
  host: config.smtpHost,
  port: config.smtpPort,
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass,
  },
});

async function sendVerificationEmail(to, verificationUrl) {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
      <h2 style="color: #4f46e5;">Verify Your Email</h2>
      <p>Hi,</p>
      <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
      
      <a href="${verificationUrl}" 
         style="display: inline-block; background-color: #4f46e5; color: #fff; padding: 12px 20px; 
         text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: bold;">
        Verify Email
      </a>

      <p>If the button doesn't work, copy and paste the link below into your browser:</p>

      <p style="word-break: break-all;">
        ${verificationUrl}
      </p>

      <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd" />
      <p style="font-size: 12px; color: #777;">
        If you didn’t request this email, you can safely ignore it.
      </p>
    </div>
  `;
  const info = await transporter.sendMail({
    from: `Verify <${config.emailFrom}>`,
    to,
    subject: 'Verify your email',
    html: htmlContent
  });
  return info;
}

module.exports = { sendVerificationEmail };
