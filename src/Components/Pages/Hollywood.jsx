
import React, { useContext } from 'react'
import { Store } from '../StoredData'
import { Link } from 'react-router-dom';
import './BTHFF.css'
import TopHollywood from '../TopPost/TopHollywood';
import Linkcomp from '../LinkComp';
function Hollywood() {
  const [Hdata] = useContext(Store);
  console.log(Hdata)
  return (
    <>
    <Linkcomp/>
    <div className='TopPost'>
      <div>
        <h1 className='Cat'>Hollywood
          <hr className='ShortLine' />
        </h1>
        {Hdata.filter((item) => item.category === 'Hollywood').map((data, index) => {
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
       
        <TopHollywood/>
      </div>
    </div>


  </>
  )
}

export default Hollywood