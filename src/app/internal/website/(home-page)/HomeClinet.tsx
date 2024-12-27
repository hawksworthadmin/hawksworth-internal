export default function HomeClient() {
    return <>
        <div
            className="block-feature-eight position-relative pt-130 lg-pt-80 pb-130 lg-pb-60">
            <div className="container">
                <div className="position-relative">
                    <div className="title-two mb-20 lg-mb-10">
                        <h2>Our Trusted Clients</h2>
                    </div>
                    <p className="text-lg mb-45 lg-mb-10">
                        These are the clients that trust us to deliver the best.
                    </p>
                    <div className="row">
                        <EachClient
                            img={"https://www.iisd.org/sites/default/files/styles/og_image/public/2021-05/Vertical_RGB_294.png?itok=-NYEE6-5"}
                            label={'US Aid'}
                        />
                        <EachClient
                            img={"https://weadapt.org/wp-content/uploads/2023/05/afdb.png"}
                            label={'AFDB'}
                        />
                        <EachClient
                            img={"https://cdn1.vc4a.com/media/2017/10/GIZ-logo.jpeg"}
                            label={'GIZ'}
                        />
                        <EachClient
                            img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTTbzDje5vSeHz93QsPFiP6ZXAoAeVniIbPaWKM3MUt3ATJMGtaksNK2wSc9_bNcHqVI&usqp=CAU"}
                            label={'GIZ'}
                        />
                    </div>

                    <div className="section-btn md-mt-40">
                        {/*<a href="service-v1.html" className="btn-four tran3">Learn*/}
                        {/*    More</a>*/}
                    </div>
                </div>
            </div>
            <img src="images/lazy.svg" data-src="images/shape/shape_16.svg" alt=""
                 className="lazy-img shapes shape_01"/>
        </div>
    </>
}

const EachClient = ({label, img}: { label: string; img: string; }) => {
    return <>
        <div className="col-lg-2 d-flex wow fadeInUp"
             style={{visibility: "visible", animationName: "fadeInUp"}}>
            <div className="card border-0 vstack tran3s w-100 mt-30 flex align-items-center">
                <div className={'card-body'}>
                    <img
                        src={img}
                        data-src="images/icon/icon_40.svg" alt={label}
                        // className="lazy-img icon me-auto"
                    />
                    {/*<h4 className="fw-500 mt-30 mb-15">Global Payment</h4>*/}
                    {/*<p className="mb-25">Maximize convenience by paying for*/}
                    {/*    ads, subscriptions, and inventory with*/}
                    {/*    Mastercard®.</p>*/}
                    {/*<a href="service-details.html"*/}
                    {/*   className="arrow-btn tran3s mt-auto stretched-link"><img*/}
                    {/*    src="images/lazy.svg"*/}
                    {/*    data-src="images/icon/icon_09.svg" alt=""*/}
                    {/*    className="lazy-img"/></a>*/}
                </div>
            </div>
        </div>
    </>
}
