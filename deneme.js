const baslik = document.getElementById("sonuc");
const btn = document.getElementById("btn");
const isimInput = document.getElementById("isim");
const liste = document.getElementById("liste");

let sayi1 = document.getElementById("sayi1");
let sayi2 = document.getElementById("sayi2");

const btnTopla = document.getElementById("topla");
const btnCikar = document.getElementById("cikar");
const btnCarp = document.getElementById("carp");
const btnBol = document.getElementById("bol");
const sonuc2 = document.getElementById("sonuc2");

btn.addEventListener("click", () => {
  if (isimInput.value == "") {
    alert("Lütfen bir isim giriniz");
  } else {
    baslik.innerHTML = isimInput.value;
    baslik.style.backgroundColor = "red";
    baslik.style.color = "purple";
    baslik.style.fontSize = "50px";

    const yenimadde = document.createElement("li");
    yenimadde.innerHTML = isimInput.value;
    yenimadde.addEventListener("click", () => {
      liste.removeChild(yenimadde);
    });

    liste.appendChild(yenimadde);
    isimInput.value = "";
  }
});

isimInput.addEventListener("keypress", (olay) => {
  if (olay.key === "Enter") {
    btn.click();
  }
});

btnTopla.addEventListener("click", () => {
  let sonuc = parseFloat(sayi1.value) + parseFloat(sayi2.value);
  sonuc2.innerHTML = "Sonuç: " + sonuc;
});
btnCikar.addEventListener("click", () => {
  let sonuc = parseFloat(sayi1.value) - parseFloat(sayi2.value);
  sonuc2.innerHTML = "Sonuç: " + sonuc;
});
btnCarp.addEventListener("click", () => {
  let sonuc = parseFloat(sayi1.value) * parseFloat(sayi2.value);
  sonuc2.innerHTML = "Sonuç: " + sonuc;
});
btnBol.addEventListener("click", () => {
  let sonuc = parseFloat(sayi1.value) / parseFloat(sayi2.value);
  sonuc2.innerHTML = "Sonuç: " + sonuc;
});
