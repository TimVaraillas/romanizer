
import * as path from 'path';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from 'http';
import dotenv from "dotenv";

import AppRouter from "~/routers/app.router";
import RomanizerRouter from "~/routers/romanizer.router";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', AppRouter);
app.use('/', RomanizerRouter);

server.listen(port, () => console.log(`🚀 App listening on port ${port}`));