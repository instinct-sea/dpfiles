function route(handle,pathname)
{
	console.log("route for "+pathname);
	if(typeof handle[pathname]==='function'){
		
	}
	else{
		console.log("route for function "+pathname+" error");
	}
}

exports.route=route;