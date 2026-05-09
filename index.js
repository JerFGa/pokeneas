const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Container ID: ${process.env.HOSTNAME}`);
});