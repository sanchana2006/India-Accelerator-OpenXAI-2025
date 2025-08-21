import { useEffect, useState } from "react";
import "./App.css";

const STORAGE_KEY = "quote-of-the-day";

const FALLBACK_QUOTES = [
  { text: "The best way to get started is to quit talking and begin doing.", mood: "any" },
  { text: "Don’t let yesterday take up too much of today.", mood: "any" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", mood: "any" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", mood: "any" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", mood: "any" }
];

function todayKey() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // YYYY-MM-DD
}

function App() {
  const [quotes, setQuotes] = useState<{ text: string; author?: string }[]>([]);
  const [current, setCurrent] = useState<{ text: string; author?: string } | null>(null);

  // fetch quotes from API
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => setQuotes(data))
      .catch(() => setQuotes(FALLBACK_QUOTES));
  }, []);

  // load today's quote
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      if (stored.date === todayKey()) {
        setCurrent(stored.quote);
        return;
      }
    }
    pickNewQuote();
  }, [quotes]);

  function pickNewQuote() {
    const pool = quotes.length ? quotes : FALLBACK_QUOTES;
    const idx = Math.floor(Math.random() * pool.length);
    const q = pool[idx];
    setCurrent(q);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayKey(), quote: q }));
  }

  if (!current) return <p>Loading...</p>;

  return (
    <div className="app">
      <div>
        <h1>Quote of the Day</h1>
        <blockquote>
          "{current.text}"
          <footer>— {current.author || "Unknown"}</footer>
        </blockquote>
        <button onClick={pickNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;