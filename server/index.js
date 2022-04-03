import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import todoRoutes from "./routes/todos.js";

const app = express();


app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(bodyParser.json({ limit: "1mb", extended: true }));
app.use(cors());

app.use('/api/todos', todoRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((err) => {
        console.log(err.message);
    });