import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount]  = useState(50);

  //scroll event
  useEffect(() => {

    const onScroll = () => {
      if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30){
        setCount(count + 50);
      }
    }

    window.addEventListener('scroll', onScroll);

    //remove the listener if the component is about to unmount
    return () => window.removeEventListener('scroll', onScroll);
  },[count]);

  const element = [];
  for(let i=0; i< count; i++){
    element.push(
      <div key={i}>{i+1}</div>
    );
  }
  return (
    <div>
      <h2>Infinite Scroll</h2>
      {element}
    </div>
  )
}

export default App
