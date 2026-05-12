const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes/api.routes');
const webRoutes = require('./src/routes/web.routes');

// ============================================================
// APP CONFIGURATION
// ============================================================
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// ============================================================
// ROUTES
// ============================================================
app.use('/api', apiRoutes);
app.use('/', webRoutes);

// ============================================================
// SERVER STARTUP
// ============================================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
  console.log(`Container ID: ${process.env.HOSTNAME}`);
});
