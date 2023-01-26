var express = require("express")
var app = express()

let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// const addNumbers=(number1,number2) =>{
//     var num1 = parseInt(number1)
//     var num2 = parseInt(number2)
//     var result  = num1+num2;
//     return result;
// }

// app.get("/addTwoNumbers",(req,res) =>{
//     var number1 = req.query.number1;
//     var number2 = req.query.number2;
//     var result = addNumbers(number1,number2)
//     res.json({statusCode:200, data:result, message:'success'})
// })

 app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
  

        var firstNumber = parseInt(req.params.firstNumber) 
        var secondNumber = parseInt(req.params.secondNumber)
        var result = firstNumber + secondNumber || null
        if(result == null) {
         res.json({result: result, statusCode: 400}).status(400)
        }
        else { res.json({result: result, statusCode: 200}).status(200) } 
      })



 io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
        setInterval(()=>{
          socket.emit('number', parseInt(Math.random()*10));
        }, 1000);
      });

var port = process.env.port || 3000;

http.listen(port,()=>{
    console.log("App listening to http://localhost:"+port)
})





