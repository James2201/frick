// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors
  for (let i = 0; i < colorData.length; i++){
    outputEl.innerHTML += `<div>${colorData[i].name} - ${colorData[i].family}</div>`
  }
  
}

function brightColors() {
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  
  for (let i = 0; i < colorData.length; i++){
    if(colorData[i].brightness >= 200 ){
      outputEl.innerHTML += `<div>${colorData[i].name} - ${colorData[i].family}</div>`
    }
  }
  
}

function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  let count = 0;
  for (let i = 0; i < colorData.length; i++){
    if (colorData[i].family === "Pink" || colorData[i].family === "Red"){
      count++
    }
  }
  outputEl.innerHTML = `<p>count:</p> ${count}`;
}

function familySearch() {
  let count = 0;
  let input = prompt("TYPE NOW");
  for (let i = 0; i < colorData.length; i++){
    if (colorData[i].family === input){
      count++
      outputEl.innerHTML += `<div>${colorData[i].name} in ${colorData[i].family}</div>`
    }
  }
  outputEl.innerHTML += `<p>count:</p> ${count}`;
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
}

function startLetterSearch() {
  let count = 0;
  let input = prompt("TYPE NOW");
  for (let i = 0; i < colorData.length; i++){
    if (colorData[i].name[0] === input){
      outputEl.innerHTML += `<div>${colorData[i].name} - ${colorData[i].family}</div>`
      count++;
    }
  }
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML += `<p>count:</p> ${count}`;
}