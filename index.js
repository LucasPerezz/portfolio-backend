const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const skillRouter = require('./src/routes/skills.routes.js');
const projectRouter = require('./src/routes/projects.routes.js');


const app = express();
const PORT = "https://portfolio-backend-w2w8fcx6f-lucasperezz.vercel.app/" || 3000;


app.use(express.json());
app.use(cors());
app.use('/api/skills', skillRouter);
app.use('/api/projects', projectRouter);

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});

//Conexion a la base de datos
const mongoURI = 'mongodb+srv://portfolio:portfolio@portfolio.kni0vs6.mongodb.net/test';

mongoose.connect(mongoURI);