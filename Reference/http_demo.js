const http = require('http');

//Create server object
http.createServer((req, res) =>{
    //WRite response
    res.write('Hello world');
    res.end()
}).listen(5000, () => console.log('Server running...'));
