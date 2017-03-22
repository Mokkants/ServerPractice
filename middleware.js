var middleware={
  requireAuthentication: function(req,res,next){
    console.log("Private route hit!");
    next();
  },
  logger: function(req,res,next){
    var time=new Date().toString();
    console.log("Request at "+time+" for page: "+req.method+" "+req.originalUrl);
    next();
  }
};

module.exports=middleware;
