var exp = require ('express');
var app = exp();

app.use(exp.static('public'));

app.get('/',function(req,res){

    res.sendFile(__dirname+"/public/index.html")
});

app.listen(9000,function(){
    console.log("ready at 9000");
});