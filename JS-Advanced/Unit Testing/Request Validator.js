function requestValidator(obj){
    if(obj.method === undefined){
        throw new Error("Invalid request header: Invalid Method");
    }
    if(obj.method !=='GET'&&obj.method!=='POST'&&obj.method!=='DELETE'&&obj.method!=='CONNECT'){
        throw new Error("Invalid request header: Invalid Method");
    }
    if(obj.uri === undefined){
        throw new Error("Invalid request header: Invalid URI");
    }

    if(!(obj.uri.match(/^[\w+.]+$/g))&&obj.uri!=='*'){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(obj.version === undefined){
        throw new Error("Invalid request header: Invalid Version");
    }
    if(obj.version !=='HTTP/0.9'&&obj.version !=='HTTP/1.0'&&obj.version !=='HTTP/1.1'&&obj.version !=='HTTP/2.0'){   
        throw new Error("Invalid request header: Invalid Version");
    } 
    if(obj.message === undefined){
        throw new Error("Invalid request header: Invalid Message");
    }
    if(obj.message.includes('<')||obj.message.includes('>')||obj.message.includes('\\')||obj.message.includes('&')||obj.message.includes("'")||obj.message.includes('"')){
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
}
console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  ));