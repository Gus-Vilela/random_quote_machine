function Buttons (props) {
  const handleClick = () => {
    props.newQuote();
    props.changeColor();
  }
  
  return (
    <div id='buttons'>
        <button id='new-quote' onClick={handleClick} style={{backgroundColor: props.color}}>New Quote</button>
        <a id='tweet-quote' 
        href={props.url}
        target='_blank'>Tweet Quote</a>
    </div>
  )
}

export default Buttons;