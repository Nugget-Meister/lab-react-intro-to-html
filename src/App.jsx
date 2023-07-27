import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Cream Cheesea pasta</h1>
        <nav>
            <ul>
                <li><a href="sundial/index.html">Sundial</a></li>
                <li><a href="recipe/index.html">Recipe</a></li>
            </ul>
        </nav>

    </>
  )
}

export default App
