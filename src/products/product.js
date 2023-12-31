import React from 'react'
import "./product.css";
import Header from '../Shared/header/header';
import Footer from '../Shared/footer/footer';

function Product() {
  return (
    <>
    
    <Header/>
        
    <div><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

<div class="container bg-white">
    <nav class="navbar navbar-expand-md navbar-light bg-white">
        <div class="container-fluid p-0"> <p class="navbar-brand text-uppercase fw-800" ><span class="border-red pe-2">New</span>Product</p> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
            <div class="collapse navbar-collapse" id="myNav">
                <div class="navbar-nav ms-auto"> <p class="nav-link active" aria-current="page" >All</p> <p class="nav-link" >Women's</p> <p class="nav-link" >Men's</p> <p class="nav-link">Kid's</p> <p class="nav-link">Accessories</p> <p class="nav-link" >Cosmetics</p> </div>
            </div>
        </div>
    </nav>
    <div class="row">
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">sale</div>
            <div class="title pt-4 pb-1">Winter Sweater</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 60.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="tag bg-black">out of stock</div>
            <div class="title pt-4 pb-1">Denim Dresses</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 55.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="tag bg-green">new</div>
            <div class="title pt-4 pb-1"> Empire Waist Dresses</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 70.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="title pt-4 pb-1">Pinafore Dresses</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 60.0</div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="tag bg-red">sale</div>
            <div class="title pt-4 pb-1">Winter Sweater</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 60.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="tag bg-black">out of stock</div>
            <div class="title pt-4 pb-1">Denim Dresses</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 55.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="title pt-4 pb-1"> Empire Waist Dresses</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 70.0</div>
        </div>
        <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product"> <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div class="tag bg-green">new</div>
            <div class="title pt-4 pb-1">Pinafore Dresses</div>
            <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            <div class="price">$ 60.0</div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</div>

    <Footer/>
    </>

  )
}

export default Product