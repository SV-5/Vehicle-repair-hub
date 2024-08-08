import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminPage from './AdminPage'; // Import the AdminPage component
import Footer from './Footer';
import Guide from './Guide';
import HomePage from './HomePage';
import LocalServiceShop from './LocalServiceShop';
import Login from './Login';
import NavBar from './NavBar';
import Safety from './Safety';
import ServiceCalculator from './ServiceCalculator'; // Import new page components
import SignUp from './SignUp';
import './styles.css'; // Import CSS file for styling
import Tips from './Tips';
import VideoAssistance from './VideoAssistance';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/service-calculator" element={<ServiceCalculator />} /> {/* Add route for Service Calculator */}
          <Route path="/guide" element={<Guide />} /> {/* Add route for Guide */}
          <Route path="/video-assistance" element={<VideoAssistance />} /> {/* Add route for Video Assistance */}
          <Route path="/local-service-shop" element={<LocalServiceShop />} /> {/* Add route for Local Service Shop */}
          <Route path="/tips" element={<Tips />} /> {/* Add route for Tips */}
          <Route path="/safety" element={<Safety/>} /> {/* Add route for Tips */}
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
// const API_KEY = 'AIzaSyDM-WiieymuKfXivzijnhmD9hDAN2FK0lk';


export default App;
