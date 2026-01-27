import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Header from './components/Header';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Router>
      <div className="bg-background-dark text-white font-body overflow-x-hidden selection:bg-primary selection:text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:id" element={<ProjectPage />} />
        </Routes>
        <ContactSection />
      </div>
    </Router>
  );
}

export default App;
