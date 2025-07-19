import express from 'express';
import router from './routes';
import cors from 'cors';

function createApp() {

    const app = express();

    app.use(express.json());
    app.use("/api", router);

    // const corOptions = {
    //     origin: ["http://teste.com", "http://localhost:3000"],
    //     methods: "GET, POST, PUT, DELETE, PATCH"
    // }

    app.use(cors());

    return app;
}

export default createApp;

