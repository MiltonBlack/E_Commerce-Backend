// DB 
export const DB_URI = process.env.MONGO_URI;
export const SECRET_KEY = process.env.SECRET_KEY;

const defaultConfig = {
    port: process.env.PORT || 7000,
    db: DB_URI
}

export default defaultConfig;