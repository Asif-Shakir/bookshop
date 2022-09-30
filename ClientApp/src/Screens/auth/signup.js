import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUrl from "../../Shared/Urls/apiUrl";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl.Signup, JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.status === 200) {
        return navigate("/");
      }
    } catch (err) {}
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="card bg-light">
              <div className="card-body">
                <h1 className="display-6 text-success fw-800">Signup</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="Enter email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          name="password"
                          type="text"
                          className="form-control"
                          placeholder="Enter password"
                          onChange={handleChange}
                        />
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

export default Signup;
