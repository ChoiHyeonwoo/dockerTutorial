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

//docker run -d -p 5000:8080 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app hwchoi/nodejs
//-> 이미지 빌드없이 소스변경 반영