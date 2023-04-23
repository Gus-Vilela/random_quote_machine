import quoteData from "../quoteData";
import {useState} from 'react';

function Quote() {
  const iniQuote = () => {
    const quoteArray = quoteData.data.quotes;
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const randomQuote = quoteArray[randomIndex];
    const url = `https://twitter.com/intent/tweet?text="${randomQuote.quote}" - ${randomQuote.author}`
    return {quote : randomQuote.quote, author : randomQuote.author,url : url}
  }
  const [state, setState] = useState(iniQuote);
  
  const setQuote = () => {
    const quoteArray = quoteData.data.quotes;
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const randomQuote = quoteArray[randomIndex];
    const url = `https://twitter.com/intent/tweet?text="${randomQuote.quote}" - ${randomQuote.author}`
    setState({quote : randomQuote.quote, author : randomQuote.author,url : url})
  }

  return (
    <div id='quote-box'>
      <div>
        <p id='text'>
          {state.quote}
        </p>
        <p id='author'>
          - {state.author}
        </p>
      </div>
      <div id='buttons'>
        <button id='new-quote' onClick={setQuote}>New Quote</button>
        <a id='tweet-quote' 
        href={state.url}
        target='_blank'>Tweet Quote</a> 
      </div>
    </div>
  )
}

export default Quote;