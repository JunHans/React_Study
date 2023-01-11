const express = require('express');
const app = express()
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config() // .env 읽어오기
const port = process.env.PORT || 7000
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));



let db;
MongoClient.connect(process.env.DB_URL,
    (err, client) => {
        if (err) return console.log(err);
        db = client.db('edukosa');

        app.post('/add', (req, resp) => {
            // resp.send('데이터 전송 성공')
            // console.log(req.body.title);
            // console.log(req.body.date);

            db.collection('number').findOne({ name: "count" }, (err, result) => {
                //number 컬렉션에서 totalDaebo라는 총 게시물 갯수 숫자를 가져와서 
                let totalCount = result.totalDaebo;
                console.log(totalCount);

                db.collection('number').updateOne({name:"count"},{$set:{totalDaebo:(totalCount+1)}}, (err,result)=>{
                  if(err) throw err;
                  console.log('업데이트 성공')
                })

                db.collection('daebo').insertOne({ _id: (totalCount + 1), title: req.body.title, date: req.body.date }, (err, result) => {
                    console.log('data insert success');
                })
            })
            // let totalCount = reault.totalDaebo;

            // db.collection('daebo').insertOne({ _id : (totalCount +1) ,title: req.body.title, date: req.body.date }, (err, result) => {
            //     console.log('data insert success');
            // })
        })

        // db.collection('daebo').insertOne({ name: 'yuna2', _id: 10 }, (err, result) => {
        //     console.log('data insert success');
        // })



        app.listen(port, () => {
            console.log(`listening ${port}`);
        })
    }) //db connect

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + "/index.html");
})

app.get('/list', (req, resp) => {
    // resp.send("리스트 페이지로 이동");
    db.collection('daebo').find().toArray((err, result) => {
        console.log(result);
        resp.render('list.ejs', { daebos: result })
    })
})

app.get('/write', (req, resp) => {
    resp.sendFile(__dirname + "/write.html");
})

// app.get('/add', (req, resp) => {
//     resp.sendFile(__dirname + "/write.html");
// })
// app.post('/add', (req, resp) => {
//     resp.send('데이터 전송 성공')
//     console.log(req.body.title);
//     console.log(req.body.date);
// })