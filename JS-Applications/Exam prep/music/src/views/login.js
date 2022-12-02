import { html } from "../api/lib.js";
import {login} from "../api/user.js";
import {page} from "../api/lib.js";
const template = ()=>html`<section id="loginPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Login</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <button type="submit" class="login">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`;
export function showLogin(ctx){
    ctx.render(template());
    ctx.checkUser();
}
async function onSubmit(event){
    event.preventDefault();
    let form = new FormData(event.target);
    let data = Object.fromEntries(form);
    if(!data.email||!data.password){
        window.alert('Empty fields');
    }
    else{
        await login(data.email,data.password);
        page.redirect('/');
    }
}