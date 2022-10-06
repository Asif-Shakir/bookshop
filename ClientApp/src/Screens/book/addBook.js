import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import apiUrl from "../../Shared/Urls/apiUrl";
import { getUserToken } from "../../Shared/util";
import Error from "../../Components/error";

const initialFormData = {
  _id: "",
  title: "",
  price: "",
  pages: "",
  description: "",
};
const AddBook = () => {
  const params = useParams();
  const [formData, setUpdateFormData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getBookDetails = async (bookId) => {
      const res = await axios.get(apiUrl.BookDetails + `/${bookId}`);
      setUpdateFormData(res.data.resultData);
    };
    if (params.bookId) getBookDetails(params.bookId);
  }, [params.bookId]);
  console.log(formData);
  const validationSchema = yup.object({
    title: yup
      .string()
      .required("Input is required")
      .matches(/^[aA-zZ\s]+$/, "Please enter valid name"),
    price: yup
      .string()
      .matches(/^\d{1,5}$/, "Input allows only digits with 5 values")
      .required("Input is required"),
    pages: yup
      .string()
      .matches(/^\d{1,5}$/, "Input allows only digits with 5 values")
      .required("Input is required"),
    description: yup.string().required("Input is required"),
  });
  const handleSubmit = async (values) => {
    console.log(values);
    let formData1 = new FormData();
    formData1.append("obj", JSON.stringify(values));
    formData1.append("image", values.image);
    try {
      const res = await axios.post(apiUrl.AddBook, formData1, {
        headers: {
          //"Content-Type": "application/json",
          Authorization: "Bearer " + getUserToken(),
        },
      });
      if (res.data.status === 200) {
        return navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="card bg-light">
              <div className="card-body">
                <h1 className="display-6 text-success fw-800">
                  {!params.bookId ? "Add Book" : "Edit Book"}
                </h1>
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={formData || initialFormData}
                  validationSchema={validationSchema}
                  enableReinitialize
                >
                  {(formik) => {
                    return (
                      <Form>
                        {/* <input type="hidden" value={formData._id} /> */}
                        <Field type="hidden" name="_id" />
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">Title</label>
                              <Field
                                name="title"
                                type="text"
                                className="form-control"
                                placeholder="Enter title"
                              />
                              <ErrorMessage name="title" component={Error} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div className="mb-3">
                              <label className="form-label">Price</label>
                              <Field
                                name="price"
                                type="text"
                                className="form-control"
                                placeholder="Enter price"
                              />
                              <ErrorMessage name="price" component={Error} />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="mb-3">
                              <label className="form-label">Pages</label>
                              <Field
                                name="pages"
                                type="text"
                                className="form-control"
                                placeholder="Enter page"
                              />
                              <ErrorMessage name="pages" component={Error} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-3">
                              <label className="form-label">Description</label>
                              <Field
                                as="textarea"
                                name="description"
                                rows="4"
                                className="form-control"
                                placeholder="Enter description"
                              />
                              <ErrorMessage
                                name="description"
                                component={Error}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">
                            <div className="mb-3">
                              <label className="form-label">Image</label>
                              <input
                                type="file"
                                name="image"
                                className="form-control"
                                onChange={(event) => {
                                  formik.setFieldValue(
                                    "image",
                                    event.currentTarget.files[0]
                                  );
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-success" type="submit">
                          Submit
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
