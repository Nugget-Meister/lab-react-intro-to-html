import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sundial />
  </React.StrictMode>,
)

function Sundial() {

  return (
    <>
            <h1>Sundial</h1> 
        <p>From Wikipedia, the <em>free</em> encyclopedia.</p> 
        <p><strong>A sundial measures time by the position of the sun.</strong> The 
most commonly seen designs, such as the 'ordinary' or standard garden sundial, cast 
a shadow on a flat surface marked with the hours
of the day. As the position of the sun changes, the time indicated by the shadow
changes. However, sundials can be designed for any surface where a fixed object
casts a predictable shadow.</p>

        <p> Most sundial designs indicate apparent solar time.
        Minor design variations can measure standard and daylight saving time, as well.</p>

        <h2>History</h2>
        <p>Sundials in the form of obelisks (3500 BC) and shadow clocks (1500 BC)
        are <strong>≈known from ancient Egypt</strong>, and were developed further by other cultures,
        including the Chinese, Greek, and Roman cultures. A type of sundial without
        gnomon is described in the old Old Testament (Isaiah 38:2).</p>

        <p>The mathematician
        and astronomer Theodosius of Bithynia (ca. 160 BC-ca. 100 BC) is said to have
        invented a universal sundial that could be used anywhere on Earth. The French
        astronomer Oronce Fine constructed a sundial of ivory in 1524. The Italian
        astronomer Giovanni Padovani published a treatise on the sundial in 1570, in
        which he included instructions for the manufacture and laying out of mural
        (vertical) and horizontal sundials. Giuseppe Biancani's Construction instrumenti
        ad horologia solaria discusses how to make a perfect sundial, with accompanying
        illustrations. </p>

        <h2>Installation of standard sundials </h2>
        <p>Many ornamental sundials are
        designed to be used at 45 degrees north. By tilting such a sundial, it may be
        installed so that it will keep time. However, some mass-produced garden sundials
        are inaccurate because of poor design and cannot be corrected.
        </p>

        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../recipe/index.html">Recipe</a></li>
            </ul>
        </nav>     
    </>
  )
}