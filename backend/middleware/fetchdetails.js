// Middleware/fetch.js
import jwt from 'jsonwebtoken';

const jwtSecret = "ThisIsAnOfficial-TheCharFiesta-websiteBy-PVSSriHarshita";

const fetch = (req, res, next) => {
    // Get the user from the JWT token and add the user id to the request object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Invalid Auth Token" });
    }

    try {
        const data = jwt.verify(token, jwtSecret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Invalid Auth Token" });
    }
};

export default fetch;
