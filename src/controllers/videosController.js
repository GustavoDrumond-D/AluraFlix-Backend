class   videosController {
    static  async listarVideos(req, res) {
        try {
            const videos = await videos.find();
            res.status(200).json(videos);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao listar vídeos' });
        }
    }
}

export default videosController;