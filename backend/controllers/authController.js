// authController.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Login Function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User does not exist" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    // Send success response
    return res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, role: user.role }
    });
  } catch (error) {
    console.error("Error in login:", error);
    return res.status(500).json({ success: false, error: "Something went wrong. Please try again." });
  }
};

// Verify Function
export const verify = (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
};
