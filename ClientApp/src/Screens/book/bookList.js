import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../Components/card";
import apiUrl from "../../Shared/Urls/apiUrl";
import { getUserToken } from "../../Shared/util";

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    const getBookList = async () => {
      const res = await axios.get(apiUrl.GetBookList, {
        headers: {
          Authorization: "Bearer " + getUserToken(),
        },
      });
      console.log(res);
      setBookList(res.data.resultData);
    };
    getBookList();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row gy-4">
          {bookList.length ? (
            bookList.map((item) => (
              <div className="col-4" key={item._id}>
                <Card book={item} details={false} />
              </div>
            ))
          ) : (
            <p className="text-danger">No record found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookList;
