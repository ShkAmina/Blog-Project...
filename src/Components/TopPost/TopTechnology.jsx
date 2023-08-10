import React,{useContext} from "react";
import {Store} from '../StoredData'
import { Link } from "react-router-dom";
import "../Pages/BTHFF.css"


function TopTechnology(){

    const [topTechnology]=useContext(Store);
    console.log(topTechnology);
    return(
        <>
         <h1 className='Cat'>TopPost
            <hr className='ShortLine' />
          </h1>
        <div className="TopPostBollywood">
     
        {topTechnology.filter((item) => item.category === 'Technology').map((data, index) => {
            return (
             
                <div key={index}>
                  <div className='News'>
                    <div>
                      <img className='NewsImg' src={data.image} alt="Loading" />
                    </div>
                    <div className='Containt'>
                      <Link to={`/NewPage/${data.heading}`} state={data}>
                        <h2 className='TopHeadings'>{data.heading.slice(0,100)}</h2>
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
export default TopTechnology