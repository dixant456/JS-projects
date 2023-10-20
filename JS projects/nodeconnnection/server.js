var http = require('http')

var url = require('url')

http.createServer(function(req,res){

    var route = req.url

    if(route==='/'){
        res.end('this is information from backend to homepage')
    }
    if(route==='/getusernames'){
        var usernames = ['messi','ronaldo','sachin']
        res.end(JSON.stringify(usernames))
    }
    console.log('my node js server started successfully')
}).listen(5000)