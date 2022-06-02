import Home from './pages/Home';
import Books from './pages/Books';
import Nav from './components/Nav'
import Footer from './components/Footer';
import BookInfo from './pages/BookInfo';
import {books} from './data'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Book from "./components/ui/Book"



// 1:26:13
function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/books" exact element={<Books books={books}/>} />
        <Route path="/books/:id" element={<BookInfo books={books}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
