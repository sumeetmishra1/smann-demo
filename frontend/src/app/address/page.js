'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/map'), { ssr: false });

export default function AddressPage() {
  const [coords, setCoords] = useState(null);
  const [query, setQuery] = useState('');
  const [address, setAddress] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords([pos.coords.latitude, pos.coords.longitude]);
      },
      () => {}
    );
  }, []);

  async function searchAddress() {
    const res = await fetch(`http://localhost:4000/geocode?q=${query}`);
    const data = await res.json();
    setCoords([data.lat, data.lon]);
    setAddress(data.address);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Address Lookup</h2>
      <input
        placeholder="Enter address"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchAddress}>Search</button>

      {address && (
        <pre>{JSON.stringify(address, null, 2)}</pre>
      )}

      {coords && <Map position={coords} />}
    </div>
  );
}