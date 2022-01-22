import React from 'react';
import Menu from './Menu';

const Button = ({ filterData, catVal }) => {


    return (
        <>
            <div className='container '>
                <div className='row button-div '>
                    {
                        catVal.map((currElem, index) => {
                            return (
                                <div className='col-4 col-md-3 col-lg-2 all-btns mx-auto'>
                                    <button type="button" className="btn btn-warning btns"
                                        onClick={() => filterData(currElem)} key={index}>{currElem}</button>
                                </div>
                            )
                        })
                    }

                    {/* <div className='col-4 col-md-3 col-lg-2 all-btns mx-auto'>
                        <button type="button" className="btn btn-warning btns"
                        onClick={()=>filterData('lunch')}>lunch</button>
                    </div>
                    <div className='col-4 col-md-3 col-lg-2 all-btns mx-auto'>
                        <button type="button" className="btn btn-warning btns"
                        onClick={()=>filterData('Evening')}>evening</button>
                    </div>

                    <div className='col-4 col-md-3 col-lg-2 all-btns mx-auto'>
                        <button type="button" className="btn btn-warning btns"
                        onClick={()=>filterData('timepass')}>timepass</button>
                    </div>

                    <div className='col-4 col-md-3 col-lg-2 all-btns mx-auto'>
                        <button type="button" className="btn btn-warning btns"
                        onClick={()=>Menuitem(Menu)}>All</button>
                    </div>
                    <div className='col-4 col-md-3 col-lg-2 all-btns mx-auto'>
                        <button type="button" className="btn btn-warning btns"
                        onClick={()=>filterData('Dinner')}>Dinner</button>
                    </div> */}
                </div>
            </div>

        </>

    );
};

export default Button;
