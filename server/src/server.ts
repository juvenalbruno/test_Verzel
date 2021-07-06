import express, { NextFunction, Request, Response } from 'express';
import { router } from './router';

import 'reflect-metadata';
import './database/connect';

const PORT = 3333;
const HOST = '0.0.0.0'

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error)
        return res.status(400).json({ error: err.message });
    
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
});

app.listen(PORT, HOST, () => console.log(`>>> Server is running in http://${HOST}:${PORT}`))