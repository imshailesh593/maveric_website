import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import './index.css'
import App from './App.jsx'

const SITE_KEY = '6LeneAotAAAAABErUboTKGFMOHugiFkp_aNCKPXR'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY} scriptProps={{ async: true, defer: true }}>
        <App />
      </GoogleReCaptchaProvider>
    </BrowserRouter>
  </StrictMode>,
)
