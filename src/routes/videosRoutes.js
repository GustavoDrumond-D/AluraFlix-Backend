import express from 'express';
import videosController from '../controllers/videosController.js';

const router = express.Router();
//endpoint /videos

// Rota para listar vídeos
router.get('/videos', videosController.listarVideos);
// Rota para listar vídeo por ID
router.get('/videos/:id', videosController.listarVideosPorId)
// Rota para cadastrar vídeo
router.post('/videos', videosController.cadastrarVideo);

export default router;