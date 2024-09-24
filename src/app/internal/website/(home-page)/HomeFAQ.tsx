import React from 'react'

type Props = {}

export default function HomeFAQ({ }: Props) {
    return (
        <section className='faq-section-one mt-150 mb-150 lg-mb-120 lg-mt-120 md-mb-80 md-mt-80'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
                        <div className="title-one mb-40 lg-mb-20">
                            <h2>Questions &amp; Answers</h2>
                        </div>
                        <p className="text-lg mb-40 lg-mb-20">Don’t find the answer? We can help</p>
                        <a href="contact.html" className="btn-four">Contact us</a>
                    </div>


                    <div className="col-lg-7">
                        <div className="accordion accordion-style-one mt-15 md-mt-50" id="accordionOne">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        How does the free trial work?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do you find different criteria in your process?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        What do you look for in a founding team?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Do you recommend Pay as you go or Pre pay?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What do I get for $0 with my plan?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}