import './App.css'
import { Hospital } from './Pages/Hospital';
import { Patient } from './Pages/Patient';
import { Ward } from './Pages/Ward';
import { Nav } from './components/Nav'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='flex flex-col h-[100vh] items-center gap-5'>
      <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800 pb-2'>Hospital Management</h1>
      <Nav />
      <Routes>
        <Route path="/"  element={<Patient />}/>
        <Route path="/wards"  element={<Ward />}/>
        <Route path="/hospital"  element={<Hospital />}/>
      </Routes>
    </div>
  )
}

export default App