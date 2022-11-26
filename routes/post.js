
const Router = require("express").Router
const axios = require("axios").default
const app = Router();

// /posts + / => /posts/ 
app.get("/", function(req, res){
    axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees")
    .then(function(response){
        const { data } = response;
        res.render("post.ejs", { posts : data });
    })
    .catch(function(){
        res.render("error");
    })
})

module.exports = app;