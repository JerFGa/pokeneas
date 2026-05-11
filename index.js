const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
  console.log(`Container ID: ${process.env.HOSTNAME}`);
});