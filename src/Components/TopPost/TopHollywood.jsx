import React,{useContext} from "react";
import {Store} from '../StoredData'
import { Link } from "react-router-dom";
import "../Pages/BTHFF.css"


function TopHollywood(){

    const [topHollywood]=useContext(Store);
    console.log(topHollywood);
    return(
        <>
         <h1 className='Cat'>TopPost
            <hr className='ShortLine' />
          </h1>
        <div className="TopPostBollywood">
        
        {topHollywood.filter((item) => item.category === 'Hollywood').map((data, index) => {
            return (
             
                <div key={index}>
                  <div className='TNews'>
                    <div>
                      <img className='TNewsImg' src={data.image} alt="Loading" />
                    </div>
                    <div className='TContaint'>
                      <Link to={`/NewPage/${data.heading}`} state={data}>
                        <h2 className='TTopHeadings'>{data.heading.slice(0,100)}</h2>
                      </Link>
                      <p>{data.description.slice(0,200)}</p>

                    </div>
                  </div>
                  <hr />
                </div>
            )



          })}
        
            </div>
        </>
    )
}
export default TopHollywood