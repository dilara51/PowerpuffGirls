# 📝 Review-Bericht – FocusFlow

## 1. Überblick

- **Projektname:** FocusFlow – PowerpuffGirls
- **Review-Typ:** Technisches Review
- **Datum:** 02. April 2025
- **Ort:** Remote (Online-Meeting)
- **Teilnehmende:**
  - **Moderatorin:** Seyma Okumus
  - **Autorin:** Dilara Özkan
  - **Reviewer:** Alican Solmaz
  - **Technischer Reviewer:** Sinan Agtas

---

## 2. Ziel des Reviews

Ziel des Reviews war es, die Qualität der bestehenden Spezifikation, der Backend-Implementierung und der Unit-Tests zu analysieren. Besonderes Augenmerk lag auf der strukturellen Umsetzung, der Dokumentation und der Einhaltung von Best Practices.

---

## 3. Überprüfte Artefakte

- Projektdokumentation: `PowerpuffGirls – Software Testing.pdf`
- Backend-Code: `Task.js`, `Team.js`, `User.js`
- Unit Tests (Jest) inklusive `--coverage`-Bericht
- Systemdiagramme: Use Case Diagramm & Systemkontext
- Statische Codeanalyse-Tools:
  - **Jest** (Tests & Coverage)
  - **Prettier** (Style Checker via VSCode Extension)

---

## 4. Befunde

### Anforderungen
- ✅ Klar und nachvollziehbar formuliert
- ⚠️ Validierungslogik & Fehlerszenarien fehlen

### Use Cases
- ✅ Logischer Aufbau
- ⚠️ Visualisierung (Diagramm) fehlt in der Dokumentation

### Codestruktur
- ✅ Saubere Modultrennung (Task, Team, User)
- ⚠️ Kommentare und erklärende Notizen könnten ergänzt werden

### Tests
- ✅ Alle Tests bestanden, 100 % Coverage erreicht
- ⚠️ Coverage-Report sollte im GitHub-Repo verlinkt oder eingebunden werden

### Tools
- ✅ Prettier über VSCode-Extension für saubere Formatierung
- ⚠️ `.prettierrc` zur zentralen Konfiguration fehlt aktuell

---

## 5. Empfehlungen

- Ergänzung von Randfällen in den Anforderungen
- Grafische Use-Case-Darstellung integrieren
- Kommentare in komplexeren Codestellen ergänzen
- Coverage-Bericht als Teil der CI oder im README sichtbar machen
- `.prettierrc` zur Vereinheitlichung der Formatierungsregeln einführen

---

## 6. Fazit

Das technische Review war strukturiert, zielgerichtet und produktiv. Alle Beteiligten konnten ihre Rollen aktiv einbringen. Der Mix aus Review durch Menschen und objektiven Tools (Jest & Prettier) erwies sich als effektiv.
