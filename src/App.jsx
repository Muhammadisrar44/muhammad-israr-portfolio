import Legal from './pages/Legal'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import NotFound from './NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/privacy-policy" element={<Legal />} />
<Route path="/cookie-policy" element={<Legal />} />
<Route path="/terms" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App