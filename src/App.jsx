import { useEffect, useState } from 'react'
import Header from './components/Header'
import QuoteDisplay from './components/QuoteDisplay'
import QuoteCollection from './components/QuoteCollection'

const API = 'https://dummyjson.com/quotes'

export default function App() {
  const [quote, setQuote] = useState(null)
  const [quotes, setQuotes] = useState([])
  const [loadingQuote, setLoadingQuote] = useState(true)
  const [loadingCollection, setLoadingCollection] = useState(true)
  const [error, setError] = useState('')

  const getRandomQuote = async () => {
    setLoadingQuote(true)
    setError('')
    try {
      const response = await fetch(`${API}/random`)
      if (!response.ok) throw new Error('Unable to load a new quote.')
      const data = await response.json()
      setQuote(data)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoadingQuote(false)
    }
  }

  const getCollection = async () => {
    setLoadingCollection(true)
    try {
      const response = await fetch(`${API}?limit=9`)
      if (!response.ok) throw new Error('Unable to load the quote collection.')
      const data = await response.json()
      setQuotes(data.quotes || [])
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoadingCollection(false)
    }
  }

  useEffect(() => {
    getRandomQuote()
    getCollection()
  }, [])

  const retry = () => {
    getRandomQuote()
    if (quotes.length === 0) getCollection()
  }

  return (
    <main className="min-h-screen overflow-hidden bg-mist">
      <div className="pointer-events-none fixed -left-28 -top-32 h-[430px] w-[430px] rounded-full bg-accent/95" />
      <div className="pointer-events-none fixed -bottom-32 -right-24 h-[310px] w-[310px] rounded-full bg-accent/95" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 lg:px-12">
        <Header />
        <QuoteDisplay quote={quote} loading={loadingQuote} error={error} onNewQuote={getRandomQuote} onRetry={retry} />
        <QuoteCollection quotes={quotes} loading={loadingCollection} activeId={quote?.id} onSelect={setQuote} />
      </div>
    </main>
  )
}
