const express = require("express");
const redis  = require("redis");  //redis 모듈 
//redis client 생성
const client = redis.createClient({
    host: "redis-server",   // 일반 "https://redis-server.com", docker: docker-compose.yml에 명시한 컨테이너 이름으로 지정.
    port: 6379
});
const app = express(); // 새로운 express 앱 생성
//숫자는 0부터 시작
client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        // 1 증가
        client.set("number", parseInt(number) + 1)
        res.send("숫자가 1씩 증가됩니다. 숫자: "+ number)
    })
})

app.listen(8080);
console.log("server running!!");