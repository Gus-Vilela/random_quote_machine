import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function Buttons (props) {
  const handleClick = () => {
    props.newQuote();
    props.changeColor();
  }

  const icon = <FontAwesomeIcon icon={faTwitter} size='2x'/>
  
  return (
    <div id='buttons'>
        <button id='new-quote' onClick={handleClick} style={{backgroundColor: props.color}}>New Quote</button>
        <div className='tooltip'>
          <a id='tweet-quote' 
          href={props.url}
          target='_blank' className='tooltip'>
            {icon} 
          </a>
          <span className='tooltiptext'>
            Tweet this!
          </span>
        </div>
    </div>
  )
}

export default Buttons;