import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card/Card.jsx'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Card />
    <Card />
    <Footer />
  </React.StrictMode>,
)
