const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const skillRouter = require('./src/routes/skills.routes.js');
const projectRouter = require('./src/routes/projects.routes.js');
const config = require('./config/config.js');


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());
app.use('/api/skills', skillRouter);
app.use('/api/projects', projectRouter);

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});

//Conexion a la base de datos
const mongoURI = config.database_url;

mongoose.connect(mongoURI);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
})