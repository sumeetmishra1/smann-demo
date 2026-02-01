'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function TrackingPage() {
  const [pos, setPos] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:4000');
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setPos([data.lat, data.lon]);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Live Delivery Tracking</h2>
      {pos && <Map position={pos} />}
    </div>
  );
}