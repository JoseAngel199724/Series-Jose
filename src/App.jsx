import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesIndex from './routes/RoutesIndex'
function App() {

  return (
    <>
    <BrowserRouter>
    <RoutesIndex />
    </BrowserRouter>
    </>
  )
}

export default App
