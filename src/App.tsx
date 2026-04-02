import { Routes, Route } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Join } from './pages/Join';
import { Gallery } from './pages/Gallery';
import { Service } from './pages/Service';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <AppShell header={{ height: 72 }} padding={0}>
      <ScrollToTop />
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
