Feature: Aufgabe erstellen

  Als Benutzer
  möchte ich eine neue Aufgabe erstellen
  um meine Aufgaben zu verwalten.

  Scenario: Erfolgreiches Erstellen einer Aufgabe
    Given der Benutzer ist eingeloggt
    And befindet sich auf der Seite "Neue Aufgabe"
    When der Benutzer gibt den Titel "Review schreiben" ein
    And klickt auf "Erstellen"
    Then wird die Aufgabe mit dem Titel "Review schreiben" angezeigt
