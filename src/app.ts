
import * as path from 'path';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import AppRouter from "~/routers/app.router";
import RomanizerRouter from "~/routers/romanizer.router";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', AppRouter);
app.use('/', RomanizerRouter);

export default app;