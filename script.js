// Write your JavaScript code here!

window.addEventListener("load", function () {
  let button = document.getElementById("formSubmit");
  button.addEventListener("click", function (event) {
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
  });

  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      missionPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        missionPlanet.name,
        missionPlanet.diameter,
        missionPlanet.star,
        missionPlanet.distance,
        missionPlanet.moons,
        missionPlanet.image
      );
    });
});
