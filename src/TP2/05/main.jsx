import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card />
    <Card />
    <Card />
    <Card />
  </React.StrictMode>,
)
