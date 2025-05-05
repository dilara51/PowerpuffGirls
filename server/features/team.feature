Feature: Team erstellen

  Als Administrator
  möchte ich ein neues Team erstellen
  um Benutzer zu organisieren.

  Scenario: Erfolgreiches Erstellen eines Teams
    Given der Administrator ist eingeloggt
    And befindet sich auf der Seite "Teamverwaltung"
    When er gibt den Teamnamen "Frontend" ein
    And klickt auf "Team erstellen"
    Then erscheint das Team "Frontend" in der Teamliste
