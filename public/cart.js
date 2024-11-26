let tag = document.getElementById('cart');
function create(product) {
    let new_col = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let img = document.createElement("img");
    let h6 = document.createElement('h6');
    let h7 = document.createElement("h7")
    let button = document.createElement("h7");
    let cart_button = document.createElement("h7");
    let btn_div = document.createElement('div');
    let span = document.createElement('span');

    let div = document.createElement('div');
    div.setAttribute("class", "d-flex justify-content-between align-items-center");
    let sep_div = document.createElement('div');;

    let plus = document.createElement('button');
    let minus = document.createElement('button');

    h6.innerText = product.productname;
    h7.innerHTML = "<h7>Price :</h7>" + product.price + "<h7>$</h7>";


    new_col.setAttribute("class", "  card mx-2 p-2 sized");
    new_col.setAttribute("id", "clear" + product.productid);
    div1.setAttribute("class", "card-body")

    img.setAttribute("class", "card-img-top  img1")
    img.setAttribute("src", "./uploads/" + product.img)

    plus.setAttribute('class', "btn btn-sm btn-info mt-4 mb-2 ");
    plus.setAttribute('onClick', `increaseQuantity(${product.productid})`);
    minus.setAttribute('class', "btn btn-sm btn-info mt-4 mb-2 ml-4");
    minus.setAttribute('onClick', `decreaseQuantity(${product.productid})`);
    span.setAttribute('class', 'mt-3 text-info')
    plus.innerText = "+";
    minus.innerText = "-";
    span.innerText = product.quantity;



    // div.appendChild(h6);
    // div.appendChild(h7);
    sep_div.appendChild(h6);
    sep_div.appendChild(h7);
    div.appendChild(sep_div)
    div.appendChild(minus);
    div.appendChild(span);
    div.appendChild(plus);
    div2.appendChild(div);

    new_col.appendChild(img);
    new_col.appendChild(div2);

    tag.appendChild(new_col);

    button.setAttribute("class", "btn  btn-secondary my-2");
    button.setAttribute("data-toggle", "tooltip");
    button.setAttribute("data-placement", "top")
    button.setAttribute("title", "this is a good " + product.productname)
    btn_div.appendChild(button);

    button.innerText = "View Desc";
    cart_button.setAttribute("class", "btn  btn-secondary ml-2 my-2")
    cart_button.setAttribute("onClick", `deleted(${product.productid})`);
    cart_button.setAttribute("id", product.productid);
    cart_button.innerText = "Delete"

    btn_div.appendChild(cart_button);
    div2.appendChild(btn_div)




}



function cart() {

    const request = new XMLHttpRequest;
    request.open('post', '/cart');
    request.setRequestHeader('content-type', 'application/json');
    request.send();
    request.addEventListener('load', () => {
        let cart = JSON.parse(request.responseText);

        for (let i = 0; i < cart.length; i++) {
            create(cart[i]);
        }

    })

}

function deleted(id) {
    const request = new XMLHttpRequest;
    request.open("post", "/addToCart");
    request.setRequestHeader("content-type", 'application/json');
    request.send(JSON.stringify({ id }));
    request.addEventListener('load', () => {
        let xy = document.getElementById("clear" + id);
        xy.remove();
    })
}


function increaseQuantity(id) {
    const request = new XMLHttpRequest;
    request.open('post','/changeQuantity');
    request.setRequestHeader("content-type", 'application/json');
    request.send(JSON.stringify({value:1,id:id}));
    request.addEventListener('load',()=>{
        const xy = document.getElementById('clear'+id);
       // console.log(request.responseText);
         let value=xy.childNodes[1].childNodes[0].childNodes[2].textContent;
         value=xy.childNodes[1].childNodes[0].childNodes[2].innerText = parseInt( value )+1;

    })

}

function decreaseQuantity(id) {

    const request = new XMLHttpRequest;
    request.open('post','/changeQuantity');
    request.setRequestHeader("content-type", 'application/json');
    request.send(JSON.stringify({value:2,id:id}));
    request.addEventListener('load',()=>{
        dec = JSON.parse(request.responseText).dec;

        if(dec!=0){
            const xy = document.getElementById('clear'+id);

            let value=xy.childNodes[1].childNodes[0].childNodes[2].textContent;
            value=xy.childNodes[1].childNodes[0].childNodes[2].innerText = parseInt( value )-1;
        }
        // const xy = document.getElementById('clear'+id);
        // xy.childNodes[1].childNodes[0].childNodes[2].innerText = request.responseText;
    })

}