fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((country) => {
      const line = `<tr><td>${country.name.common}</td><td>${country.region}</td><td>${country.population}</td></tr>`;
      document.querySelector("tbody").insertAdjacentHTML("beforeend", line);
    });
  });
link = "https://restcountries.com/v3.1/all";
let popArray = fetchPopuData(link);
//console.log(popArray);
function fetchPopuData(link) {
  let res = [];
  fetch(link)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((country) => {
        res.push(country.population);
      });
    });
  return res;
}
function formatPopArray(array) {
  for (let i = 0; i < array.length; i++) {}
}

// ! recursive Function machen
// ! check zahl>3 -> .[letzten3Ziffern] zu array ->
// ! letzten Ziffern löschen -> da capo

let num = 813867;
function giveDots(num) {
  const res = num.toLocaleString();
  return res;
}

number2 = "1.134.813.867";
function splitNum(num) {
  if (num.length > 6) {
    let res = num.substring(0, num.length - 6);
    let res2 = num.substring(num.length - 6, num.length);
    let res3 = giveDots(parseInt(res2));
    return `${res} Mio. ${res3}`;
  }
}
let zahl = splitNum(number2);
console.log(zahl);
