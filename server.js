const express = require('express');
const app = express()
const axios = require("axios").default;

// const { writeFile, readFile } = require("fs");
const PostsRoute = require("./routes/post");

app.use(express.json())


// Posts
app.use("/posts", PostsRoute) 

// const URLS = {
//     posts: "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees"
// }
// app.get("/", (req, res) => {
//     function getPosts() {

//         axios.get(URLS.posts)
//             .then(function (response) {

//                 console.log("got data from api");
//                 return response.data;
//             })
//             .then(function (data) {
//                 // const objData=JSON.parse(data)
//                 // res.send(objData.name);
//                 writeFile("newJson.json", JSON.stringify(data), (err) => {
//                     console.log(err);
//                 })
//                 // res.send(data);

//             })
//             .then(function () {
//                 readFile("newJson.json", 'utf-8', (err, data) => {
//                     const objectData = JSON.parse(data)
                   
//                     // res.send({objectData})
//                     res.send(objectData[3].name)
//                     // for (let i = 0; i < objectData.length; i++) {
//                     //    res.send(objectData[i].id)
//                     //    res.send(objectData[i].name)   }

//                     // res.send(objectData[1].name)
//                 })
//                 console.log("read file completed.");
//             })
//             .catch(function (err) {
//                 console.log(err);
//             })
//     }
//     getPosts();
// })


app.listen(8000,()=>{
    console.log("listening to the port")
});
