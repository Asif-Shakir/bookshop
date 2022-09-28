import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../Shared/Urls/apiUrl";

const initialFormData = Object.freeze({
  title: "",
  price: "",
  pages: "",
  description: "",
});
const AddBook = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl.AddBook, JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.status == 200) {
        return navigate("/");
      }
    } catch (err) {}
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="card bg-light">
              <div className="card-body">
                <h1 className="display-6 text-success fw-800">Add Book</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                          name="title"
                          type="text"
                          className="form-control"
                          placeholder="Enter title"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                          name="price"
                          type="text"
                          className="form-control"
                          placeholder="Enter price"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Pages</label>
                        <input
                          name="pages"
                          type="text"
                          className="form-control"
                          placeholder="Enter page"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          name="description"
                          rows="4"
                          className="form-control"
                          placeholder="Enter description"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-success" onClick={handleSubmit}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
