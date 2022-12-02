export async function serverData(data,method,endOfUrl){
    const url = 'http://localhost:3030'+endOfUrl;
    if(!method){
        let promise = await fetch(url);
        return await promise.json();
    }
    else{
        let promise = await fetch(url,{
            method: method,
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        //if(!promise.ok){
         //   throw new Error();
        //}
        if(method == 'post'&& endOfUrl.match('users')){
            let token =  await promise.json();
            localStorage.setItem('username',data.email);
            localStorage.setItem('accessToken',token.accessToken);
        }
    }

}
