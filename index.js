//import de dependecias y archivos
const express = require('express');
const { connectDB } = require('./src/utils/database');
const routerUser = require('./src/api/routes/user.routes');
// configuración del servidor
const server = express();
server.use(express.json());
connectDB();

server.use('/user', routerUser);

//ejecucion del servidor
const PORT = 5002;
server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});
