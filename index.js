let BtnPLUS = document.getElementsByClassName("btn-plus");
let BtnMinus = document.getElementsByClassName(" btn-minus");
let BtnHeart = document.getElementsByClassName("heart");
let BtnTrash = document.getElementsByClassName("trash");


for (const btn of BtnPLUS) {
    btn.addEventListener("click", function () {
        btn.nextElementSibling.textContent++;
        let qtite = document.getElementsByClassName("qte");
        let price = document.getElementsByClassName("price-qte");
        let Totatlprice = document.querySelector(".total-price");
        let sum = 0;
        for (let i = 0; i < qtite.length; i++) {
            sum = sum + Number(qtite[i].textContent) * Number(price[i].textContent);
        }
        Totatlprice.textContent = sum;

    })
}
for (const btn of BtnMinus) {
    btn.addEventListener("click", function () {
        if (btn.previousElementSibling.textContent > 0)
            btn.previousElementSibling.textContent--;
        let qtite = document.getElementsByClassName("qte");
        let price = document.getElementsByClassName("price-qte");
        let Totatlprice = document.querySelector(".total-price");
        let sum = 0;
        for (let i = 0; i < qtite.length; i++) {
            sum = sum + Number(qtite[i].textContent) * Number(price[i].textContent);
        }
        Totatlprice.textContent = sum;
    })
}
for (const heart of BtnHeart) {
    heart.addEventListener("click", function () {
        heart.classList.toggle("toggleHeart");
    })

}
for (const trash of BtnTrash) {

    trash.addEventListener("click", function () {
        trash.parentElement.parentElement.parentElement.remove();
        let qtite = document.getElementsByClassName("qte");
        let price = document.getElementsByClassName("price-qte");
        let Totatlprice = document.querySelector(".total-price");
        let sum = 0;
        for (let i = 0; i < qtite.length; i++) {
            sum = sum + Number(qtite[i].textContent) * Number(price[i].textContent);
        }
        Totatlprice.textContent = sum;
    })
}