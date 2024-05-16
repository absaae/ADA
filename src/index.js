const express = require('express');
const mongoose = require ('mongoose');
require("dotenv").config();
const usuariosRoutes = require("./routes/usuarios");
const productosRoutes = require("./routes/productos");

const app = express();
const port = process.env.PORT  || 8080;

//middleware
app.use(express.json());
app.use('/api', usuariosRoutes);
app.use('/api', productosRoutes);



// routes
app.get("/", (req,res) => {
    res.send("Holitas d mar");
});

//mongodb connect
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a Aatlas'))
.catch((error) => console.error(error))

app.listen(8080, () => console.log('Servidor en puerto:', port))