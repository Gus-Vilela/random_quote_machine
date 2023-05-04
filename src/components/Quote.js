import quoteData from "../quoteData";
import {useState, useEffect} from 'react';
import Buttons from "./Buttons";

function Quote(props) {
  const [quote, setQuote] = useState();

  async function fetchQuotes() {
    try{
      const response = await fetch("https://api.quotable.io/random?tags=technology");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setQuote(data);
    } catch (error) {
      console.error(error);
      setQuote({ content: "Opps... Something went wrong" });
    }
  }
  useEffect(() => {
    fetchQuotes();
  }
  , []);
  
  // const [quotes] = useState(quoteData.data.quotes);
  

  // const iniQuote = () => {
  //     const randomIndex = Math.floor(Math.random() * quotes.length);
  //     const randomQuote = quotes[randomIndex];
  //     const url = `https://twitter.com/intent/tweet?text="${randomQuote.content}" - ${randomQuote.author}`
  //     return {id : randomQuote.id, content : randomQuote.content, author : randomQuote.author,url : url}
  // }

  // const [state, setState] = useState(iniQuote);
  
  // const newQuote = () => {
  //   setState(
  //     prev => {
  //       let quote = iniQuote();
  //       while (prev.id === quote.id) {
  //         quote = iniQuote();
  //       }
  //       return quote;
  //     }
  //   );
  // }

  const QuoteBox = () => {
    if(!quote)
      return (
        <div id='quote-box'>
          <div>
            <p id='text'>
              Loading...
            </p>
          </div>
        </div>
      )
    else
      return (
        <div id='quote-box'>
          <div>
            <p id='text'>
              {quote.content}
            </p>
            <p id='author'>
              - {quote.author}
            </p>
          </div>
          <Buttons newQuote={fetchQuotes} 
          url={`https://twitter.com/intent/tweet?text="${quote.content}" - ${quote.author}`} 
          changeColor={props.changeColor} 
          color={props.color}/>
        </div>
        )
  }


  return (
    <QuoteBox/>
  )
}

export default Quote;