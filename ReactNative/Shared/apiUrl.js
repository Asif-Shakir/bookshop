// const baseUrl = "http://localhost:8080/";
const baseUrl = 'http://192.168.10.4:8080/';
const apiUrl = {
  GetBookList: baseUrl + 'books',
  AddBook: baseUrl + 'addBook',
  BookDetails: baseUrl + 'bookDetail',
  Signup: baseUrl + 'signup',
  Login: baseUrl + 'login',
};

export default apiUrl;
