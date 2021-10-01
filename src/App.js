import './App.css';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
      <ScrollToTop />
    </div>
  );
}

export default App;
