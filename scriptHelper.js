// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
    document,
    name,
    diameter,
    star,
    distance,
    moons,
    imageUrl
) {
    // Here is the HTML formatting for our mission target div.
    /*
                   <h2>Mission Destination</h2>
                   <ol>
                       <li>Name: </li>
                       <li>Diameter: </li>
                       <li>Star: ${star}</li>
                       <li>Distance from Earth: </li>
                       <li>Number of Moons: </li>
                   </ol>
                   <img src="">
      */
}

function validateInput(testInput) {
    if (testInput.value === "") {
        return "Empty";
    } else if (isNaN(testInput.value)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //declarations
    let submits = [pilot, copilot, fuelLevel, cargoLevel];
    let emptyAlert = false;
    let fuelStatusMsg = 'Fuel level high enough for launch';
    let cargoStatusMsg = 'Cargo mass low enough for launch';
    let launchStatus = document.getElementById("launchStatus");
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "#419F6A";

    //loop through submissions to alert empty form submit
    for (i = 0; i < submits.length; i++) {
        if (validateInput(submits[i]) === "Empty") {
            emptyAlert = true;
        }
    }
    if (emptyAlert === true) {
        alert("All fields are required!");
        //validate correct input types
    } else if (
        validateInput(pilot) === "Is a Number" ||
        validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoLevel) === "Not a Number"
    ) {
        alert("Make sure to enter valid information for each field!");
    }
    //check fuelLevel
    if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        fuelStatusMsg = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";  
    }
    //check cargoLevel
    if (cargoLevel.value > 10000) {
        list.style.visbility = "visible";
        cargoStatusMsg = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "#C7254E";
    }
    //update shuttle requirements
    list.innerHTML = `
    <ol>
        <li id="pilotStatus" data-testid="pilotStatus">${pilot.value} is ready for launch</li>
        <li id="copilotStatus" data-testid="copilotStatus">${copilot.value} is ready for launch</li>
        <li id="fuelStatus" data-testid="fuelStatus">${fuelStatusMsg}</li>
        <li id="cargoStatus" data-testid="cargoStatus">${cargoStatusMsg}</li>
    </ol>
    `

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) { });

    return planetsReturned;
}

function pickPlanet(planets) { }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
