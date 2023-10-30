import "./App.css";
import { Summary } from "./Pages/Summary";
import { Event } from "./Pages/Event";
import { Volunteer } from "./Pages/Volunteer";
import { Nav } from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-[100vh] items-center gap-5">
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800 pb-2">
        Volunteer Management
      </h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Volunteer />} />
        <Route path="/events" element={<Event />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
