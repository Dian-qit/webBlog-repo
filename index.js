const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = require('./app');  // Import your main app configuration

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});