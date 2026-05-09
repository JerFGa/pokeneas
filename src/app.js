const express = require('express');
const app = express();
const apiRoutes = require('./routes/api.routes');
const webRoutes = require('./routes/web.routes');

app.use('/api', apiRoutes);
app.use('/', webRoutes);

module.exports = app;
