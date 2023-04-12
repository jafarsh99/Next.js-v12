import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'text-encoding-utf-8';


const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'YOUR_API_KEY',
          },
          params: {
            category: 'happiness',
          },
        });
        setQuotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <p>{quote.text}</p>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;