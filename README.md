# 🎵 MUSIC SHOP - REST API 

## 📦 Projektbeskrivning

Detta projekt är ett REST‑API byggt med **TypeScript**, **Express** och **MySQL**.  
API:t hanterar produkter och kategorier för en musikshop och innehåller:

- Full CRUD för produkter (instrument, noter, tillbehör)
- Full CRUD för kategorier
- Many‑to‑many‑relation mellan produkter och kategorier via en länktabell
- Sökfunktion (search) för att hitta produkter efter titel
- Sortering (sort + order) för att sortera produkter efter pris
- Normaliserad databasstruktur (3NF)
- Felhantering och validering enligt kursens riktlinjer
- Mock‑data för att snabbt kunna testa API:t (gitarrer, piano, trumset, noter m.m.)
- Aiven‑hostad MySQL‑databas

API:t är byggt enligt kursens krav för **API‑utveckling**, med tydlig struktur, separerade controllers, routers, databas‑konfiguration, miljövariabler för säkerhet, interface‑hantering och en README som dokumenterar hela projektet.

## 📊 ER‑diagram

<img width="855" height="719" alt="image" src="https://github.com/user-attachments/assets/29dc1bc0-b97f-4e87-9359-264dc2847177" />

## 🛠️ Tekniker som använts

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?logo=dotenv&logoColor=black)
![CORS](https://img.shields.io/badge/CORS-000000?logo=cors&logoColor=white)
![tsx](https://img.shields.io/badge/tsx-3178C6?logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![Aiven](https://img.shields.io/badge/Aiven-FF6F61?logo=aiven&logoColor=white)


## 📘 Kom‑igång‑guide

Detta projekt är byggt med TypeScript, Express och MySQL.  
Följ stegen nedan för att installera, konfigurera och starta API:t.

---

### 📦 Installation

```bash
npm init -y
npm install express
npm install mysql2
npm install cors
npm install dotenv
npm install -D typescript @types/express @types/cors @types/dotenv
npm install -D tsx
npx tsc --init
