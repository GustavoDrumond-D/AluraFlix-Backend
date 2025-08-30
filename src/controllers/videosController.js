import Video from "../models/videosModels.js";

class   videosController {
    static  async listarVideos(req, res) {
        try {
            const videos = await Video.find({});
            res.status(200).json(videos);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao listar vídeos' });
        }
    }
}

export default videosController;