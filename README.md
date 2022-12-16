# krisenchat riddle 👨‍💻👩‍💻

Willkommen beim *krisenchat-iddle*. Wir haben uns drei-vier Aufgaben überlegt, die deine Fähigkeiten im Bereich `react` und `blitzJS` und einen Einblick in deine zukünftige Arbeit geben sollen. 🛠

Recherchen sind erlaubt und das Kopieren von Code aus dem Internet ist erlaubt, solange die Quellenangabe stimmt. Da wir nicht verlangen, dass du BlitzJS perfekt, kannst du uns auch gerne nach Hinweisen fragen. Wir haben einige vorbereitet und kleine Hinweise findest du unter der Aufgabe. 😉

Hier sind schonmal ein paar hilfreiche Quellen:

- <https://reactjs.org/>
- <https://blitzjs.com/>
- <https://prisma.io/>

Wir wünschen dir viel Spaß beim Bearbeiten! 🥳

## Aufgabe 0: Setup ⚙

Als Voraussetzung benötigt du [nodeJS](https://nodejs.org/en/download/) und [Docker](https://docs.docker.com/get-docker/). Installiere diese Tools bitte, um fortzufahren.

Um das Projekt aufzusetzen, musst du es zunächst ein Fork dieses Repositoriums erstellen und 
auf deinen lokalen Rechner klonen.

Installiere nun die benötigten Dependencies mit dem Command:

```bash
yarn install
```

Indem du den Docker-Container startest, wird die Datenbank hochgefahren.

```bash
docker-compose up -d
```

BlitzJS kommt mit dem Datenbankmanagementsystem Prisma, womit du die hinterlegten Migrationen anwenden kannst.

```bash
blitz prisma migrate dev
```

Wir stellen die das Skript `scripts/create-first-user.js` bereits, um einen neuen Nutzer zu erstellen. Wird gerne einen Blick rein und führe es aus mit

```bash
node scripts/create-first-user.js
```

Mit dem folgenden Command kannst du nun die Anwendung starten, welche du dir auf [localhost:3000](localhost:3000/) anschauen kannst.

```bash
blitz dev
```

Prisma ist unsere Schnittstelle zur Datenbank. Du kannst dir diese entweder mit einem Datenbank Administrationstool, wie [pgAdmin](https://www.pgadmin.org/) oder im Prisma Studio sichten, Einträge bearbeiten und hinzufügen.

```bash
blitz prisma studio
```

Wenn du die Anwendung und das Prisma Studio sehen kannst, dann hat die Installation funktioniert 🎉

Viel Spaß beim Vertraut machen mit dem Code und der Anwendung. 😊

## Aufgabe 1: Schützen von Artikeln 🔒

Wenn du dir die Startseite der Website anschaust, findest du eine Liste Artikeln finden. Ein Artikel hat verschiedene Attribute, die du in `db/schema.prisma` nachvollziehen kannst. Beim Klick auf einen Artikel wirst du weitergeleitet zum gesamten Artikel. Außerdem können sich Nutzer bei der Website einloggen.

Dein:e Auftraggeber:in wünscht sich nun, dass der Typ eines Artikels auch Auswirkungen hat. Es sollen nur Nutzer, die eingeloggt sind, Artikel mit dem Typ `CLOSE` lesen dürfen.

<details>
    <summary>Hinweis 1 ✒</summary>
    Wie wird ermittelt, ob "Login" oder "Logout" angezeigt werden soll?
</details>

<details>
    <summary>Hinweis 2 ✒</summary>
    Was passiert, wenn jemand das falsche Passwort eingibt?
</details>

## Aufgabe 2: Verstecken von Artikeln 📖

Dein:e Auftraggeber:in freut sich sehr über das neue Feature. Allerdings melden Nutzer, die keinen Account haben, einen Fehler: Wenn sie auf der Startseite auf Artikel klicken, dann bekommen sie bei manchen Artikeln den Fehler, dass sie sich einloggen sollen.

Daraufhin fragt dich dein:e Auftraggeber:in nach einem neuen Feature: Es sollen zukünftig nur Artikel auf der Startseite angezeigt werden, welche die Person auch sehen darf.

<details>
    <summary>Hinweis 1 ✒</summary>
    Du kannst bei Prisma verschachtelte where-clauses verwenden und damit auf Relationen zugreifen.
</details>

<details>
    <summary>Hinweis 2 ✒</summary>
    Wie wird die `id` an Query `getSingleArticle` gegeben? Kann das helfen entweder `OPEN` oder `CLOSED` Artikel zu erhalten?
</details>

## Aufgabe 3: Verwendung von `useFetchSingleArticle`

_Hinweis: Diese Aufgabe ist eher zum Reflektieren gedacht. Vielleicht findest du mehrere Lösungen und kannst sie miteinander vergleichen._

Beim Beobachten der Datenbank fällt die auf, dass die Query `getSingleArticle` sehr häufig ausgeführt wird. Diese wird lediglich in der Hook `useFetchSingleArticle` verwendet.

Wo liegt das Problem? Wie könntest du die Anzahl an Ausführungen mindern?

<details>
    <summary>Hinweis 1 ✒</summary>
    Passt ein Pattern von React zu diesem Problem?
</details>

## Vielen Dank! ♥

Vielen lieben Dank für das Bestreiten vom *krisenchat-riddle*. 🤺

Wir sind uns sicher, dass du das hervorragend gemacht hast und sind gespannt von dir zu hören. 💚