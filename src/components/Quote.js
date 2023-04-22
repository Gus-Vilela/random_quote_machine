import Buttons from './Buttons';

function Quote() {
  return (
    <div id='quote-box'>
      <div>
        <p id='text'>
          The best way to predict the future is to invent it.
        </p>
        <p id='author'>
          - Alan Kay
        </p>
      </div>
      <Buttons />
    </div>
  )
}

export default Quote;