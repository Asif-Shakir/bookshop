import Header from "../../Components/header";

const AddBook = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto">
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter title"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
