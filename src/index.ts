import express, { Application, json } from 'express';
import { config as configEnv } from 'dotenv';
import cors from 'cors';
import config from './config/index';
import { connectDB } from './config/db';
import routes from './routes/index';

configEnv();
if (!process.env.PORT) {
    process.exit(1);
}

connectDB();

const app: Application = express();

app.use(cors({credentials: true}));
app.use(json());
app.use("/api", routes);
app.listen(config.port, ()=> {
    console.log(`E_Commerce Server is running on => http://localhost:${config.port}`);
});