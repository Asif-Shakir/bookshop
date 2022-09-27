import Header from '../../Components/header';

const AddBook = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="card bg-light">
              <div className="card-body">
                <h1 class="display-6 text-success fw-800">
                  Add Book
                </h1>
                <div className="row">
                  <div className="col-6">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
