module.exports=function getVersion(){
var pjson = require('../package.json');
console.log(pjson.version);
}
