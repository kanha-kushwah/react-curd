import React from 'react'
import { Link } from 'react-router-dom'

 function Header() {
  return (
    <div>
<div className='containerfulid bg-light' >
<div className='container' >

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <p className="navbar-brand m-0">Navbar</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <Link className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      <form className="d-flex ms-3" role="search">

       <Link to={'/login'}><button className="btn btn-outline-success me-3" type="submit">Login</button></Link> 
       <Link to={'/signup'}>  <button className="btn btn-outline-danger" type="submit">Signup</button></Link> 

      </form>
    
    </div>
  </div>
</nav>
</div>
</div>
    </div>
  )
}

export default Header