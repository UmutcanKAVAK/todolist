var express = require('express');
var bodyParser = require('body-parser');

var items = ["Shop Food","Cook Food","Eat Food"];
var workList =[];
var app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/" , function(req , res) {
    var today = new Date();
    
    var options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    } 
    var day = today.toLocaleDateString("en-US", options)

    res.render('list.ejs', {listTitle: day, NewListItems:items});

})

app.get("/work" , function(req,res) {
    
    res.render("work.ejs",{listTitle:"Work List" , workList:workList} )
})

app.post("/work" , function(req,res){
    work_item = req.body.workItem;
    workList.push(list_item);
    res.redirect("/work");
})// we're adding them to here .


app.post("/" , function(req,res){
    list_item = req.body.NewItem;
    items.push(list_item);
    res.redirect("/");
})// we're adding them to here .
app.listen(3000, function(req,res) {
    var name = "Raj"
    console.log(`listening port ${name}`);
})
