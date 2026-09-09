let cart = [];
let total = 0;


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    showCart();
}


function showCart() {

    let list = document.getElementById("cartList");

    list.innerHTML = "";


    if (cart.length === 0) {
        list.innerHTML = "Заказ жок";
    }


    cart.forEach(function (item, index) {

        list.innerHTML += `
            <div class="cart-item">
                ${item.name} — ${item.price} сом

                <button onclick="removeItem(${index})">
                    Өчүрүү
                </button>
            </div>
        `;

    });


    document.getElementById("total").innerText = total;
}


function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    showCart();
}


function checkout() {

    if (cart.length === 0) {
        alert("Корзина бош!");
        return;
    }

    alert(
        "Заказыңыз кабыл алынды! 🍔\n" +
        "Жалпы сумма: " + total + " сом"
    );

    cart = [];
    total = 0;

    showCart();
}