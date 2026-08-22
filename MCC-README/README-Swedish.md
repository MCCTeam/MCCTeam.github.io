<div align="center">

<img src="https://i.pics.rs/LLDhE.png" alt="Logotyp"/>

# Minecraft-konsolklient (MCC)

[Dokumentation](https://mccteam.github.io/) | [Ladda ner](#download) | [Installation](https://mccteam.github.io/guide/installation.html) | [Konfiguration](https://mccteam.github.io/guide/configuration.html) | [Användning](https://mccteam.github.io/guide/usage.html)

</div>

<div align="center">

[English](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/README.md) | [Nederlands](https://github.com/MCCTeam/MCCTeam.github.io/blob/master/MCC-README/README-Dutch.md) | [Русский](https://github.com/MCCTeam/MCCTeam.github.io/blob/master/MCC-README/README-Russian.md) | [Српски](https://github.com/MCCTeam/MCCTeam.github.io/blob/master/MCC-README/README-Serbian_Cyrillic.md) | [Türkçe](https://github.com/MCCTeam/MCCTeam.github.io/blob/master/MCC-README/README-Turkish.md) | [Tiếng Việt](https://github.com/MCCTeam/MCCTeam.github.io/blob/master/MCC-README/README-Vietnamese.md) | [简体中文](https://github.com/MCCTeam/MCCTeam.github.io/blob/master/MCC-README/README-Chinese_Simplified.md) | [繁體中文](https://github.com/MCCTeam/MCCTeam.github.io/blob/master/MCC-README/README-Chinese_Traditional.md)

</div>

<div align="center">

[![GitHub Actions byggstatus](https://github.com/MCCTeam/Minecraft-Console-Client/actions/workflows/build-and-release.yml/badge.svg)](https://github.com/MCCTeam/Minecraft-Console-Client/releases/latest) <a href="https://discord.gg/sfBv4TtpC9"><img src="https://img.shields.io/discord/1018553894831403028?color=5865F2&logo=discord&logoColor=white" alt="Discord-server" /></a>

</div>

## **Om ℹ️**

**Minecraft Console Client (MCC)** is a lightweight cross-platform open-source Minecraft TUI client for **Java** edition that allows you to connect to any Minecraft Java server, send commands and receive text messages in a fast and easy way without having to open the main Minecraft game.

## Ladda ner

Hämta den senaste versionen från [releaselistan](https://github.com/MCCTeam/Minecraft-Console-Client/releases/latest).

## Snabbinstallation ⚡

Öppna en terminal i mappen där du vill ha MCC och kör:

Linux / macOS:

```bash
curl -fsSL https://mccteam.github.io/install.sh | sh
```

Windows (PowerShell):

```powershell
iwr -useb https://mccteam.github.io/install.ps1 | iex
```

Skriptet känner av din dators arkitektur och laddar ned rätt binärfil. För fler alternativ (inklusive `wget` och manuella nedladdningar) se [installeringsguiden](https://mccteam.github.io/guide/installation.html).

## Hur man använder 📚

-   🌐 [Fullständig dokumentation](https://mccteam.github.io/)
-   📦 [Installation](https://mccteam.github.io/guide/installation.html)
-   📖 [Användning](https://mccteam.github.io/guide/usage.html)
-   ⚙️ [Konfiguration](https://mccteam.github.io/guide/configuration.html)
-   🤖 [Chattbotsar](https://mccteam.github.io/guide/chat-bots.html)
-   📝 [Exempelkonfigurationsfiler](MinecraftClient/config/)

## Få hjälp 🙋

Kolla in [webbplatsen](https://mccteam.github.io/), [README-filen](https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/config#minecraft-console-client-user-manual) och de befintliga [diskussionerna](https://github.com/MCCTeam/Minecraft-Console-Client/discussions): Där kanske din fråga redan har fått svar. Om inte, öppna en [ny diskussion](https://github.com/MCCTeam/Minecraft-Console-Client/discussions/new) och ställ din fråga. Om du hittar ett fel, rapportera det gärna i avsnittet [Problem](https://github.com/MCCTeam/Minecraft-Console-Client/issues).

## Discord

Vi har nu en Discord-server, klicka [här](https://discord.gg/sfBv4TtpC9) för att gå med.

## Hjälpa oss ❤️

Vi är en liten community, så vi behöver hjälp med att implementera uppgraderingar för nya Minecraft-versioner, åtgärda buggar och utveckla projektet. Vi söker alltid efter driven personer som vill bidra. Om du känner att det skulle kunna vara du, titta gärna på avsnittet [problemrapporter](https://github.com/MCCTeam/Minecraft-Console-Client/issues?q=is%3Aissue+is%3Aopen+label%3Awaiting-for%3Acontributor) :)

## Hur man kan bidra 📝

Om du vill bidra till Minecraft Console Client är det jättebra — skapa bara en fork av lagringsplatsen och skicka in en pull request på _Master_-branchen. För att bidra till webbplatsen / online-dokumentationen, se även [webbplatsens repository](https://github.com/MCCTeam/MCCTeam.github.io).

![Alt](https://repobeats.axiom.co/api/embed/c8a6c7c47fde8fcbe3727a21eab46e6b39dff60d.svg "Repobeats-analysbild")

## Mellanöstern

För att förbättra översättningarna till MCC, besök gärna: [Crowdin - Minecraft Console Client](https://crowdin.com/project/minecraft-console-client).

## Bygga från källan 🏗️

Denna avsnitt har flyttats till vår nya [dokumentationswebbplats](https://mccteam.github.io/guide/installation.html#building-from-the-source-code).

## Licens ⚖️

Såvida det inte specifikt anges, tillhör koden MCC-lagret eller medverkande bidragsgivare och är tillgänglig under CDDL-1.0. Annars omnämns licensen och den ursprungliga författaren i källkodens header. De viktigaste bestämmelserna i CDDL-1.0-licensen är i huvudsak följande:

-   Du får använda den licensierade koden helt eller delvis i valfria program, oavsett vilken licens det totala programmet har (eller snarare, med undantag för den kod du lånar). Programmet i sig kan vara öppen eller stängd källkod, gratis eller kommersiellt.
-   Däremot måste alla ändringar, förbättringar eller tillägg till CDDL-koden (all kod som refereras till vid direkta ändringar av CDDL-koden anses vara ett tillägg till CDDL-koden och omfattas därför av detta krav; t.ex. om en matematisk funktion ändras så att den använder en snabb söktabell, blir själva tabellen ett tillägg till CDDL-koden, oavsett om den finns i en egen källkodsfil) göras offentligt och fritt tillgänglig i källkodsform, under just CDDL-licensen.
-   I varje program (källkod eller binärt) som använder CDDL-kod måste källan (antingen projektet eller författaren) till CDDL-koden erkännas. Dessutom får ändringar i CDDL-koden (som måste distribueras som källkod) inte ta bort meddelanden som indikerar kodenens ursprung.

Mer information finns på http://qstuff.blogspot.fr/2007/04/why-cddl.html Fullständig licens finns på http://opensource.org/licenses/CDDL-1.0

## Använder tekniker från
<div align="center">
<a href="https://sentry.io/welcome/">
  <img src="https://github.com/breadbyte/Minecraft-Console-Client/assets/14045257/411e9a2f-cd9b-4bb5-b7e9-cd7529c76b88" alt="Vakt"  />
</a>
</div>
