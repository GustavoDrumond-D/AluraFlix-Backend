import express from 'express';
import videosController from '../controllers/videosController.js';

const router = express.Router();

router.use('/videos', videosController.listarVideos);

export default router;