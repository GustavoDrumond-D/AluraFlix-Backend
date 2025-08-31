import Video from "../models/videosModels.js";

class videosController {
    /*
    Lista todos os vídeos cadastrados
    1. Usa o método find do Mongoose para buscar todos os documentos na coleção de vídeos.
    2. Retorna os vídeos em formato JSON com status 200 (OK) se a operação for bem-sucedida.
    3. Em caso de erro, retorna uma mensagem de erro com status 500 (Erro Interno do Servidor).
    */
    static  async listarVideos(req, res) {
        try {
            const videos = await Video.find({});
            res.status(200).json(videos);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao listar vídeos' });
        }
    }
    
    /*
    Cadastra um novo vídeo
    1. Usa o método create do Mongoose para adicionar um novo documento à coleção de vídeos, com os dados fornecidos no corpo da requisição (req.body).
    2. Retorna o novo vídeo em formato JSON com status 201 (Criado) se a operação for bem-sucedida.
    3. Em caso de erro, retorna uma mensagem de erro com status 500 (Erro Interno do Servidor).
    */
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