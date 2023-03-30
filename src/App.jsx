import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/main/main'
import Cart from './components/cart/Cart'

function App() {
  const [count, setCount] = useState(0);
  const [catId,setCatId]=useState('');
  const addIdBtn=(id)=>{
    const previousId=JSON.parse(localStorage.getItem("mealID"));
    if(previousId){
      const sumID=JSON.parse(previousId)+JSON.parse(id);
      localStorage.setItem('mealID',sumID)
      setCatId(sumID)
    }
    else{
      localStorage.setItem("mealID",id)
      setCatId(id)
    }
  }
  return (
    <div className="App md:flex border-spacing-1">
      <div className=''>
        <Main addIdBtn={addIdBtn}></Main>
      </div>
      <div className='w-full h-auto border'>
        <Cart catId={catId}></Cart>
      </div>
    </div>
  )
}

export default App
