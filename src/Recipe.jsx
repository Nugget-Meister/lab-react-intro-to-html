import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Recipe />
  </React.StrictMode>,
)

function Recipe() {

  return (
    <>
        <h1>Cream Cheese Pasta</h1>
        <img src="https://theclevermeal.com/wp-content/uploads/2019/12/IMG_7879-799x1024.jpg" height='300px' alt="cheesy creamy pasta"/>
        <h2>Description</h2>
        <p>The creamiest and cheesiest. cream cheese pasta that will be consumed by you.</p>
        <h2>Ingredients</h2>
        <ul>
            <li>Whole grain or regular pasta</li>
            <li>Cream cheese</li>
            <li>Parmesan cheese</li>
            <li>Olive oil</li>
            <li>Garlic</li>
            <li>Chili flakes (optional)</li>
            <li>Salt & pepper</li>
        </ul>
        <h2>Directions</h2>
        <ol>
            <li>Cook your pasta until al dente</li>
            <li>Sautee garlic in olive oil until fragrant</li>
            <li>Add cream cheese, pasta cooking water, parmesan, and stir well</li>
            <li>Drain and add pasta to the skillet</li>
            <li>Toss until well combined, adding some pasta water if needed</li>
            <li>Serve with extra parmesan cheese, black pepper and a good drizzle of olive oil.</li>
        </ol>
        <a href="https://www.delish.com/cooking/recipe-ideas/a35568094/baked-cream-cheese-pasta-recipe/">More types of cheesy creamy pastas</a>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../sundial/index.html">Sundial</a></li>
            </ul>
        </nav>
        
    </>
  )
}