
import './App.css';
import {useState} from "react"
function App() {
  const [email,setEmail]=useState("")
  async function handleClick(event) {

    event.preventDefault();
    fetch('http://localhost:7749/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({ 
        email:email
        }),
    });
  }
  return (
    <div className="App">
      <button onClick={handleClick}></button>
      <form action="/" method="get" className='SignUpForm'>
        <button className="head3">
            Sign up for our daily insider
        </button>
        <input
            type="text"

            placeholder="Enter your email"
            
            className='EmailInput'
            onChange={(event)=>{

              setEmail(event.target.value)
            }}
        />
        <button type="submit" className="head4" onClick={handleClick}>Subcribe</button>
        
    </form>
    </div>
  );
}

export default App;
