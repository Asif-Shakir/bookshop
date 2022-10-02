import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../Components/card';
import apiUrl from '../../Shared/Urls/apiUrl';

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    const getBookList = async () => {
      const res = await axios.get(apiUrl.GetBookList);
      setBookList(res.data.resultData);
    };
    getBookList();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row gy-4">
          {bookList.map((item) => (
            <div className="col-4" key={item._id}>
              <Card book={item} details={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
