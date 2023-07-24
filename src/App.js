import { AppContextProvider } from "./store/context";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Bundle from './components/pages/Bundle';
import './App.css';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Header />
        <Bundle />
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
