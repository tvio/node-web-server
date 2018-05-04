
const fs = require('fs');
function savelog(req,res) {
var now = new Date().toString();
var log = `${now}: ${req.method} ${req.url} ${res.statusCode}`;
   console.log(log);
   fs.appendFile('server.log',log + '\n', (err)=>{
       if (err) {
           cosnole.log('Unalbe to access file server.log');
            }
   });
};

module.exports.savelog = savelog;