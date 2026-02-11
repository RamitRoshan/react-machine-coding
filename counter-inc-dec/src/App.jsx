// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [number, setNumber] = useState(0);

//   const increment = () => {
//     setNumber(number+1);
//   }

//   const decrement = () => {
//     if(number <= 0){
//       // return;
//       alert("zero cannot decrement");
//     }
//     else{
//       setNumber(number - 1);
//     }
//   }
 

//   return (
//     <div>
//       <h1>Counter(Increment-Decrement)</h1>

//       <h2>{number}</h2>
//       <div>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     </div>
//   )
// }

// export default App


import { useState } from 'react'
import './App.css'

function App() {

  const min = 0;
  const max = 10;

  const [number, setNumber] = useState(0);

  const increment = () => {
    if (number < max) {
      setNumber(number + 1);
    }
  }

  const decrement = () => {
    if (number > min) {
      setNumber(number - 1);
    }
  }

  return (
    <div>
      <h1>Counter (With Limits)</h1>

      <h2>{number}</h2>

      <div>
        <button 
          onClick={increment} 
          disabled={number >= max}
        >
          Increment
        </button>

        <button 
          onClick={decrement} 
          disabled={number <= min}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
