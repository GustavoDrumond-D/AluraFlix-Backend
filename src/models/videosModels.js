import mongoose, { version } from "mongoose";

const videoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    titulo: { type: String, required: true, min: 8, max: 50 },
    descricao: { type: String, required: true },
    url: { type: String, required: true , unique: true },
    }, {versionKey: false}
);

const Video = mongoose.model('Video', videoSchema);

export default Video;