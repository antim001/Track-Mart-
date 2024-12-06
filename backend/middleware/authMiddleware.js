import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const verifyUser = async (req, res, next) => {
    try {
        // Check if the Authorization header exists
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ success: false, error: 'Authorization header missing' });
        }

        // Extract the token
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, error: 'Token missing from header' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if (!decoded) {
            return res.status(403).json({ success: false, error: 'Invalid token' });
        }

        // Find the user in the database
        const user = await User.findById(decoded._id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in verifyUser middleware:', error.message);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
};

export default verifyUser;
