import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import AddBook from "./Screens/book/addBook";
import BookList from "./Screens/book/bookList";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/addbook" element={<AddBook />}></Route>
          <Route path="/" element={<BookList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
