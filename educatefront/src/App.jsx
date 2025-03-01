import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter from here
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Certificates from './pages/Certificates';
import Profile from './pages/Profile';
import JavaScriptInDepth from './pages/CourseContent/JavaScriptInDepth';
import FrontEndLibraries from './pages/CourseContent/FrontEndLibraries';
import BuildingWebApp from './pages/CourseContent/BuildingWebApp';
import AdvancedjQuery from './pages/CourseContent/AdvancedjQuery';
import RealWorldReactJS from './pages/CourseContent/RealWorldReactJS';
import AdvancedFlutter from './pages/CourseContent/AdvancedFlutter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <main className="flex-grow">
        <Routes> {/* No Router here, only Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/profile" element={<Profile />} />

          {/* Course Content Pages */}
          <Route path="/course/javascript-in-depth" element={<JavaScriptInDepth />} />
          <Route path="/course/front-end-libraries" element={<FrontEndLibraries />} />
          <Route path="/course/building-web-app" element={<BuildingWebApp />} />
          <Route path="/course/advanced-jquery" element={<AdvancedjQuery />} />
          <Route path="/course/real-world-reactjs" element={<RealWorldReactJS />} />
          <Route path="/course/advanced-flutter" element={<AdvancedFlutter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;