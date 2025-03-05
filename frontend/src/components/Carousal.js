import React from 'react'

const Carousal = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner " id="carousel">

                    <div class="carousel-item active">
                        {/*<span className='text-white' style={{display: 'flex',alignItems: 'center',justifyContent: 'center' }}>Cravings calling? We’ve got the perfect answer. Order now..</span>*/}
                        <img src={process.env.PUBLIC_URL + "/images/restaurant/img1.png"} class="d-block w-75" style={{ filter: "brightness(80%)", marginLeft: "12.5%" }} alt="..." />
                    </div>
                    <div class="carousel-item">
                        {/*<span className='text-white'>Your cravings, our creation. Let’s make it happen.</span>*/}
                        <img src={process.env.PUBLIC_URL + "/images/restaurant/img2.png"} class="d-block w-75" style={{ filter: "brightness(80%)", marginLeft: "12.5%" }} alt="..." />
                    </div>
                    <div class="carousel-item">
                        {/*<span className='text-white'>Where every bite is a sizzling celebration!</span>*/}
                        <img src={process.env.PUBLIC_URL + "/images/restaurant/img3.png"} class="d-block w-75" style={{ filter: "brightness(80%)", marginLeft: "12.5%" }} alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon custom-icon-size" aria-hidden="true" ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon custom-icon-size" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                
            </div>
        </div>
    )
}

export default Carousal

