var express=require("express");
var app=express();
const PORT=3000;

var middleware={
  requireAuthentication: function(req,res,next){
    console.log("Private route hit");
    next();
  },
  logger: function(req,res,next){
    var time=new Date().toString();
    console.log("Request at "+time+" for page: "+req.method+" "+req.originalUrl);
    next();
  }
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get("/about",middleware.requireAuthentication,function(req,res){
  res.send("About us");
})

app.use(express.static(__dirname+"/public"));
console.log(__dirname);
app.listen(3000,function(){
  console.log("Express server started on port "+PORT);
});
