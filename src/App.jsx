import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Scenario } from "./components/Scenario";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import MaxChatPage from "./components/MaxChatPage";
import teacimage from "./components/teacher.jpg"

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f9]">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hero section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20"
        style={{ background: "#f7f7f9" }}>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-40 z-10">
          <h2 className="uppercase text-xs font-bold text-gray-500 mb-2">Amazing Feature!</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 leading-none" style={{ fontFamily: "Playfair Display, serif" }}>
            Avatar Ask & Reveal
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Interact with intelligent avatars.<br />
            Ask questions, get answers, and experience conversational AI in a stunning, modern experience.
          </p>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center relative z-20">
          <img
            src={teacimage}
            alt="Sample hero"
            className="rounded-3xl object-contain w-[340px] md:w-[445px] drop-shadow-xl"
            draggable={false}
            style={{
              background: '#f7f7f9', // Matches the section background
              boxShadow: '0px 12px 40px 0px rgba(135,135,140,0.08)',
              borderRadius: '2.2rem',
            }}
          />
        </div>
        {/* Large soft shape as bg effect */}
        <div className="absolute right-0 bottom-0 h-[50%] w-[40%] z-10 pointer-events-none select-none hidden md:block" aria-hidden>
          <svg width="100%" height="100%" viewBox="0 0 768 520" fill="none">
            <ellipse cx="650" cy="350" rx="250" ry="100" fill="#f7f7f9" opacity="0.8" /> {/* Adjusted position, size, and opacity */}
          </svg>
        </div>
      </section>

      {/* Avatar selection section */}
      <main className="flex-grow container mx-auto py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900" style={{ fontFamily: "Playfair Display, serif" }}>
          Choose Your Avatar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
          {/* Avatar Card 1 - Maitri */}
          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-200">
            <div className="aspect-square bg-gray-100 relative overflow-hidden">
              <div className="w-full h-full">
                <Canvas shadows camera={{ fov: 20 }}>
                  <Scenario avatarType="maitri" />
                </Canvas>
              </div>
            </div>
            <div className="p-7 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Maitri</h3>
              <p className="text-gray-600 mb-6 font-medium">Science advisor with expertise in emerging technologies</p>
              <Link to="/chat/max">
                <button className="font-semibold border border-gray-300 rounded-full py-2 px-6 bg-gray-50 text-black hover:bg-indigo-50 hover:border-indigo-300 transition-colors">
                  Chat with Maitri
                </button>
              </Link>
            </div>
          </div>
          {/* Avatar Card 2 - Harsh */}
          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-200">
            <div className="aspect-square bg-green-50 relative overflow-hidden">
              <Canvas shadows camera={{ fov: 20 }}>
                <Scenario avatarType="harsh" />
              </Canvas>
            </div>
            <div className="p-7 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Harsh</h3>
              <p className="text-gray-600 mb-6 font-medium">Environmental specialist focused on sustainable solutions</p>
              <Link to="/chat/harsh">
                <button className="font-semibold border border-gray-300 rounded-full py-2 px-6 bg-gray-50 text-black hover:bg-indigo-50 hover:border-indigo-300 transition-colors">
                  Chat with Harsh
                </button>
              </Link>
            </div>
          </div>
          {/* Avatar Card 3 - Omkar */}
          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-200">
            <div className="aspect-square bg-indigo-50 relative overflow-hidden">
              <Canvas shadows camera={{ fov: 20 }}>
                <Scenario avatarType="omkar" />
              </Canvas>
            </div>
            <div className="p-7 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Omkar</h3>
              <p className="text-gray-600 mb-6 font-medium">Tech enthusiast with a passion for AI and innovative solutions</p>
              <Link to="/chat/omkar">
                <button className="font-semibold border border-gray-300 rounded-full py-2 px-6 bg-gray-50 text-black hover:bg-indigo-50 hover:border-indigo-300 transition-colors">
                  Chat with Omkar
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Navigation arrows */}
        <div className="flex justify-center mt-12 gap-6">
          <button className="bg-white p-4 rounded-full shadow-md border border-gray-100 hover:bg-indigo-50 transition hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="bg-white p-4 rounded-full shadow-md border border-gray-100 hover:bg-indigo-50 transition hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />

      {/* Loader outside Canvas */}
      <Loader />

      {/* Leva controls hidden */}
      <Leva collapsed hidden />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat/max" element={<MaxChatPage avatarType="maitri" />} />
        <Route path="/chat/harsh" element={<MaxChatPage avatarType="harsh" />} />
        <Route path="/chat/omkar" element={<MaxChatPage avatarType="omkar" />} />
      </Routes>
    </Router>
  );
}

export default App;