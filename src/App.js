import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [saludo, setSaludo] = useState('');
  
  useEffect (() => { 
    setSaludo ('¡Hello World!😀')
  },[])

  return (
   <>
   <h1>Hello Word, App</h1>

   <div className="card">
   <p>{saludo}</p>
   </div>
   </>
    )
}

export default App;
