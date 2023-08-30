function mainFunction() {
  const url = "https://restcountries.com/v3.1/all";
  createContainers();
  createTable();
  createHeader();

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const worldArray = createWorldArray(data);
      return worldArray;
    })
    .then((worldArray) => {
      createDropDown(worldArray);
      createRows(worldArray);
      setEventListener(worldArray);
    });
}

function createContainers() {
  const posi = document.querySelector("body");
  const div1 = document.createElement("div");
  div1.className = "großerContainer";
  const div2 = document.createElement("div");
  div2.className = "kleinerContainer";
  posi.appendChild(div1);
  div1.appendChild(div2);
}
const createTable = () => {
  const posi = document.querySelector(".kleinerContainer");
  posi.innerHTML = "";
  const tab = document.createElement("table");
  tab.className = "table table-dark table-striped table-bordered";
  posi.appendChild(tab);
};

const createHeader = () => {
  const contentArray = [
    "ID",
    "Flag",
    "Name",
    "Capitol",
    "Languages",
    "Population",
    "Currency",
    "Map",
  ];
  const tab = document.querySelector("table");
  const header = document.createElement("thead");
  header.className = "table-warning";
  const headerRow = document.createElement("tr");
  tab.appendChild(header);
  header.appendChild(headerRow);
  for (i = 0; i < contentArray.length; i++) {
    const headerCol = document.createElement("th");
    headerCol.textContent = contentArray[i];
    headerRow.appendChild(headerCol);
  }
};

const createWorldArray = (data) => {
  worldArray = [];
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

        country.currenciesLong.push(Object.values(data[i].currencies)[j].name);
        country.currenciesSymbol.push(
          Object.values(data[i].currencies)[j].symbol
        );
      }
    }
    worldArray.push(country);
  }
  return worldArray;
};
const createDropDown = (worldArray) => {
  const posi = document.querySelector("body");
  const selFieldCurrencies = document.createElement("select");
  selFieldCurrencies.id = "currencyDropDown";
  const selFieldContinent = document.createElement("select");
  selFieldContinent.id = "continentDropDown";
  populateDropDowns(worldArray, selFieldCurrencies);
  populateDropDowns(worldArray, selFieldContinent);
  posi.prepend(selFieldContinent);
  posi.prepend(selFieldCurrencies);
};

function populateDropDowns(entryArray, selField) {
  workArray = [];
  console.log(selField.id);
  if (selField.id == "currencyDropDown") {
    for (i = 0; i < entryArray.length; i++) {
      for (j = 0; j < entryArray[i].currenciesShort.length; j++)
        workArray.push(entryArray[i].currenciesShort[j]);
    }
  } else if (selField.id == "continentDropDown") {
    for (i = 0; i < entryArray.length; i++) {
      for (j = 0; j < entryArray[i].continents.length; j++)
        workArray.push(entryArray[i].continents[j]);
    }
  }
  workArray = workArray.toString();
  workArray = Array.from(new Set(workArray.split(",")));
  let option = document.createElement("option");
  option.innerText = "All";
  selField.appendChild(option);

  for (i = 0; i < workArray.length; i++) {
    let option = document.createElement("option");
    option.innerText = workArray[i];
    selField.appendChild(option);
  }
}
const createRows = (worldArray) => {
  const tab = document.querySelector("table");
  if (document.contains(document.querySelector("tbody"))) {
    document.querySelector("tbody").remove();
  }
  const body = document.createElement("tbody");
  tab.appendChild(body);
  for (i = 0; i < worldArray.length; i++) {
    const row = document.createElement("tr");
    const rowHeader = document.createElement("th");
    rowHeader.textContent = i + 1;
    rowHeader.scope = "row";
    const flag = document.createElement("td");
    flag.className = "flag";
    flag.innerHTML = `<img src="${worldArray[i].flag}" alt="${worldArray[i].name}" />`;
    const name = document.createElement("td");
    name.textContent = worldArray[i].name;
    const capitol = document.createElement("td");
    capitol.textContent = worldArray[i].capital;
    const language = document.createElement("td");
    language.textContent = worldArray[i].languages;
    const population = document.createElement("td");
    population.textContent = worldArray[i].population;
    const currency = document.createElement("td");
    currency.id = "currencyTD";
    const currencyUL = document.createElement("ul");
    currency.appendChild(currencyUL);
    for (y = 0; y < worldArray[i].currenciesLong.length; y++) {
      const curLi = document.createElement("ul");
      curLi.textContent = `${worldArray[i].currenciesSymbol[y]} - ${worldArray[i].currenciesLong[y]} (${worldArray[i].currenciesShort[y]})`;
      currencyUL.appendChild(curLi);
    }

    const map = document.createElement("td");
    map.className = "btnCell";
    map.innerHTML = `<a href="${worldArray[i].maps}"><button id="btn">Show Map</button></a>`;

    body.appendChild(row);
    row.appendChild(rowHeader);
    row.appendChild(flag);
    row.appendChild(name);
    row.appendChild(capitol);
    row.appendChild(language);
    row.appendChild(population);
    row.appendChild(currency);
    row.appendChild(map);
  }
};

const setEventListener = (worldArray) => {
  const continentDropDown = document.querySelector("#continentDropDown");
  continentDropDown.addEventListener("change", () => {
    filterByBoth(worldArray, currencyDropDown, continentDropDown);
  });

  const currencyDropDown = document.querySelector("#currencyDropDown");
  currencyDropDown.addEventListener("change", () => {
    filterByBoth(worldArray, currencyDropDown, continentDropDown);
  });
};
const filterByBoth = (worldArray, currency, continent) => {
  const selectorCurrency = "#" + currency.id;
  const selectorContinent = "#" + continent.id;
  const valueCurrency = document.querySelector(selectorCurrency).value;
  const valueContinent = document.querySelector(selectorContinent).value;
  const filteredArray = [];
  for (i = 0; i < worldArray.length; i++) {
    for (j = 0; j < worldArray[i].currenciesShort.length; j++) {
      if (valueCurrency != "All") {
        if (valueCurrency == worldArray[i].currenciesShort[j]) {
          filteredArray.push(worldArray[i]);
        }
      } else {
        filteredArray.push(worldArray[i]);
      }
    }
  }

  const finalArray = [];
  if (valueContinent != "All") {
    for (x = 0; x < filteredArray.length; x++) {
      console.log(filteredArray.continents);
      for (y = 0; y < filteredArray[x].continents.length; y++) {
        if (valueContinent == filteredArray[x].continents[y]) {
          finalArray.push(filteredArray[x]);
        }
      }
    }
    const uniqueArray = [...new Set(finalArray)];
    createRows(uniqueArray);
  } else {
    const uniqueArray = [...new Set(filteredArray)];
    createRows(uniqueArray);
  }
};
const createHeadLine = (tab) => {
  const header = document.createElement("thead");
  header.className = "table-warning";
  const headerCol1 = document.createElement("th");
  headerCol1.textContent = "ID";
  const headerCol2 = document.createElement("th");
  headerCol2.textContent = "Flag";
  const headerCol3 = document.createElement("th");
  headerCol3.textContent = "Name";
  const headerCol4 = document.createElement("th");
  headerCol4.textContent = "Capitol";
  const headerCol5 = document.createElement("th");
  headerCol5.textContent = "Languages";
  const headerCol6 = document.createElement("th");
  headerCol6.textContent = "Population";
  const headerCol7 = document.createElement("th");
  headerCol7.textContent = "Currency";
  const headerCol8 = document.createElement("th");
  headerCol8.textContent = "Map";

  tab.appendChild(header);
  header.appendChild(headerCol1);
  header.appendChild(headerCol2);
  header.appendChild(headerCol3);
  header.appendChild(headerCol4);
  header.appendChild(headerCol5);
  header.appendChild(headerCol6);
  header.appendChild(headerCol7);
  header.appendChild(headerCol8);
};
mainFunction();
