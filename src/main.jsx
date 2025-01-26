import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'

import App from './App.jsx'
import Country from './views/country/Index.jsx'
import CountryDetail from './views/country/Detail.jsx'

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Country />} />
          <Route path=":country" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
