import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from 'inspirational-quotes'; 

function App() {
  const [quote, setQuote] = useState({
    text: '',
    author: ''
  });
  const [loading, setLoading] = useState(true); // State voor laadstatus

  // Functie om een quote op te halen
  const fetchQuote = () => {
    const newQuote = Quote.getQuote();
    setQuote(newQuote);
    setLoading(false); // Zet loading state op false na ophalen quote
  };

  // Functie om de pagina te verversen
  const handleRefresh = () => {
    window.location.reload(); // Laadt de pagina opnieuw
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Render inhoud afhankelijk van de laadstatus
  if (loading) {
    return <div className="App">Loading...</div>;
  }

  // Als het laden klaar is, toon de quote
  return (
    <div className="App">
      
        <p>{quote.text}</p>
        {quote.author && <p>- {quote.author}</p>}
        <button onClick={handleRefresh}>Krijg een nieuwe quote</button>
      
    </div>
  );
}

export default App;