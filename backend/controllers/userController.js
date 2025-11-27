exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password required.' });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password.' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password.' });
    if (!user.isVerified) return res.status(403).json({ message: 'Please verify your email before logging in.' });
    res.json({ message: 'Login successful', name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { sendVerificationEmail } = require('../utils/email');


function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, { expiresIn: config.jwtExpiry });
}

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields required.' });

    
    if (password.length < 6)
      return res.status(400).json({ message: 'Password must be at least 6 characters.' });
    if (!/[0-9]/.test(password))
      return res.status(400).json({ message: 'Password must contain at least one number.' });
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return res.status(400).json({ message: 'Password must contain at least one special character.' });

    let user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ message: 'Email already registered.' });

    user = new User({ name, email, password });

    const token = generateToken(user);
    user.verificationToken = token;
    user.tokenExpiry = Date.now() + 30 * 60 * 1000; // 30 minutes
    await user.save();

    const link = `${config.frontendUrl}/verify?token=${token}`;

    
    sendVerificationEmail(email, link)
      .then(() => console.log("Verification email sent"))
      .catch(err => console.error("Email sending failed:", err));

    
    res.status(201).json({
      message: 'Signup successful. Please check your email to verify.'
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



exports.verify = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400).json({ message: 'Token required.' });
    let payload;
    try {
      payload = jwt.verify(token, config.jwtSecret);
    } catch (err) {
      return res.status(400).json({ message: 'Invalid or expired token.' });
    }
    console.log('Verifying token:', token);
    console.log('Payload:', payload);
    const user = await User.findOne({ _id: payload.id, verificationToken: token });
    console.log('User found for verification:', user);
    if (!user) {
      console.log('No user found with matching _id and verificationToken.');
      return res.status(400).json({ message: 'Invalid or already used token.' });
    }
    if (user.tokenExpiry < Date.now()) {
      console.log('Token expired:', user.tokenExpiry, 'Now:', Date.now());
      return res.status(400).json({ message: 'Token expired.' });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.tokenExpiry = undefined;
    user.resendCount = 0;
    user.lastResend = undefined;
    await user.save();
    console.log('User verified successfully:', user.email);
    res.json({ message: 'Email verified. You can now log in.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.resend = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found.' });
    if (user.isVerified) return res.status(400).json({ message: 'Already verified.' });
    
    const now = Date.now();
    if (user.lastResend && now - user.lastResend.getTime() < 60 * 60 * 1000) {
      if (user.resendCount >= 3) {
        return res.status(429).json({ message: 'Too many resends. Try again later.' });
      }
      user.resendCount += 1;
    } else {
      user.resendCount = 1;
      user.lastResend = now;
    }
    const token = generateToken(user);
    user.verificationToken = token;
    user.tokenExpiry = now + 30 * 60 * 1000;
    await user.save();
    const link = `${config.frontendUrl}/verify?token=${token}`;
    await sendVerificationEmail(email, link);
    res.json({ message: 'Verification email resent.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
