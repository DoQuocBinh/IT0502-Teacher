var http = require('http');
// function xuLy(req,res){
//     res.write('Hello world!')
//     res.end()
// }
var server = http.createServer((req,res) =>{
    if (req.url =='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p style="color:blue">This is home Page.</p></body></html>');
        res.end();


    }else if(req.url == '/student'){
        var student = {
            name : 'Linh',
            age : 24

        }
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(student));

    }else if(req.url == '/admin'){

    }
        else res.end('Invalid Request!');
             
})
server.listen(9000)
console.log("Server is running!")