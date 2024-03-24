import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  //Aqui envolvemos toda nuestra app en el contexto
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
