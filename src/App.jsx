import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Scenario } from "./components/Scenario";
import { ChatInterface } from "./components/ChatInterface";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import MaxChatPage from "./components/MaxChatPage";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-indigo-50">
      {/* Navbar at the top */}
      <header>
        <Navbar />
      </header>

      {/* Hero section with title and description */}
      <section className="bg-gradient-to-r from-purple-400 to-indigo-500 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Avatar Ask & Reveal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Interact with our intelligent avatars. Ask questions, get answers, and
            experience the future of AI interaction today.
          </p>
        </div>
      </section>

      {/* Main content area with title and avatar */}
      <main className="flex-grow container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Choose Your Avatar</h2>
        
        {/* Avatar grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Avatar Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="aspect-square bg-teal-500 relative overflow-hidden">
              <div className="w-full h-full">
                <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }}>
                  <Scenario />
                </Canvas>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Max</h3>
              <p className="text-gray-600 mb-4">Science advisor with expertise in emerging technologies</p>
              <Link to="/chat/max">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                  Chat with Max
                </button>
              </Link>
            </div>
          </div>
          
          {/* Avatar Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="aspect-square bg-green-100 relative overflow-hidden">
              {/* Placeholder for avatar */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Zoe</h3>
              <p className="text-gray-600 mb-4">Environmental specialist focused on sustainable solutions</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                Chat with Zoe
              </button>
            </div>
          </div>
          
          {/* Avatar Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="aspect-square bg-indigo-100 relative overflow-hidden">
              {/* Placeholder for avatar */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Alex</h3>
              <p className="text-gray-600 mb-4">Tech enthusiast with a passion for AI and innovative solutions</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                Chat with Alex
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
      
      {/* Loader outside Canvas */}
      <Loader />
      
      {/* Hide Leva controls in production */}
      <Leva collapsed hidden />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat/max" element={<MaxChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;