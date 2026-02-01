import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { WebSocketServer } from 'ws';

const app = express();
app.use(cors());

const cache: any[] = [];

app.get('/geocode', async (req, res) => {
  const q = req.query.q as string;

  const cached = cache.find(c => c.text === q);
  if (cached) return res.json(cached);

  const { data } = await axios.get('https://nominatim.openstreetmap.org/search', {
    params: {
      q,
      format: 'json',
      addressdetails: 1,
      countrycodes: 'in',
    }
  });

  const result = {
    text: q,
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
    address: data[0].address,
  };

  cache.push(result);
  res.json(result);
});

const server = app.listen(4000, () => console.log('Backend on 4000'));

// WebSocket live tracking
const wss = new WebSocketServer({ server });

let agent = { lat: 18.5204, lon: 73.8567 };

setInterval(() => {
  agent.lat += (Math.random() - 0.5) * 0.0005;
  agent.lon += (Math.random() - 0.5) * 0.0005;

  wss.clients.forEach(ws => {
    ws.send(JSON.stringify(agent));
  });
}, 2000);