import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Login from "./Screens/auth/login";
import Signup from "./Screens/auth/signup";
import AddBook from "./Screens/book/addBook";
import BookDetails from "./Screens/book/bookDetails";
import BookList from "./Screens/book/bookList";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Authentication */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          {/* BookRoutes */}
          <Route path="/addbook" element={<AddBook />}></Route>
          <Route path="/addbook/:bookId" element={<AddBook />}></Route>
          <Route path="/details/:bookId" element={<BookDetails />}></Route>
          <Route path="/" element={<BookList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
