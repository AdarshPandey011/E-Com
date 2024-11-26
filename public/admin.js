function create(product) {
    let template = document.getElementById('template')
    let main = document.getElementById('main');

    const temp = template.content.cloneNode(true);

    temp.getElementById('img').src = "/uploads/"+product.img;
    temp.getElementById('name').value = product.productname;
    temp.getElementById('price').value = product.price
    temp.getElementById('quantity').value = product.stock
    temp.getElementById('description').value = product.description
    temp.getElementById('productid').value = product.productid;

    // temp.getElementById('btn').value = product.productid;
    // temp.getElementById('btn').onclick = `remove1(${product.productid})`;

    let t = temp.getElementById('btn')
    t.setAttribute('onclick',`remove1(${product.productid})`)
    




    main.appendChild(temp);

}


function tag() {
    let request = new XMLHttpRequest;
    request.open('POST', "/products");
    request.setRequestHeader('content-type', 'application/json')
    request.send(JSON.stringify({ data: '3' }));
    request.addEventListener("load", () => {
        let products;
        products = JSON.parse(request.responseText);
        products = products.x;
        for(let i=0;i<products.length;i++){
            create(products[i])
        }

    })
}

function loadMore(){

    let request = new XMLHttpRequest;
    request.open('POST', "/products");
    request.setRequestHeader('content-type', 'application/json')
    request.send(JSON.stringify({ data: '1' }));
    request.addEventListener("load", () => {

        let products;
        products = JSON.parse(request.responseText);
        products = products.x;

        if (products.length !== 5) {
            document.getElementById('loadMore').remove();

        }

        for(let i=0;i<products.length;i++){
            create(products[i])
        }

    })
    
}


function remove1(productid){
   
    let request = new XMLHttpRequest;
    request.open('POST', "/deleteProduct");
    request.setRequestHeader('content-type', 'application/json')
    request.send(JSON.stringify({ data: `${productid}` }));
    request.addEventListener("load", () => {
  

    })
    
}
