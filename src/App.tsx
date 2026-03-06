import { Routes, Route } from 'react-router-dom'
import { EnterPage } from './pages'
import { ProductsPage } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EnterPage />} />
      <Route path="/create" element={<EnterPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  )
}

export default App
