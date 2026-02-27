# Beginner Backend

Minimal Express backend with a simple frontend for beginners.

## Setup (Windows PowerShell)

```powershell
npm install
npm start
# or for development with auto-reload:
npm run dev
```

## Features

### Backend API Endpoints

- `GET /` — Simple welcome string
- `GET /api/hello` — JSON greeting
- `POST /api/echo` — Echoes JSON body back as `{ received: <body> }`

### Frontend

A single-page app at `http://localhost:3000` with buttons to test all API endpoints. No build step needed—just plain HTML, CSS, and JavaScript.

## Testing API with curl (PowerShell)

```powershell
# Welcome
curl http://localhost:3000/

# Hello
curl http://localhost:3000/api/hello

# Echo (POST)
curl -X POST http://localhost:3000/api/echo `
  -H "Content-Type: application/json" `
  -d '{ "name": "Jane" }'
```

## Project Structure

```
portfolio/
├── index.js           # Express server
├── package.json       # Dependencies
├── vercel.json        # Vercel config
├── public/
│   ├── index.html     # Frontend UI
│   ├── style.css      # Styling
│   └── script.js      # API calls
└── routes/
    └── echo.js        # Echo endpoint
```
