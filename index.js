const express = require('express');
const app = express();
const port = process.env.PORT 

//endpoint que responde un mensaje
app.get('/', (req, res) => {
  res.send('¡Integracion continua funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});