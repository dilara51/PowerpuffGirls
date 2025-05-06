Feature: Benutzer registrieren

  Als neuer Benutzer
  möchte ich mich registrieren
  um FocusFlow nutzen zu können.

  Scenario: Erfolgreiche Registrierung
    Given der Benutzer öffnet die Registrierungsseite
    When er gibt gültige Daten ein
    And klickt auf "Registrieren"
    Then wird der neue Benutzer in der Datenbank gespeichert
