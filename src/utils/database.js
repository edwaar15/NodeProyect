const mongoose = require('mongoose');
const uri =
  'mongodb+srv://edwaar12:SbmuTv1szuC3w6MH@cluster0.mvi65we.mongodb.net/ProyectoNood?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    const { name, host } = db.connection;
    console.log(`Nombre de la BD  ${name} host: ${host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };
