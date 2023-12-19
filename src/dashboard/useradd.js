import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useApiLoader } from '../ApiLoaderContext';
import Loader from '../Loader';


 const Useradd = () => {

  const { loading,startLoading, stopLoading } = useApiLoader();
  const [myString, setMyString] = useState("121");
  const [myBoolean, setMyBoolean] = useState(true);
  
  const initialFormData = {
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    password: '',
  };

    const [formData, setFormData] = useState(initialFormData);

 
  const myStyles = {
    background: '#000',
    fontSize: '16px',
    border: '1px solid black',
    padding: '20px',
    color: '#fff'
  };

const hello = (e,v) => {
  console.log('its event', e ,v)

};
const test = (e) => {
  console.log(e.target.checked);
  const isChecked = e.target.checked;
  console.log()

  setMyBoolean( (isChecked) => !isChecked);

setMyString(` ${isChecked}`)

};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      startLoading();

      const response = await fetch('http://localhost:4000/api/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData(initialFormData);
        console.log('Data sent successfully');
      } else {
        setFormData(initialFormData);
        toast.error('Failed to send data');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      stopLoading();
    }
  };


  const a = {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
    
  };

  const b = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
  };

  return (
    
    <div>
<ToastContainer/>
{loading && <Loader />}
      <div className='container py-4' style={myStyles}>
        
        <div className='row'>
          <div className='col-md-12'>
          <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          name="firstname"
          placeholder="Enter first name"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          name="lastname"
          placeholder="Enter last name"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Number</label>
        <input
          type="number"
          className="form-control"
          id="mobile"
          name="mobile"
          placeholder="Enter number"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>


      <input type='checkbox' name='check' id='check' onChange={(e) => test(e)} />

<div className='p-3'>

  
  
  <button type="submit" className="btn btn-primary" style={myBoolean ? a : b}>
        Submit
      </button>
</div>

    </form>

    <Link  to={'/login'} >
    <button >login </button>
      </Link>


<button onClick={(e) => hello(e,'hello kanha')}>{myString}</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Useradd