class Request{
    constructor(method,uri,version,message,fulfilled){
        this.method= method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}
