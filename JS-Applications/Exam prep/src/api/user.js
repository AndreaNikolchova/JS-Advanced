import { clearUserData, setUserData } from '../utilities.js';
import {get, post} from './api.js';

export async function login(email, password){
    const {_id,email:resultEmail,accessToken } = await post('/users/login',{email,password});
    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}
export async function register(email, password){
    const {_id,email:resultEmail,accessToken } = await post('/users/register',{email,password});
    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function logout(){
    get('/user/logout');
    clearUserData();
}