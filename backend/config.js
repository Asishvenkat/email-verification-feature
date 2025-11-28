// Config file for environment variables
module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'supersecret',
  jwtExpiry: '30m', // 30 minutes
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  emailFrom: process.env.EMAIL_FROM || process.env.SMTP_USER,
};
