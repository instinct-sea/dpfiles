var server=require("./server");
var route=require("./router");
var handlers=require("./requestHandlers");

var handle={}
handle['/']=handlers.start;
handle['/start']=handlers.start;
handle['/upload']=handlers.upload;
server.start(route.route,handle);