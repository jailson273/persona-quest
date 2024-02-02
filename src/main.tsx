import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './app/components/GlobalStyle/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import Router from './app/pages/Router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </React.StrictMode>
)
