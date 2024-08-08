// 몽고Db를 불러 온다.
const { MongoClient } = require("mongodb");

// 주소가 있어야 DB에 연결할 수 있다.
const uri = 'mongodb://localhost:27017';

// 데이터 베이스 생성
const client = new MongoClient(uri);

async function run() {
    // firstDB1 이라는 데이터베이스를 만든다.
    const database = client.db('firstDB1');

    // 컬랙션을 만든다 (컬랙션 이름)
    const users = database.collection('users')

    // // 데이터를 저장한다.
    // // insertOne : 데이터 1개
    // const userData = await users.insertOne({ name: 'mmm', age: 37 })

    // console.log("result", userData);

    // const userList = [{ name: '철수', age: 32 }, { name: "영희", age: 14 }]

    // // insertMany : 데이터 여러개
    // const userListResult = await users.insertMany(userList)
    // console.log("result", userListResult);

    // 데이터 찾기
    // 이름이 wmg 인 사람들 찾는다.
    // const findUser = await users.findOne({ name: 'wmg' })

    // 데이터를 Array형태로 변환해서 불러 온다.
    // const findUser = await users.find({}).toArray();

    // 20살 이상인 사람을 찾는다.
    const findUser = await users.find({ age: { $gt: 20 } }).toArray();
    console.log("result", findUser);
}



run();