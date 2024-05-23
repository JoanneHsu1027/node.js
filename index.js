// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);

import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send(`<h2>哈嚕</h2>`)
});

const port = process.env.WEB_PORT || 3002;
app.listen(port, () => {
    console.log(`Server start: port ${port}`);
});