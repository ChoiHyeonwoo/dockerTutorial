const express = require('express');

const PORT = 8080;
//const HOST = '0.0.0.0';

//APP
const app = express();
app.get('/', (req, res) => {
    res.send("과연 되려나")
});

app.listen(PORT);
console.log("Server running");