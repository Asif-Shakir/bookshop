import { Link } from "react-router-dom";
import notFound from "../images/notfound.png";
const Card = ({ book, details }) => {
  const imgSrc = book.imagePath
    ? "http://localhost:8080/" + book.imagePath
    : notFound;
  return (
    <>
      <div className="card">
        <div
          style={{
            height: "200px",
            overflow: "hidden",
            borderBottom: "1px solid #dadada",
          }}
        >
          <img src={imgSrc} className="w-100" alt={book.title}></img>
        </div>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h6 className="text-secondary">Price: Rs.{book.price}</h6>
          {!details ? (
            <p
              style={{ height: "100px" }}
              className="overflow-hidden card-text"
            >
              {book?.description.substring(0, 200)}
            </p>
          ) : (
            <p className="overflow-hidden card-text">{book?.description}</p>
          )}

          <Link to={`/addBook/${book._id}`} className="btn btn-primary me-2">
            Edit
          </Link>
          {!details && (
            <Link to={`/details/${book._id}`} className="btn btn-primary">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
