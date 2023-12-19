import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useApiLoader } from '../ApiLoaderContext';
import Loader from '../Loader';
import './auth.css';
import Banner from '../images/banner.jpg'

function Signup() {

  const { loading,startLoading, stopLoading } = useApiLoader();

const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email:'',
    mobile:''
  })



  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)               
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      startLoading();
      const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        Navigate('/login')
        sessionStorage.setItem('signupSuccess', 'true');
        console.log('Data sent successfully');
      } else {
   
        toast.error('Signup failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }finally{
      stopLoading();
    }
  };



  const myStyles = {
    background: '#000',
    fontSize: '16px',
    border: '1px solid black',
    padding: '20px',
    color: '#fff'
  };

  return (
    <div className='containerfluid' style={myStyles}> 
   
      <div className='container py-4'>
      {loading && <Loader />}
      <ToastContainer/>
    <div className='row'>

<div className='col-md-6 col-12 '>
<img src={Banner} alt='banner' width={'100%'}/>
</div>
      <div className='col-md-6 col-12 px-4'>
      <form onSubmit={handleSubmit}>

  <div className="form-group">
    <label htmlFor="email">username</label>
    <input
      type="username"
      className="form-control"
      id="username"
      name="username"
      aria-describedby="emailHelp"
      placeholder="Enter username"
      value={formData.username}
      onChange={handleChange}
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>



  <div className="form-group">
    <label htmlFor="email">email</label>
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
    <label htmlFor="email">number</label>
    <input
      type="number"
      className="form-control"
      id="mobile"
      name="mobile"
      aria-describedby="emailHelp"
      placeholder="Enter mobile"
      value={formData.mobile}
      onChange={handleChange}
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your mobile with anyone else.
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

<div className='p-3'>


<button type="submit" className="btn btn-primary">submit</button>

</div>

</form>

<Link  to={'/login'} >
<button>login </button>
</Link>
      </div>

    </div>
  </div>
  </div>
  
  )
}


export default Signup