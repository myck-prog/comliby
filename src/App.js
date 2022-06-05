import Home from './pages/Home';
import React, { useState, useEffect } from "react";
import Books from './pages/Books';
import Nav from './components/Nav'
import Footer from './components/Footer';
import BookInfo from './pages/BookInfo';
import { books } from './data'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Book from "./components/ui/Book"
import Cart from './pages/Cart';



// 2:14:17
function App() {
  const [cart, setCart] = useState([]);

  // All functionality are in here
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])

  }
  function numberOfItems(){
    let counter = 0;
    cart.forEach(item =>{
      counter += item.quantity
    })
    return counter;
  }
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      return item.id === book.id
        ? {

          ...item,
          quantity: +quantity,
          // we get quantity from the even.target.value

        }

        : item

    }))

  }
  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id))
    console.log("remove i")
  }
  // how to see it right away, [cart is the variable we are watching]
  useEffect(() => {
    console.log(cart)

  }, [cart]);
  return (
    <Router>
      <div className="App">
      {/* remember to not pass the function but pass the value */}
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// //PREVIOUS CODE
// function addToCart(book){
//   //using hooks in array we need to pass in an array
//   // setCart([...cart,{...book,quantity:1}]) how to increment duplicate items
//   const dupeItem = cart.find(item => +item.id === +book.id)
//   if(dupeItem){
//     setCart(cart.map(item => {
//       if(item.id === dupeItem.id){
//         return{
//           ...item,
//           quantity: item.quantity + 1,
//         };
//       }
//       else{
//         return item
//       }
//     }))
//   }
//   else{
//     setCart([...cart,{...book,quantity:1}])
//   }

// }
// // how to see it right away, [cart is the variable we are watching]
// useEffect(() => {
//   console.log(cart)

// }, [cart]);