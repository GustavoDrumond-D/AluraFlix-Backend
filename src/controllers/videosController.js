import Video from "../models/videosModels.js";

class videosController {
    static  async listarVideos(req, res) {
        try {
            const videos = await Video.find({});
            res.status(200).json(videos);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao listar vídeos' });
        }
    }

    static async cadastrarVideo(req, res) {
        try {
            const novoVideo = await Video.create(req.body);
            res.status(201).json(novoVideo);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao cadastrar vídeo' });
        }
    }
}

export default videosController;