import mongoose from "mongoose";

async function dbConnect() {
    const connectionString = process.env.DB_CONNECTION_STRING;
    if (!connectionString) {
        throw new Error("DB_CONNECTION_STRING não definida nas variáveis de ambiente.");
    }
    await mongoose.connect(connectionString);
    console.log("Conectado ao MongoDB");
    return mongoose.connection;
}

export default dbConnect;