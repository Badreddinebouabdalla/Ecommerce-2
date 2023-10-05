//-----------------Index-Page--------------------



let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight="0px";
function menuToggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight="200px";
    }else{
        menuItems.style.maxHeight="0px"
    }
}
let buyBtn = document.querySelectorAll(".buy-now");
buyBtn.forEach((btn)=>{
    btn.addEventListener("click",buyBtnClicked);
});

function buyBtnClicked(e){
    let product = e.target.parentElement;
    let productImg = product.querySelector("img").src;
    let productPrice = product.querySelector("p").textContent;
    img.push(productImg);
    price.push(productPrice);
    title.push("badro")
    alert(cartProductsList.price[1])
}

function addToCartProduct(){
    for(let i=0 ; i<cartProductsList.title.length ; i++){
        let cartTable = document.querySelector(".table");
        let rowTable = document.createElement("tr");
        rowTable.classList.add("product-row")
        rowTable.innerHTML = '<td><div class="cart-info"><img src="'+cartProductsList.img[i]+'"><div><p>'+cartProductsList.title[i]+'</p><i>Price: '+cartProductsList.price[i]+'</i><br><a onclick="onItemRemove(this)">Remove</a></div></div></td><td><input type="number" value="1" onchange="onQuantityChange(this)"></td><td class="products-price">$50.00</td>'
        cartTable.append(rowTable)
        updateTotal();
    }
}
//-----------------Login Page--------------------
var LoginForm = document.getElementById("LoginForm");
var RegisterForm = document.getElementById("RegisterForm");
var indicator = document.getElementById("indicator");
function register(){
    RegisterForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)"
}
function login(){
    RegisterForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)"
}
//------------------Cart Page--------------------

addToCartProduct();
updateTotal();

function onQuantityChange(e){
    if(isNaN(e.value) || e.value <1){
        e.value = 1;
        updateTotal();
    }else{
        updateTotal();
    } 
}

function onItemRemove(e){
    let element = e.parentElement.parentElement.parentElement.parentElement;
    element.remove();
    updateTotal();
}

function updateTotal(){
    let cartProducts = document.querySelectorAll(".product-row")
    let total = 0;
    cartProducts.forEach((product)=>{
        var totalPrices = document.querySelector(".total-price");
        var quantity = product.querySelector("input").value;
        var price = product.querySelector("i").textContent.replace("Price: $","");
        var productTotalPrice = product.querySelector(".products-price");
        var subTotal = totalPrices.querySelector(".sub-total");
        var tax = totalPrices.querySelector(".tax");
        var totalPrice = totalPrices.querySelector(".total");
        productTotalPrice.textContent = "$"+ price*quantity;
        total += parseFloat(productTotalPrice.textContent.replace("$",""));
        subTotal.textContent = "$"+total; 
        totalPrice.textContent = "$"+parseFloat(Number(subTotal.textContent.replace("$",""))+Number(tax.textContent.replace("$","")));
    });
}





