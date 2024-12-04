import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

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
    console.error("Error in login:", error); // Debugging
    return res.status(500).json({ success: false, error: "Something went wrong. Please try again." });
  }
};
