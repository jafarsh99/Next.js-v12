import { useState } from "react";
import styles from "./api.module.css";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Generate Random Quote");

  const fetchQuote = () => {
    setIsLoading(true);
    setButtonText("Searching...");
    const API = "http://api.quotable.io/random";
    setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setQuote(data.content);
          setAuthor(data.author);
          setIsLoading(false);
          setButtonText("Another Quote");
        })
        .catch(() => {
          setIsLoading(false);
          alert("Error fetching quote");
          setButtonText("Try again");
        });
    }, 3000);
  };

  return (
    <div>
      <div className={styles.container}>
        {isLoading ? (
          <p>Looking for relatable one for you...</p>
        ) : (
          <>
            {<h3>{quote}</h3>}
            {<p>-{author}-</p>}
          </>
        )}
      </div>
      <div>
        <button onClick={fetchQuote} className={styles.button}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
