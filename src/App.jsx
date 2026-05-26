import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ManifestosHub from './pages/ManifestosHub.jsx';
import ManifestoDetail from './pages/ManifestoDetail.jsx';
import ArtPage from './pages/ArtPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manifestos" element={<ManifestosHub />} />
          <Route path="/manifesto/:id" element={<ManifestoDetail />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
