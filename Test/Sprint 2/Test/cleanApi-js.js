const url = "https://restcountries.com/v3.1/all";

controller(url);

function controller(url) {
  const worldArr = getDataAndCreateArray(url);
}

function getDataAndCreateArray(link) {
  const worldArray = [];
  const currenciesArray = [];
  const continentsArray = [];
  let posi = document.querySelector("body");
  const tab = document.createElement("table");
  const selFieldCurrencies = document.createElement("select");
  const selFieldContinent = document.createElement("select");
  posi.appendChild(selFieldCurrencies);
  posi.appendChild(selFieldContinent);
  fetch(link)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        const country = {
          flag: data[i].flags.svg,
          name: data[i].name.common,
          capital: [],
          languages: [],
          population: data[i].population,
          continents: [],
          maps: data[i].maps.openStreetMaps,
          currenciesShort: [],
          currenciesLong: [],
          currenciesSymbol: [],
        };

        if (data[i].capital != undefined) {
          for (j = 0; j < data[i].capital.length; j++) {
            country.capital.push(data[i].capital[j]);
          }
        } else {
          country.capital.push("N.A.");
        }
        for (j = 0; j < data[i].continents.length; j++) {
          country.continents.push(data[i].continents[j]);
        }

        if (data[i].languages != undefined) {
          const langArr = Object.values(data[i].languages);
          for (j = 0; j < Object.values(data[i].languages).length; j++) {
            country.languages.push(Object.values(data[i].languages)[j]);
          }
        }

        if (data[i].currencies != undefined) {
          for (j = 0; j < Object.keys(data[i].currencies).length; j++) {
            country.currenciesShort.push(Object.keys(data[i].currencies)[j]);

            country.currenciesLong.push(
              Object.values(data[i].currencies)[j].name
            );
            country.currenciesSymbol.push(
              Object.values(data[i].currencies)[j].symbol
            );
          }
        }
        currenciesArray.push(country.currenciesShort);
        continentsArray.push(country.continents);
        worldArray.push(country);
      }
      createDropDown(currenciesArray, selFieldCurrencies);
      createDropDown(continentsArray, selFieldContinent);
      erstelleTableMitWorldArray(worldArray, posi, tab);
      console.log(worldArray);
      return worldArray;
    });
}
function createFilteredTable(worldArray, posi, tab, filter1, filter2) {}
function erstelleTableMitWorldArray(worldArray, posi, tab) {
  for (i = 0; i < worldArray.length; i++) {
    let row = document.createElement("tr");
    let rowTD1 = document.createElement("td");
    rowTD1.innerHTML = `<img src="${worldArray[i].flag}"></img>`;
    let rowTD2 = document.createElement("td");
    rowTD2.innerText = worldArray[i].name;
    rowTD2.id = "name";
    let rowTD3 = document.createElement("td");
    rowTD3.innerText = worldArray[i].capital;
    rowTD3.id = "capital";
    let rowTD4 = document.createElement("td");
    rowTD4.innerText = worldArray[i].languages;
    rowTD4.id = "languages";
    let rowTD5 = document.createElement("td");
    rowTD5.innerText = worldArray[i].population;
    rowTD5.id = "population";
    let rowTD6 = document.createElement("td");
    rowTD6.innerHTML = `<a href="${worldArray[i].maps}"><button>Show Map</button></a>`;
    rowTD6.id = "maps";
    let rowTD7 = document.createElement("td");
    let rowTD71 = document.createElement("ul");
    for (j = 0; j < worldArray[i].currenciesLong.length; j++) {
      rowTD71.innerHTML += `<li>${worldArray[i].currenciesShort[j]}||${worldArray[i].currenciesLong[j]}</li>`;
    }
    tab.appendChild(row);
    row.appendChild(rowTD1);
    row.appendChild(rowTD2);
    row.appendChild(rowTD3);
    row.appendChild(rowTD4);
    row.appendChild(rowTD5);
    row.appendChild(rowTD6);
    rowTD7.appendChild(rowTD71);
    row.appendChild(rowTD7);
  }
  posi.appendChild(tab);
}

function createDropDown(entryArray, selField) {
  workArray = entryArray.toString();
  workArray = Array.from(new Set(workArray.split(",")));
  for (i = 0; i < workArray.length; i++) {
    let option = document.createElement("option");
    option.innerText = workArray[i];
    selField.appendChild(option);
  }
}
