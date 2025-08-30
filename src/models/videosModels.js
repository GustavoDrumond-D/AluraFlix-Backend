import mongoose from "mongoose";

const videosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: { type: String, required: true, min: 8, max: 50 },
    descricao: { type: String, required: true },
    url: { type: String, required: true , unique: true },
});

const videos = mongoose.model('videos', videosSchema);

export default videos;