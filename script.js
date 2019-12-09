// Write your JavaScript code here!

window.addEventListener('load',function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      //alert("Hi")
      let pilotNameInput = new Pilot(document.getElementById("input[name = pilotName]"))
      pilotNameInput.hi()
      let coPilotNameInput = document.getElementById("input[name = copilotName]")
      let fuelLevelInput = document.getElementById("input[name = fuelLevel]")
      let cargoMassInput = document.getElementById("input [name = cargoMass]")

      if(pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields must have input")
      } else if ( pilotNameInput.value === String){
         alert("Must have valid input. Please input a name.")
      }
      
      

   })
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
