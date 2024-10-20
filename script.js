function populateYearSelect(startYear, endYear, selectElement) {
    for (let year = startYear; year <= endYear; year++) {
        let option = document.createElement("option");
        option.value = year;
        option.text = year;
        selectElement.appendChild(option);
    }
}

const currentYear = new Date().getFullYear();

const birthYearSelect = document.querySelector("select[name='birth_year']");
populateYearSelect(1950, currentYear, birthYearSelect);

const elementaryStartYearSelect = document.getElementById("elementary-school-year-start");
const elementaryEndYearSelect = document.getElementById("elementary-school-year-end");
const juniorHighStartYearSelect = document.getElementById("junior-high-school-year-start");
const juniorHighEndYearSelect = document.getElementById("junior-high-school-year-end");
const seniorHighStartYearSelect = document.getElementById("senior-high-school-year-start");
const seniorHighEndYearSelect = document.getElementById("senior-high-school-year-end");

populateYearSelect(2000, currentYear, elementaryStartYearSelect);
populateYearSelect(2000, currentYear, elementaryEndYearSelect);
populateYearSelect(2000, currentYear, juniorHighStartYearSelect);
populateYearSelect(2000, currentYear, juniorHighEndYearSelect);
populateYearSelect(2000, currentYear, seniorHighStartYearSelect);
populateYearSelect(2000, currentYear, seniorHighEndYearSelect);
