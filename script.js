"use strict";

const API_URL = "https://run.mocky.io/v3/f8bdd575-7798-4f07-826a-43568b6b13d5";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);

    }
}

function showOption(data) {
    const companyOption = document.querySelector("#floatingSelect");
    const subjectOption = document.querySelector("#subjectSelect");

    for (let dt of data) {
        addOption(companyOption, dt.company_name);
        addOption(subjectOption, dt.subject);
    }
}

function addOption(selectElement, optionValue) {
    const option = document.createElement("option");
    option.innerText = optionValue;
    option.value = optionValue;
    selectElement.appendChild(option);
}


fetchData(API_URL)
    .then(data => showOption(data))
    .catch(error => console.error("Error:", error));