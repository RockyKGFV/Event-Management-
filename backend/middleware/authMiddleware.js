const jwt = require('jsonwebtoken');
const config = require('../config');

exports.authenticateUser = (req, res, next) => {
    // Get token from request headers
    const token = req.header('x-auth-token');

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, config.jwtSecret);

        // Add user from payload to request object
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};