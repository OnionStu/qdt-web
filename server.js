var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+'/app')).listen(1337);
console.log('服务器已开启, http://localhost:1337');