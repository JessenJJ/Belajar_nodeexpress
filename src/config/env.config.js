require('dotenv').config()
module.exports = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_NAME: process.env.DB_NAME || null,
    DB_USER: process.env.DB_USER || "root",
    DB_PASS: process.env.DB_PASS || null,
    DB_PORT: process.env.DB_PORT || 3306,
    JWT_SECRET: process.env.JWT_SECRET || "",
    
}