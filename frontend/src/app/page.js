import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Smann PWA Demo</h1>

      <ul>
        <li>
          <a href="/address">📍 Address Lookup</a>
        </li>
        <li>
          <a href="/tracking">🚴 Live Delivery Tracking</a>
        </li>
      </ul>
    </main>
  );
}
