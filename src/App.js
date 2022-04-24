import Home from './pages/Home';
import Nav from './components/Nav'
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from "react-router-dom"

// 5
function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Home/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
