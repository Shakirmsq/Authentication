const fs = require('fs');



//(creating a log)To forward request after passing by this middleware
function logReqRes(filename){
    return(req,res,next)=>{
          //create record
  fs.appendFile(
   filename,
    `\n${Date.now()}:${req.ip}:${req.method}:${req.path}`,
    (err, data) => {
      next();
    }
  );
    }
};

//export 
module.exports = {
    logReqRes,
};