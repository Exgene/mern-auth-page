import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import HomePage from './routes/HomePage'
import Auth from './routes/Auth'
import Navbar from './utils/navbar'
import MainPage from './routes/MainPage'
import { useState } from 'react'

function App() {
  const [authState, setAuthState] = useState(false)
  return (
    <div>
      <Router>
        <Navbar authState={authState} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth setAuthState={setAuthState} />} />
          <Route
            path="/main"
            element={authState ? <MainPage /> : <Navigate to="/auth" />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
