import './App.css';

function Quote() {
  return (
    <div id='quote-box'>
      <p id='text'>
        "The best way to predict the future is to invent it."
      </p>
      <p id='author'>
        - Alan Kay
      </p>

      <button id='new-quote'>New Quote</button>
      
      <a id='tweet-quote' href='twitter.com/intent/tweet' 
      target='_blank'>Tweet Quote</a>      
    </div>
  )
}
function App() {
  return <Quote />
}

export default App;
