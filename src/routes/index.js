import express from 'express';
import router from './videosRoutes.js';

const routerIndex = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send({ message: "API AluraFlix" });
    });

    app.use(express.json(), router);
}

export default routerIndex;