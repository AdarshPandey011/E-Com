// let {get_data} = require("../services/get_data");
// let cartData = get_data("/Users/adarshpandey/Desktop/Node/Assignment10/services/cartData.txt");

let pro = document.getElementById("products")
let flag = 1;
let temp;
function create_card(product, cart) {
    let new_col = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let img = document.createElement("img");
    let h6 = document.createElement('h6');
    let h7 = document.createElement("h7")
    let button = document.createElement("h7");
    let cart_button = document.createElement("h7");
    h6.innerText = product.productname;
    h7.innerHTML = "<h7>Price :</h7>" + product.price + "<h7>$</h7>";


    new_col.setAttribute("class", "  card mx-2 p-2 sized");
    new_col.setAttribute("id", "clear" + flag);
    div1.setAttribute("class", "card-body")
    // div2.setAttribute("class", "card-footer bg-white")
    img.setAttribute("class", "card-img-top  img1")
    img.setAttribute("src", "./uploads/" + product.img)
    // img.setAttribute("class ", "img_size")

    //div1.appendChild(img);
    div2.appendChild(h6);
    div2.appendChild(h7);

    new_col.appendChild(img);
    new_col.appendChild(div2);

    pro.appendChild(new_col);

    button.setAttribute("class", "btn btn-block btn-secondary my-2");
    button.setAttribute("data-toggle", "tooltip");
    button.setAttribute("data-placement", "top")
    button.setAttribute("title", "this is a good " + product.productname)
    div2.appendChild(button);
    button.innerText = "Details";

    if (cart != -1) {
        //console.log(cart.productid)
        cart_button.setAttribute("class", "btn btn-block btn-success my-2")
        // cart_button.setAttribute("value", product.id);
        cart_button.setAttribute("onClick", `addToCart(${cart.productid})`);
        cart_button.setAttribute("id", cart.productid);
        cart_button.innerText = "Added to cart"
    }
    else {
        cart_button.setAttribute("class", "btn btn-block btn-secondary my-2")
        // cart_button.setAttribute("value", product.id);
        cart_button.setAttribute("onClick", `addToCart(${product.productid})`);
        cart_button.setAttribute("id", product.productid);
        cart_button.innerText = "Add to cart"
    }
    div2.appendChild(cart_button);

    flag += 1;



}

function load() {
    // let products;
    // let request = new XMLHttpRequest;
    // request.open('GET', "/products");
    // request.send();
    // request.addEventListener("load", () => {
    //     products = JSON.parse(request.responseText);

    //     for(let i=0;i<products.length;i++){
    //         create_card(products[i]);
    //     }

    // })
    // next();
    // del();
    //next();
    // del();
    let products, cart;
    let request = new XMLHttpRequest;
    request.open('POST', "/products");
    request.setRequestHeader('content-type', 'application/json')
    request.send(JSON.stringify({ data: '3' }));
    request.addEventListener("load", () => {
        //console.log(request.responseText);
        products = JSON.parse(request.responseText);

        cart = products.cart;

        // if (cart.length == 0) {
        //     cart = -1;
        // }
        products = products.x;



        //console.log(products);

        for (let i = 0; i < products.length; i++) {
            temp = -1;
            //console.log(cart);
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].productid == products[i].productid) {
                    temp = cart[j];
                    break;
                }
                else {
                    temp = -1;
                }
            }
            // create_card(products[i], temp);

           // console.log(temp);
            create_card(products[i], temp);
        }
       // console.log(products[1])
        // create_card(products[1]);
    })


}
function del() {
    if (flag > 1) {
        for (let i = 1; i < flag; i++) {
            let x = document.getElementById("clear" + i)
            x.remove()
        }
        flag = 1;
    }
}

function next() {

    // del();
    let products;
    let request = new XMLHttpRequest;
    request.open('POST', "/products");
    request.setRequestHeader('content-type', 'application/json')
    request.send(JSON.stringify({ data: '1' }));
    request.addEventListener("load", () => {
        // console.log(request.responseText);
        // products = JSON.parse(request.responseText);
        products = JSON.parse(request.responseText);

        if (products.x.length !== 5) {
            //button gayab kr do
            document.getElementById('loadMore').remove();

        }
        cart = products.cart;
        products = products.x
        // if (cart == undefined) {
        //     cart = -1;

        // }

        // for (let i = 0; i < products.length; i++) {
        //     create_card(products[i], cart);
        // }
        for (let i = 0; i < products.length; i++) {
            temp = -1;
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].productid == products[i].productid) {
                    temp = cart[j];
                    break;
                }
                else {
                    temp = -1;
                }
            }
            // create_card(products[i], temp);


            create_card(products[i], temp);
        }
        // console.log(products[1])
        //create_card(products[1]);
    })

}

function prev() {

    del();
    let products;
    let request = new XMLHttpRequest;
    request.open('POST', "/products");
    request.setRequestHeader('content-type', 'application/json')
    request.send(JSON.stringify({ data: '2' }));
    request.addEventListener("load", () => {
        //console.log(request.responseText);
        products = JSON.parse(request.responseText);

        for (let i = 0; i < products.length; i++) {
            create_card(products[i]);
        }
        // console.log(products[1])
        //create_card(products[1]);
    })

}
function checkUpper(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].toUpperCase() == data[i] && data[i] != ' ') {
            return true
        }
    }
    return false;
}

function checkLower(data) {

    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase() == data[i] && data[i] != ' ') {
            return true
        }
    }
    return false;

}

function checkNumber(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= "A" && data[i] <= "z" && data[i] == ' ') {
        }
        else {

            return true;
        }
    }
    return false
}

let password = document.getElementById("password");
let display = document.getElementById("display");
let cpassword = document.getElementById("cpassword");
let btn = document.getElementById("btn");
let q = false;

function checkPassword(event) {
    btn.disabled = true;
    if (password.value.length < 8) {
        display.innerText = "Minimum 8 characters Long";
    }
    else {

        if (checkUpper(password.value)) {
            display.innerText = "";

            if (checkLower(password.value)) {
                display.innerText = "";
                if (checkNumber(password.value)) {
                    display.innerText = "";
                    q = true;
                    if (cpassword.value === password.value ) {
                        btn.disabled = false;
                    }
                    else {
                        if (cpassword.value.length != 0)
                            display.innerText = "Password not matched";
                    }
                }
                else {
                    display.innerText = "Atleast one Number required";
                }
            }
            else {
                display.innerText = "Atleast one LowerCase Character";
            }
        }
        else {
            display.innerText = "Atleast one UpperCase Character";
        }


    }

}

function confirmPassword() {
    btn.disabled = true;
    // console.log(cpassword.value , password.value)
    if (q && password.value.length >= 8 && cpassword.value.length == password.value.length && cpassword.value === password.value) {

        btn.disabled = false;
        display.innerText = "";
    }
    else {
        display.innerText = "Password not matched";
    }
}

function addToCart(id) {
    let atc = document.getElementById(id);

    // console.log(id);
    const request = new XMLHttpRequest;
    request.open("post", "/addToCart");
    request.setRequestHeader("content-type", 'application/json');
    request.send(JSON.stringify({ id }));
    request.addEventListener('load', () => {
        if (atc.innerText == "Add to cart") {
            atc.innerText = "Added to cart"
            atc.setAttribute("class", "btn btn-block btn-success my-2")
        }
        else {
            atc.innerText = "Add to cart"
            atc.setAttribute("class", "btn btn-block btn-secondary my-2")

        }

    })

}

// let checkbox = document.getElementById("checkbox");
// let pass = document.getElementById("password");
// checkbox.addEventListener('click',function(){
//     if(this.checked){
//         pass.setAttribute('type','text');
//     }
//     else{
//         pass.setAttribute('type','password');
//     }
// })

try {
    let checkbox = document.getElementById("checkbox");
    let pass = document.getElementById("password");
    checkbox.addEventListener('click', function () {
        if (this.checked) {
            pass.setAttribute('type', 'text');
        }
        else {
            pass.setAttribute('type', 'password');
        }
    })
}
catch (err) {
}








