const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./route/index");
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', indexRouter);
// 5000번에서 주소창에 /api 주소가 들어오면 indexRouter를 실행한다.
// indexRouter 내부에서 명령어에 따라 다른 동작을 한다.

const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => { console.log("몽구스 연결") })
    .catch((err) => { console.log("연결 실패:", err) });


app.listen(5000, () => {
    console.log("서버 연결 됨 5000번");
})