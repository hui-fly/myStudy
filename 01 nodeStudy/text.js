const http = require('http')

const server = http.createServer((req,res)=>{
	if(req.method=='POST') {
		res.end('post')
	}
	else{
		let url = req.url;
		res.setHeader('Content-type','application/json')
		let resData = 'Hello world'
		res.end(JSON.stringify(resData))
	}
	
})

server.listen(8000)
console.log('OK')