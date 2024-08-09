const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"

const client = new MongoClient(uri);

async function run() {
    const database = client.db("firstDB1");

    const inventory = database.collection('inventory');

    // const result = await inventory.insertOne({ item: "canvas", qty: 100, tags: ['cotton'], size: { h: 28, w: 35.5, uon: 'cm' } })

    // const itemList = [
    //     { item: 'journal', qty: 25, tags: ['black', 'red'], size: { h: 14, w: 21, uom: 'cm' } },
    //     { item: 'mat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 35.5, uom: 'cm' } },
    //     { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: { h: 19, w: 22.85, uom: 'cm' } }
    // ]

    // await inventory.insertMany(itemList);


    // console.log("result", await inventory.find({}).toArray());

    // const itemList2 = [
    //     { item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm' }, status: 'A' },
    //     { item: 'notebook', qty: 50, size: { h: 8.5, w: 11, uom: 'in' }, status: 'A' },
    //     { item: 'paper', qty: 100, size: { h: 8.5, w: 11, uom: 'in' }, status: 'D' },
    //     { item: 'planner', qty: 75, size: { h: 22.85, w: 30, uom: 'cm' }, status: 'D' },
    //     { item: 'postcard', qty: 45, size: { h: 10, w: 15.25, uom: 'cm' }, status: 'A' }
    // ]

    // console.log(await inventory.insertMany(itemList2));

    // console.log("result", await inventory.find({ status: 'D' }).toArray());

    // console.log(await inventory.find({ status: 'A', qty: 50 }).toArray());

    // console.log(await inventory.find({ status: { $in: ['A', 'B'] } }).toArray());

    // console.log(await inventory.find({ status: "A", qty: { $lt: 30 } }).toArray());

    // console.log(await inventory.find({ $or: [{ status: 'A' }, { qty: { $lt: 30 } }] }).toArray());

    // console.log(await inventory.find({ 'size.uom': 'in' }).toArray())

    // console.log(await inventory.find({ 'size.h': { $gt: 10 } }).toArray());


}

run();