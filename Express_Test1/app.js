const express = require('express');

// express를 사용한 app을 만든다.
const app = express();

const checkAuth = (req, res, next) => {
    console.log("Admin permission");
    next();// 반드시 있어야 한다.
}

const getUser = (req, res) => {
    console.log("Herer is User");
}

// 미들웨어 
// 유저로 가지 전에 확인을 한다.
app.get("/users", checkAuth, getUser);

// app.get('/', (req, res) => {
//     res.send("Hello World");
// })

// app.get('/about', (req, res) => {
//     res.send("This is About");
// })

app.listen(5000, () => {
    console.log("Sever is on 5000");
})