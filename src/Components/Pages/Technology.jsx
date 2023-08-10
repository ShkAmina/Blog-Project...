
import React, { useContext } from 'react'
import { Store } from '../StoredData'
import { Link } from 'react-router-dom';
import "./BTHFF.css"
import TopTechnology from '../TopPost/TopTechnology';
import Linkcomp from '../LinkComp';
function Technology() {
  const [Tdata] = useContext(Store);
  console.log(Tdata)
  return (
    <>
    <Linkcomp/>
    <div className='TopPost'>
      <div>
        <h1 className='Cat'>Technology
          <hr className='ShortLine' />
        </h1>
        {Tdata.filter((item) => item.category === 'Technology').map((data, index) => {
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
                    <p>{data.description.slice(0,300)}.....</p>

                  </div>
                </div>
                <hr />
              </div>
          )
        })}
      </div>
      <div>
       
        <TopTechnology/>
      </div>
    </div>


  </>
  )
}

export default Technology