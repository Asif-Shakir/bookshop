import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';

const initialFormData = {
  email: '',
  password: '',
};
const Login = () => {
  const ctx = useContext(AuthContext);
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    ctx.getLoginData(formData);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="card bg-light">
              <div className="card-body">
                <h1 className="display-6 text-success fw-800">
                  Login
                </h1>
                <form onSubmit={handleSubmit}>
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
                  <button
                    className="btn btn-success"
                    onClick={handleSubmit}
                  >
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

export default Login;
