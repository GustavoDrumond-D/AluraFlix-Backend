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

    /* Lista um vídeo por ID
    1. Usa o método findById do Mongoose para buscar um documento na coleção de vídeos com o ID fornecido nos parâmetros da requisição (req.params.id).
    2. Retorna o vídeo encontrado em formato JSON com status 200 (OK) se a operação for bem-sucedida.
    3. Em caso de erro, retorna uma mensagem de erro com status 500 (Erro Interno do Servidor).
    */
    static async listarVideosPorId (req, res){
        try{
            const id = req.params.id
            const videoEncontrado = await Video.findById(id)
            res.status(200).json(videoEncontrado)
        } catch (error) {
            res.status(500).send({ message: 'Erro ao listar vídeos por ID' });
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

    static async atualizarVideo(req, res) {
        try {
            const id = req.params.id
            await Video.findByIdAndUpdate(id, req.body)
            res.status(200).send({message: 'Vídeo atualizado com sucesso'})
        } catch (error) {
            res.status(500).send({ message: 'Erro ao atualizar vídeo' });
        }
    }
}

export default videosController;