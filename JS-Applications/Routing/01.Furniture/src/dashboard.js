import {html,render} from "../node_modules/lit-html/lit-html.js";
import {serverData} from "./utilities.js";

let div= document.getElementsByClassName('container')[0];
let viewPageTemplate = (data)=>html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Welcome to Furniture System</h1>
    <p>Select furniture from the catalog to view details.</p>
</div>
</div>
<div class="row space-top">
    ${data.map(i=>html`
    <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src=.${i.img} />
                <p>${i.description}</p>
                <footer>
                    <p>Price: <span>${i.price} $</span></p>
                </footer>
                <div>
                    <a href='/details/${i._id}' class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>`)}
</div>
`;
export async function showHomePage(){
    let data = await serverData(null,null,'/data/catalog');
    render(viewPageTemplate(data),div);
}
