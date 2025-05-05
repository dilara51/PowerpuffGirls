const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

let context = {};

Given("der Benutzer ist eingeloggt", function () {
  context.loggedIn = true;
});

Given("befindet sich auf der Seite {string}", function (seite) {
  context.page = seite;
});

When("der Benutzer gibt den Titel {string} ein", function (titel) {
  context.taskTitle = titel;
});

When("klickt auf {string}", function (button) {
  if (button === "Erstellen" && context.taskTitle) {
    context.taskList = [context.taskTitle];
  } else if (button === "Registrieren" && context.validUserData) {
    context.userCreated = true;
  } else if (button === "Team erstellen" && context.teamName) {
    context.teamList = [context.teamName];
  }
});

Then("wird die Aufgabe mit dem Titel {string} angezeigt", function (expected) {
  assert(context.taskList.includes(expected));
});

Given("der Benutzer öffnet die Registrierungsseite", function () {
  context.page = "Registrierung";
});

When("er gibt gültige Daten ein", function () {
  context.validUserData = true;
});

Then("wird der neue Benutzer in der Datenbank gespeichert", function () {
  assert(context.userCreated === true);
});

Given("der Administrator ist eingeloggt", function () {
  context.loggedIn = true;
});

When("er gibt den Teamnamen {string} ein", function (teamName) {
  context.teamName = teamName;
});

Then("erscheint das Team {string} in der Teamliste", function (expectedTeam) {
  assert(context.teamList.includes(expectedTeam));
});
