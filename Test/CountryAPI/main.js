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
let popArray = fetchPopu(link);
console.log(popArray);
function fetchPopu(link) {
  let res = [];
  fetch(link)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((country) => {
        //  console.log(country.population);
        res.push(country.population);
      });
    });
  return res;
}
// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
function giveDots(num) {
  number = 34813867;
  const res = parseInt(num).toLocaleString();
  return res;
}

number2 = "34813867";
function splitNum(num) {
  if (num.length > 6) {
    let res2 = num.substring(num.length - 6, num.length);
    return res2;
  }
}
