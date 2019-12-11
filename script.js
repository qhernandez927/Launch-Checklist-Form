// Write your JavaScript code here!

let isEmptyError = false
let isFaulty = false 
let isCoPilotError = false
let isCargoError = false
let isPilotError = false
let isFuelError = false



window.addEventListener('load',function(){

   let form = document.querySelector("form");

   form.addEventListener("submit", function (event) {
      
      isEmptyError = false
      isFaulty = false 
      isCoPilotError = false
      isCargoError = false
      isPilotError = false
      isFuelError = false

      let pilotNameInput = document.querySelector("input[name = pilotName]")
      let coPilotNameInput = document.querySelector("input[name = copilotName]")
      let fuelLevelInput = document.querySelector("input[name = fuelLevel]")
      let cargoMassInput = document.querySelector("input[name = cargoMass]")
      
      processPilot(pilotNameInput.value);
      processCoPilot(coPilotNameInput.value);
      checkFuelLevel(fuelLevelInput.value);
      checkCargoMass(cargoMassInput.value);
      flagCheck();
      setLaunchStatusElement();
      setFaultyItemsElement();
      event.preventDefault();
      
      if(!isInvalidInputs() && !isEmptyError && !isFaulty){
         fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then( function(json) {
               const div = document.getElementById("missionTarget")
                  div.innerHTML = `<h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[1].name}</li>
                     <li>Diameter: ${json[1].diameter}</li>
                     <li>Star: ${json[1].star}</li>
                     <li>Distance from Earth: ${json[1].distance}</li>
                     <li>Number of Moons: ${json[1].moons}</li>
                  </ol>
                  <img src="${json[1].image}">`
                  
               });
            });
         };
   });
});

function processPilot(input){
   isPilotError = checkStringInput(input)
   if(!isPilotError && !isEmptyError){
      setPilotNameElement (input)
   }
}

function processCoPilot(input){
   isCoPilotError = checkStringInput(input)
   if(!isCoPilotError && !isEmptyError){
      setCoPilotNameElement (input)
   }
}

function checkStringInput(input){
   checkIfEmptyInput(input)
   if(!isNaN(input) && !isEmptyError){
      return true;
   }
   return false;
}


function checkIfEmptyInput(input){
   if(input == null || input == ''){
      isEmptyError = true
   }
};

function setPilotNameElement(input){
   document.getElementById('pilotStatus').innerHTML = `Pilot ${input} ready `
   
}

function setCoPilotNameElement(input){
   document.getElementById('copilotStatus').innerHTML = `Co-pilot ${input} ready `
   
}

function checkFuelLevel(input){
   isFuelError = checkNumberInput(input)
   if(input < 10000 && !isFuelError && !isEmptyError ){
      isFaulty = true
      document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey."
   }else{
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
   }
}

function checkCargoMass(input){
   isCargoError = checkNumberInput(input)
   if(input > 10000  && !isCargoError && !isEmptyError  ){
      isFaulty = true
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
   }else{
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
   }
}


function checkNumberInput(input){
   checkIfEmptyInput(input)
   if(isNaN(input) && !isEmptyError){

      return true;
   }
   return false;
}

function flagCheck(){
   if(isEmptyError){
      alert("All fields must have input")
   }
   else if(isInvalidInputs()){
      alert("All fields must have valid input")
   }
}

function isInvalidInputs(){
   if(isPilotError || isCoPilotError || isFuelError || isCargoError){
      
      return true;
      
   }
   return false
}

function setLaunchStatusElement(){
   let launchStatus = document.getElementById("launchStatus")
   if(!isInvalidInputs() && !isEmptyError && !isFaulty) 
   {
      launchStatus.innerHTML = "Shuttle ready for launch"
      launchStatus.style.color = 'green'
   } else {
      launchStatus.innerHTML = "Shuttle not ready for launch"
      launchStatus.style.color = 'red' 
   }
}

function setFaultyItemsElement(){   
   if( !isEmptyError && !isInvalidInputs()) {
      document.getElementById("faultyItems").style.visibility = "visible";
   } else {
      document.getElementById("faultyItems").style.visibility = "hidden";
   }
}




