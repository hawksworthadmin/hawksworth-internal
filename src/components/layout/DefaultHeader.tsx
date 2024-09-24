import React from 'react'

export default function DefaultHeader() {
    return (
        <>
            <header className="theme-main-menu menu-overlay menu-style-one white-vr sticky-menu">
                <div className="inner-content position-relative">
                    <div className="top-header">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logo order-lg-0">
                                <a href="index.html" className="d-flex align-items-center" style={{ width: '200px', height: '50px' }}>
                                    <img src="/logo-light.svg" alt="" />
                                </a>
                            </div>
                            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                                <ul className="d-flex align-items-center style-none">
                                    <li className="d-none d-md-block"><a href="contact.html" className="btn-one tran3s">Get in Touch</a></li>
                                </ul>
                            </div>
                            <nav className="navbar navbar-expand-lg p0 order-lg-2">
                                <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav align-items-lg-center">
                                        <li className="d-block d-lg-none"><div className="logo"><a href="index.html" className="d-block"><img src="/logo-light.svg" alt=""/></a></div></li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="index.html" className="dropdown-item"><span>Finance</span></a></li>
                                                <li><a href="index-2.html" className="dropdown-item"><span>Business Consultancy</span></a></li>
                                                <li><a href="index-3.html" className="dropdown-item"><span>Banking</span></a></li>
                                                <li><a href="index-4.html" className="dropdown-item"><span>Payment Solution</span></a></li>
                                                <li><a href="index-5.html" className="dropdown-item"><span>Digital Agency</span></a></li>
                                                <li><a href="index-6.html" className="dropdown-item"><span>Marketing</span></a></li>
                                                <li><a href="index-7.html" className="dropdown-item"><span>Insurance</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mega-dropdown-sm">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="row gx-1">
                                                    <div className="col-lg-4">
                                                        <div className="menu-column">
                                                            <ul className="style-none mega-dropdown-list">
                                                                <li><a href="service-v1.html" className="dropdown-item"><span>Service v-1</span></a></li>
                                                                <li><a href="service-v2.html" className="dropdown-item"><span>Service v-2</span></a></li>
                                                                <li><a href="service-details.html" className="dropdown-item"><span>Service Details</span></a></li>
                                                                <li><a href="team-v1.html" className="dropdown-item"><span>Team V-1</span></a></li>
                                                                <li><a href="team-v2.html" className="dropdown-item"><span>Team V-2</span></a></li>
                                                                <li><a href="team-details.html" className="dropdown-item"><span>Team Details</span></a></li>
                                                            </ul>
                                                        </div> 
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="menu-column">
                                                            <ul className="style-none mega-dropdown-list">
                                                                <li><a href="about-us-v1.html" className="dropdown-item"><span>About Us V-1</span></a></li>
                                                                <li><a href="about-us-v2.html" className="dropdown-item"><span>About Us V-2</span></a></li>
                                                                <li><a href="testimonial.html" className="dropdown-item"><span>Testimonial</span></a></li>
                                                                <li><a href="pricing.html" className="dropdown-item"><span>Pricing</span></a></li>
                                                                <li><a href="faq.html" className="dropdown-item"><span>FAQ’s</span></a></li>
                                                                <li><a href="404.html" className="dropdown-item"><span>404 Error</span></a></li>
                                                            </ul>
                                                        </div> 
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="menu-column">
                                                            <ul className="style-none mega-dropdown-list">
                                                                <li><a href="project-v1.html" className="dropdown-item"><span>Project V-1</span></a></li>
                                                                <li><a href="project-v2.html" className="dropdown-item"><span>Project V-2</span></a></li>
                                                                <li><a href="project-v3.html" className="dropdown-item"><span>Project V-3</span></a></li>
                                                                <li><a href="project-details-v1.html" className="dropdown-item"><span>Project Details V-1</span></a></li>
                                                                <li><a href="project-details-v2.html" className="dropdown-item"><span>Project Details V-2</span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Shop
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="shop-grid.html" className="dropdown-item"><span>Shop</span></a></li>
                                                <li><a href="shop-details.html" className="dropdown-item"><span>Shop Details</span></a></li>
                                                <li><a href="cart.html" className="dropdown-item"><span>Cart</span></a></li>
                                                <li><a href="checkout.html" className="dropdown-item"><span>Checkout</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Blog
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="blog-v1.html" className="dropdown-item"><span>Blog List</span></a></li>
                                                <li><a href="blog-v2.html" className="dropdown-item"><span>Blog Grid</span></a></li>
                                                <li><a href="blog-details.html" className="dropdown-item"><span>Blog Details</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html" role="button">Contact Us</a>
                                        </li>
                                        <li className="d-md-none ps-2 pe-2"><a href="contact.html" className="btn-one w-100 mt-15 tran3s">Get in Touch</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
