import { html } from "../api/lib.js";
import {register} from "../api/user.js";
import {page} from "../api/lib.js";
const template = ()=>html`<section id="registerPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

        <button type="submit" class="register">Register</button>

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`;
export function showRegister(ctx){
    ctx.render(template())
    ctx.checkUser();
}
async function onSubmit(event){
    event.preventDefault();
    let form = new FormData(event.target);
    let data = Object.fromEntries(form);
    console.log(data)
    if(!data.email||!data.password){
        window.alert('Empty fields');
    }
    else if(data.password!==data[`conf-pass`]){
        window.alert('Passwords do not match');
    }
    else{
        await register(data.email,data.password);
        page.redirect('/');
    }
}