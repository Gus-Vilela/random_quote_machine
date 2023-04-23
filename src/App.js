import './App.css';
import Quote from './components/Quote';
import {useState} from 'react';

function App() {
  const colors = [
    '#16a085',
    '#27ae60',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#77B1A9',
    '#73A857'
  ];
  
  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  const [color, setColor] = useState(randomColor);

  const changeColor = () => {
    let color = randomColor();
    setColor(prev => {while (prev === color) {color = randomColor()};return color});
  }
  
  return (
    <main style={{backgroundColor: color}}>
      <Quote changeColor={changeColor} color={color}/>
    </main>
  )
    
  
}

export default App;
