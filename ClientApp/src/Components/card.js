import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <>
      <div className="card">
        <div className="card-header bg-success">
          <h5 className="text-white">Price: Rs.{book.price}</h5>{" "}
        </div>
        <div className="card-body">
          <h5 className="card-title text-secondary">{book.title}</h5>
          <p style={{ height: "100px" }} className="overflow-hidden card-text">
            {book.description.substring(0, 200)}
          </p>
          <Link className="btn btn-primary me-2">Edit</Link>
          <Link className="btn btn-primary">Details</Link>
        </div>
      </div>
    </>
  );
};

export default Card;
