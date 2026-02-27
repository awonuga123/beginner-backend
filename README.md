# Beginner Backend

Minimal Express backend for beginners.

Setup (Windows PowerShell):

```powershell
npm install
npm start
# or for development with auto-reload:
npm run dev
```

Endpoints:

- `GET /` — simple welcome string
- `GET /api/hello` — JSON greeting
- `POST /api/echo` — echoes JSON body back as `{ received: <body> }`

Example POST with curl:

```powershell
curl -X POST http://localhost:3000/api/echo -H "Content-Type: application/json" -d "{ \"name\": \"Jane\" }"
```
