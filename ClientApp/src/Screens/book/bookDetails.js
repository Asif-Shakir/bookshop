import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../Components/card';
import apiUrl from '../../Shared/Urls/apiUrl';

const BookDetails = () => {
  const [bookDetail, setBookDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    const getBookDetails = async () => {
      const res = await axios.get(
        apiUrl.BookDetails + `/${params.bookId}`
      );
      setBookDetail(res.data.resultData);
    };
    getBookDetails();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 mx-auto">
            <Card book={bookDetail} details={true} />
          </div>
        </div>
      </div>
    </>
  );
};
export default BookDetails;
