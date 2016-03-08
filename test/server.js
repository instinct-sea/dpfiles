var http=require("http");
var url=require("url");
function start(route,handle){
 function onrequest(request,response){
	var pathname=url.parse(request.url).pathname;
  console.log("reqruese for "+pathname);	
  route(handle,pathname);
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("hello world");
  response.end();
};
	http.createServer(onrequest).listen(8888);
	console.log("start server port:8888");
}

exports.start=start;
