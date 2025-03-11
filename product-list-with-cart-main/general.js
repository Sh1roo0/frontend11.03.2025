let produkt1 = document.getElementById("produkt1");
let produkt2 = document.getElementById("produkt2");
let produkt3 = document.getElementById("produkt3");
let produkt4 = document.getElementById("produkt4");
let produkt5 = document.getElementById("produkt5");
let produkt6 = document.getElementById("produkt6");
let produkt7 = document.getElementById("produkt7");
let produkt8 = document.getElementById("produkt8");
let produkt9 = document.getElementById("produkt9");


let koszyk = document.getElementById("koszyk");
produkt1.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Waffle with Berries</h3> <br> <p>$6.50</p> <hr>";
})
produkt2.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Vanilla Bean Crème Brûlée</h3> <br> <p>$7.00</p> <hr>";
})
produkt3.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Macaron Mix of Five</h3>  <br> <p>$8.00</p> <hr>";
})
produkt4.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Classic Tiramisu</h3> <br> <p>$5.50</p> <hr>";
})
produkt5.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Pistachio Baklava</h3> <br> <p>$4.00</p> <hr>";
})
produkt6.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Lemon Meringue Pie</h3> <br> <p>$5.00</p> <hr>" ;
})
produkt7.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Red Velvet Cake</h3> <br> <p>$4.50</p> <hr>";
})
produkt8.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Salted Caramel Brownie</h3> <br> <p>$4.50</p> <hr>";
})
produkt9.addEventListener("click", function(){
    koszyk.innerHTML += "<h3>Vanilla Panna Cotta</h3> <br> <br> <p>$6.50</p> <hr> ";
})