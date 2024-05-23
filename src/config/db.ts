export const db = {
    url: process.env.MONGO_URL || 'url',
    user: process.env.MONGO_USER || 'user',
    password: process.env.MONGO_PASSWORD || 'password',
    database: process.env.MONGO_DB_NAME || 'name',
}