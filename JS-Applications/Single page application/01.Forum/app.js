import {buttonPost } from "./createPost.js";
import {getDataFromServer} from "./createPost.js";
import {visualizePost} from "./createPost.js";
import {buttonCancel} from "./clearPost.js";
import {homeLink} from "./home.js";

async function onLoad(){
    let data = await getDataFromServer();
    for(let id in data){
        visualizePost(data[id]);
    }
 }
onLoad();
buttonPost();
buttonCancel();
homeLink();