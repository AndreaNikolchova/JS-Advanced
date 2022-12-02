import {html,page} from "../api/lib.js";
import { login } from "../api/user.js";
const template = () => html`
<section id="loginPage">
    <form @submit=${onSubmit} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`;
export function showLogin(ctx){
    ctx.render(template());
    ctx.checkIfLogin();
 }
async function onSubmit(event){
    event.preventDefault();
    let form = new FormData(event.target);
    let {email,password} = Object.fromEntries(form);
    if(!email||!password){
        window.alert('Input fields can\'t be empty');
        return;
    }
    await login(email,password);
    page.redirect('/');
 }