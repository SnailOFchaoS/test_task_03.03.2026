import { Routes, Route } from 'react-router-dom'
import { EnterPage } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EnterPage />} />
      <Route path="/create" element={<EnterPage />} />
    </Routes>
  )
}

export default App
