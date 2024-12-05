const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola equipo de Desafío Latam desde Docker con Node.js! :D');
});

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener datos de la API externa');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

module.exports = app;
