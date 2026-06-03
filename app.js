const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD Demo App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            text-align: center;
            padding-top: 100px;
          }
          .box {
            background: white;
            padding: 40px;
            width: 500px;
            margin: auto;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
          }
          h1 {
            color: #0b5ed7;
          }
          p {
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>Hello from CI/CD Pipeline</h1>
          <p>Build, Test, and Deploy as Docker Container</p>
        </div>
      </body>
    </html>
  `);
});

module.exports = app;