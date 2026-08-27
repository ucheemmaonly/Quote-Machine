import { useEffect, useState } from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteCollection from "./components/QuoteCollection";

const API = "https://dummyjson.com/quotes";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [loadingQuote, setLoadingQuote] = useState(true);
  const [loadingCollection, setLoadingCollection] = useState(true);
  const [error, setError] = useState("");

  const getRandomQuote = async () => {
    setLoadingQuote(true);
    setError("");

    try {
      const response = await fetch(`${API}/random`);

      if (!response.ok) {
        throw new Error("Unable to load quote");
      }

      const data = await response.json();
      setQuote(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingQuote(false);
    }
  };

  const getCollection = async () => {
    setLoadingCollection(true);

    try {
      const response = await fetch(`${API}?limit=9`);

      if (!response.ok) {
        throw new Error("Unable to load quotes");
      }

      const data = await response.json();
      setQuotes(data.quotes);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingCollection(false);
    }
  };

  useEffect(() => {
    getRandomQuote();
    getCollection();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5] font-[Inter] text-[#242424]">
      {/* Background circles */}
      <div className="fixed -left-40 -top-40 h-[540px] w-[540px] rounded-full bg-[#29998e]" />

      <div className="fixed -bottom-40 -right-28 h-[360px] w-[360px] rounded-full bg-[#29998e]" />

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-20">
        <QuoteDisplay
          quote={quote}
          loading={loadingQuote}
          error={error}
          onNewQuote={getRandomQuote}
          onRetry={getRandomQuote}
        />
        <QuoteCollection
          quotes={quotes}
          loading={loadingCollection}
          activeId={quote?.id}
          onSelect={setQuote}
        />
      </div>
    </main>
  );
}
