const express= require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req,res){

var w = Number(req.body.w);
var h = Number(req.body.h);
var bmi = w/(h*h);
console.log(bmi);

    res.send("Your BMI is " + bmi);
})

app.listen(3000, function(){
    console.log("ok bhai");
});
