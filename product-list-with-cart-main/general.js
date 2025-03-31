let produkt1 = document.getElementById("produkt1");
let produkt2 = document.getElementById("produkt2");
let produkt3 = document.getElementById("produkt3");
let produkt4 = document.getElementById("produkt4");
let produkt5 = document.getElementById("produkt5");
let produkt6 = document.getElementById("produkt6");
let produkt7 = document.getElementById("produkt7");
let produkt8 = document.getElementById("produkt8");
let produkt9 = document.getElementById("produkt9");
let cartImg = document.getElementById("cartC");
var p = document.getElementById("ppp");

const cena1 = 6.50;
const cena2 = 7.00;
const cena3 = 8.00;
const cena4 = 5.50;
const cena5 = 4.00;
const cena6 = 5.00;
const cena7 = 4.50;
const cena8 = 5.50;
const cena9 = 6.50;





   

   
    let btntext = document.getElementById("btnTXT");
    let increment = document.getElementById("increment");
    let decrement = document.getElementById("decrement");
    let incSum = document.getElementById("incSum");
    let count = 1;
    let count1 = 1;
    let koszyk = document.getElementById("koszyk");
    let zamowienie = document.getElementById("zamowienie");
    let carbon = document.getElementById("carbon");
    const suma = 0;
    let ycart = document.getElementById("ycart");
    let confirmm = document.getElementById("confirm");

    
        

        produkt1.onclick = function(){
            if(count >= 0){

            
                produkt1.style.backgroundColor = "hsl(14, 86%, 42%)";
                btntext.style.display = "none";
                incSum.innerHTML = count;
                
        
                increment.style.display = "flex";
                decrement.style.display = "flex";
        
                increment.onclick = function(){
                    count++;
                    incSum.textContent = count;
                }
                decrement.onclick = function(){
                    count--;
                    incSum.textContent = count;
                }

                cartImg.style.display = "none";
                p.style.display = "none";


                koszyk.innerHTML = `<h3>Waffle with Berries</h3><br> <h5>${count}x</h5>  <h4>@ $${cena1}</h4> <b>$${cena1*count}</b>  <hr>`
                

                zamowienie.innerHTML = `<div id='summ'> <span id='ordertotal'>Order Total</span>       <span id='pricesum'>$${cena1*count}</span> </div> <br> `

                carbon.innerHTML = `<div id='carbon1'> <img src="assets/images/icon-carbon-neutral.svg" alt="">  This is a carbon-natural delivery</div>`

                confirmm.innerHTML = `<div id='buttonconfirm'>Confirm order</div>`
                ycart.innerHTML = ` <h1>Your Cart (${count})</h1> `
                }
                else if (count < 0){
                    produkt1.style.backgroundColor = "white";
                    btntext.style.display = "flex";
        
                    increment.style.display = "none";
                    decrement.style.display = "none";

                    koszyk.innerHTML = ` `;
                    zamowienie.innerHTML = ` `;
                    carbon.innerHTML= ` `;
                    confirmm.innerHTML=``;
                    cartImg.style.display = "flex";
                    p.style.display = "flex";
                    p.style.justifyContent = "center";


        
                    count++;
        }
    }

    

