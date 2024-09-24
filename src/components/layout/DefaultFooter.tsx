import React from 'react'

export default function DefaultFooter() {
    return (
        <>
            <div className="footer-two" style={{ backgroundImage: `ulr(https://static.vecteezy.com/system/resources/previews/003/462/322/non_2x/abstract-dark-navy-blue-hexagon-pattern-background-in-3d-style-vector.jpg)`}}>
                <div className="container">
                    <div className="bg-wrapper position-relative">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-3 col-lg-4 footer-intro mb-30">
                                    <div className="logo mb-35 md-mb-20">
                                        <a href="index.html">
                                            <img src="/logo-dark.png" alt="" />
                                        </a>
                                    </div>
                                    <p className="lh-sm mb-40 md-mb-20">2190 Urban Terrace, Mirpur,  link Licensed in 50 states.</p>
                                    <ul className="style-none d-flex align-items-center social-icon">
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi bi-dribbble"></i></a></li>
                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4 mb-20">
                                    <h5 className="footer-title">Links</h5>
                                    <ul className="footer-nav-link style-none">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="pricing.html">Pricing Plan</a></li>
                                        <li><a href="about-us-v1.html">About us</a></li>
                                        <li><a href="service-v1.html">Our services</a></li>
                                        <li><a href="project-v1.html">Portfolio</a></li>
                                        <li><a href="blog-v1.html">Careers</a></li>
                                        <li><a href="service-v2.html">Features</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-sm-4 mb-20">
                                    <h5 className="footer-title">Company</h5>
                                    <ul className="footer-nav-link style-none">
                                        <li><a href="about-us-v2.html">About us</a></li>
                                        <li><a href="blog-v2.html">Blogs</a></li>
                                        <li><a href="faq.html">FAQ’s</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
                                    <h5 className="footer-title">Support</h5>
                                    <ul className="footer-nav-link style-none">
                                        <li><a href="contact.html">Terms of use</a></li>
                                        <li><a href="contact.html">Terms &amp; conditions</a></li>
                                        <li><a href="contact.html">Privacy</a></li>
                                        <li><a href="contact.html">Cookie policy</a></li>
                                        <li><a href="contact.html">Self-service</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="copyright text-center">Copyright @2023 babun inc.</div>
                        </div>
                        <img src="images/shape/shape_06.svg" alt="" className="lazy-img shapes shape_01" />
                        <img src="images/shape/shape_06.svg" alt="" className="lazy-img shapes shape_02" />
                    </div>
                </div>
            </div>
        </>
    )
}
