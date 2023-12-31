import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
function CreateTeacher() {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      subject: "",
      experience: "",
      salary: ""
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter Name "
      }

      if (values.name.length < 5) {
        errors.name = "Please enter Name less than 5 letters"
      }
      if (values.email === "") {
        errors.age = "Please enter email"
      }
      if (values.city === "") {
        errors.age = "Please enter city"
      }
      return errors;
    },
    onSubmit: async (values) => {
      let students = await axios.post("https://64a24575b45881cc0ae4f17b.mockapi.io/teacher", values);
      alert("Teacher Created");
    
      navigate('/portal/teachers');
      students();
    }


  })
  return (
    <>
      <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-center mb-4">
          <h1 className="h3 mb-0 text-dark-800">Create Teacher Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-6'>
              <label>Name</label>
              <input
                className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className='col-lg-6'>
              <label>E-mail</label>
              <input
                className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
              />
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            </div>
            <div className='col-lg-6'>
              <label>City</label>
              <input
                className={`form-control ${formik.errors.city ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.city}
                onChange={formik.handleChange}
                name="city"
              />
               <span style={{ color: "red" }}>{formik.errors.city}</span>
            </div>
            <div className='col-lg-6'>
              <label>Subject</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.subject}
                onChange={formik.handleChange}
                name="subject"
              />
            </div>
            <div className='col-lg-6'>
              <label>Experience</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.experience}
                onChange={formik.handleChange}
                name="experience"
              />
            </div>
            <div className='col-lg-6'>
              <label>Salary</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
            </div>
            <div className='col-lg-6 mt-2'>

              <input
                className='btn-primary'
                type={'submit'}
                value='Submit'
                disabled={!formik.isValid}
              />

            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default CreateTeacher;