import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import './global.css'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
