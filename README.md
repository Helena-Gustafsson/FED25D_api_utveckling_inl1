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

## 🟡 Bildöversikt av min databas i Beekeeper Studio med produkter och kategorier
(PS. Notera att de exporterade SQL filerna från beekeper ligger i foldern src/misc-SQL-files) 

<img width="1919" height="992" alt="image" src="https://github.com/user-attachments/assets/e243b222-01a9-4c27-bc91-918591e3a622" />

## 🔵 Insomnia

Ihop klipp av bild exempel från Insomnia för kategorier och produkter

### 🟦 GET

<img width="2039" height="931" alt="API (fetch all categories - get products by category)" src="https://github.com/user-attachments/assets/b78c051a-db1c-4d38-85ca-cbabe8f42306" />

<img width="1384" height="1362" alt="API (get all products - product by ID)" src="https://github.com/user-attachments/assets/a95cb0cb-2375-4869-815f-90f2e3d013b9" />

### 🟩 POST

<img width="1387" height="903" alt="API (create product - create category)" src="https://github.com/user-attachments/assets/ca0c09d2-2095-49bc-b62a-85ad52292abe" />

### 🟨 PTCH

<img width="1042" height="664" alt="API (patch category - product)" src="https://github.com/user-attachments/assets/10494395-c34a-4202-8141-cd1f48d43727" />

### 🟥 DEL

<img width="1044" height="590" alt="API (deleted product - category)" src="https://github.com/user-attachments/assets/72ae2d53-8ab0-48ea-a478-94f298421bc5" />

## 🧭 API‑endpoints (URL‑vägar)

### 🎵 Products

🟦 GET /products  
Hämta alla produkter.

🟦 GET /products/:id  
Hämta en specifik produkt.

🟩 POST /products  
Skapa en ny produkt.

🟨 PTCH /products/:id  
Uppdatera en produkt.

🟥 DEL /products/:id  
Ta bort en produkt.

### 🎼 Categories

🟦 GET /categories  
Hämta alla kategorier.

🟦 GET /categories/:id/products  
Hämta alla produkter som tillhör en kategori.

🟩 POST /categories  
Skapa en ny kategori.

🟨 PTCH /categories/:id  
Uppdatera en kategori.

🟥 DEL /categories/:id  
Ta bort en kategori.

## 🗂️ Projektstruktur (VS Code) 

<img width="1868" height="712" alt="image" src="https://github.com/user-attachments/assets/613d9f55-4e73-4fdb-8e67-f449c0e90785" />

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
