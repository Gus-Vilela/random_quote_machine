import quoteData from "../quoteData";
import {useState} from 'react';
import Buttons from "./Buttons";

function Quote(props) {
  const [quotes] = useState(quoteData.data.quotes);

  const iniQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const url = `https://twitter.com/intent/tweet?text="${randomQuote.quote}" - ${randomQuote.author}`
    return {id : randomQuote.id, quote : randomQuote.quote, author : randomQuote.author,url : url}
  }
  const [state, setState] = useState(iniQuote);
  
  const newQuote = () => {
    setState(
      prev => {
        let quote = iniQuote();
        while (prev.id === quote.id) {
          quote = iniQuote();
        }
        return quote;
      }
    );
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
      <Buttons newQuote={newQuote} url={state.url} changeColor={props.changeColor} color={props.color}/>
    </div>
  )
}

export default Quote;