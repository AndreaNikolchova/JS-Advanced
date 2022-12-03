import { html } from "../api/lib.js";
import {register} from "../api/user.js";
import {page} from "../api/lib.js";
const template = (onSubmit)=>html`<section id="register">
<div class="form">
  <h2>Register</h2>
  <form @submit=${onSubmit} class="login-form">
    <input type="text" name="email" id="register-email" placeholder="email" />
    <input type="password" name="password" id="register-password" placeholder="password" />
    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
    <button type="submit">register</button>
    <p class="message">Already registered? <a href="/login">Login</a></p>
  </form>
</div>
</section>
`;
export function showRegister(ctx){
    ctx.render(template(onSubmit));
    ctx.checkUser();
    async function onSubmit(event){
        event.preventDefault();
        
        let form = new FormData(event.target);
        let data = Object.fromEntries(form);
        if(!data.email|| !data.password|| !data[`re-password`]){
            alert('Missing fields!');
            return;
        }
        else if(data[`re-password`]!==data.password){
            alert('Passwords do not match!');
            return;
        }
        else{
            await register(data.email,data.password);
            ctx.checkUser();
            page.redirect("/catalog");
        }
    }
}