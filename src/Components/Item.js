import React from 'react';


const Item = ({ name, category, description, price, msgs, img, id }) => {
    return (

        <>


            <div className="col-11 mx-auto col-md-6 col-lg-4 mb-5">
                <div className="card shadow mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="food Images" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{description}</p>
                                <div className="card-priceAndBtn">
                                    <p className="card-price">price : {price} Rs.</p>
                                    <button type="button" className="btn btn-success card-btn">order now</button>
                                </div>
                                <p className='msgs'>"{msgs}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Item;
