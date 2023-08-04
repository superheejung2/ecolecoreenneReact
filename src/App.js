import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { DarkModeProvider } from './context/DarkModeContext'

function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
