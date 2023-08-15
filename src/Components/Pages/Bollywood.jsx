import React, { useContext } from 'react'
import { Store } from '../StoredData'
import { Link } from 'react-router-dom';
import "./BTHFF.css"
import TopBollywood from '../TopPost/TopBollywood';
import Linkcomp from '../LinkComp';
function Bollywood() {
  const [Bdata] = useContext(Store);
  console.log(Bdata)
  return (
    <>
    <Linkcomp/>
      <div className='TopPost'>
        <div className='MainData'>
          <h1 className='Cat'>Bollywood
            <hr className='ShortLine'/>
          </h1>
          {Bdata.filter((item) => item.category === 'Bollywood').map((data, index) => {
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
        <div className='Toppost'>
         
          <TopBollywood/>
        </div>
      </div>


    </>
  )
}

export default Bollywood