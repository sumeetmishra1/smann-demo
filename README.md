# Samaan – Location & Live Tracking PWA

A simple **location-based PWA** built with Next.js and Node.js. The app focuses on address lookup, map rendering, and real-time delivery agent tracking — similar to features used in logistics or hyperlocal delivery platforms.

---

## Features

* Address lookup using browser location or manual input
* Geocoding with OpenStreetMap (Nominatim)
* Leaflet map integration
* Live delivery agent tracking using WebSockets
* Basic caching to reduce repeated geocoding calls
* PWA-ready (HTTPS friendly, works with ngrok)

---

## Tech Stack

**Frontend**: Next.js, React, Leaflet, react-leaflet
**Backend**: Node.js, TypeScript, Express, WebSocket
**APIs/Tools**: OpenStreetMap, ngrok

---

## Project Structure

```
frontend/   # Next.js app
backend/    # Node + TypeScript server
```

---

## Run Locally

### Backend

```bash
cd backend
npm install
npx ts-node-dev src/index.ts
```

### Frontend

```bash
cd frontend
npm install
npm run dev -- --webpack
```

---

## Pages

* `/address` – Address lookup with map
* `/tracking` – Live delivery agent tracking

