import quoteData from "../quoteData";
import {useState} from 'react';

function Quote() {
  const iniQuote = () => {
    const quoteArray = quoteData.data.quotes;
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const randomQuote = quoteArray[randomIndex];
    return {quote : randomQuote.quote, author : randomQuote.author};
  }
  const [state, setState] = useState(iniQuote);
  
  const setQuote = () => {
    const quoteArray = quoteData.data.quotes;
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const randomQuote = quoteArray[randomIndex];
    setState({quote : randomQuote.quote, author : randomQuote.author});
  }

  return (
    <div id='quote-box'>
      <div>
        <p id='text'>
          {state.quote}
        </p>
        <p id='author'>
          {state.author}
        </p>
      </div>
      <div id='buttons'>
        <button id='new-quote' onClick={setQuote}>New Quote</button>
        <a id='tweet-quote' href='twitter.com/intent/tweet' 
        target='_blank'>Tweet Quote</a> 
      </div>
    </div>
  )
}

export default Quote;