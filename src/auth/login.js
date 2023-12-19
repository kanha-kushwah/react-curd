import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const Navigate = useNavigate();
  const signupSuccess = sessionStorage.getItem('signupSuccess');

  if (signupSuccess === 'true') {
    toast("login sucess")
    sessionStorage.removeItem('signupSuccess');
}
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Save the token in session storage
        sessionStorage.setItem('token', token);

        // Make subsequent authenticated requests
        const dashboardResponse = await fetch('http://localhost:4000/api/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (dashboardResponse.ok) {
          Navigate('/dashboard');
          console.log('Token saved successfully');
        }

      } else {
             toast.error('Login failed. Please check your credentials.');

      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');

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
    
    <div> 
              <ToastContainer />

       <div className='container py-4' style={myStyles}>
    <div className='row'>
      <div className='col-md-12'>
      <form onSubmit={handleSubmit}>

  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input
      type="text"
      className="form-control"
      id="username"
      name="username"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      value={formData.username}
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

<div className='p-3'>


<button type="submit" className="btn btn-primary">submit</button>

</div>

</form>

<Link  to={'/'} >
<button>signup </button>
</Link>
      </div>
    </div>
  </div></div>
  )
}

export default Login