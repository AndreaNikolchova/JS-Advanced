import { html } from "../api/lib.js";
import {login} from "../api/user.js";
import {page} from "../api/lib.js";

const template = (onSubmit)=>html`<section id="login">
<div class="form">
  <h2>Login</h2>
  <form @submit=${onSubmit} class="login-form">
    <input type="text" name="email" id="email" placeholder="email" />
    <input type="password" name="password" id="password" placeholder="password" />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>`;
export function showLogin(ctx){
    ctx.render(template(onSubmit));
    async function onSubmit(event){
      event.preventDefault();
      
      let form = new FormData(event.target);
      let data = Object.fromEntries(form);
      if(!data.email|| !data.password){
        alert('Missing fields!');
        return;
      }
      else{
        await login(data.email,data.password);
        ctx.checkUser();
        page.redirect("/catalog");
          
      }
  
  }
}
