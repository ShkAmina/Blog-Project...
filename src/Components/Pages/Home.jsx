import React, { useContext } from 'react'
import { Store } from '../StoredData'
import './BTHFF.css'
import video1 from '../Advideo.mp4'
import video2 from '../Ad2video.mp4'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Linkcomp from '../LinkComp'
const Home = () => {

  const [theLatest] = useContext(Store);
  const [LatestArticle] = useContext(Store);
  const [TopPost] = useContext(Store);
  const [LatestStories] = useContext(Store);
  return (
    <>
    <Linkcomp/>
      <div className='Home'>
        <div className='ThreeImg'>
          <div>
            <img src="https://e0.pxfuel.com/wallpapers/338/81/desktop-wallpaper-jungkook-bts-concert.jpg" className='ImgOne' alt="" />
          </div>
          <div className='TwoImg'>
            <div>
              <img src='https://c.ndtvimg.com/2023-03/hf65qajg_rashmika-mandanna_625x300_13_March_23.jpg' className=" ImgTwo" alt="" />
            </div>
            <div>
              <img src="https://www.aurusjewels.com/cdn/shop/articles/Mehndi_in_Indian_weddings.jpg?v=1676727334&width=1728" className=" ImgTwo" alt="" />


            </div>
          </div>
        </div>

        <div className='Topic'>
          <h1 className='The_Latest'>The Latest
            <hr className='ShortLine' />
          </h1>
          <div className="TheLatest">
            {theLatest.filter((item) => item.category === 'TheLatest').map((data, index1) => {
              return (


                <div className="TheLatestBox" key={index1}>
                  <div>
                    <img src={data.image} alt="" className="TheLatestImg" />
                  </div>
                  <div className="TheLatestContaint">
                    <Link to={`/NewPage/${data.heading}`} state={data}>
                      <h2>{data.heading}</h2>
                    </Link>
                    <p>{data.description.slice(0, 200)}</p>
                  </div>
                </div>

              )
            })}
          </div>

        </div>
        <div><h1 className='The_Latest'> Latest Article
          <hr className='ShortLine' />
        </h1></div>
        <div className='Home3rdPart'>

          <div className='Topic'>

            {LatestArticle.filter((item) => item.category === "LatestArticle").map((Data, index) => {
              return (
                <div className='LatestArticleBox' key={index}>
                  <img src={Data.image} alt="" className="ArticleImg" />
                  <div className="TheArticleContaint">
                    <Link to={`/NewPage/${Data.heading}`} state={Data}>
                      <h2>{Data.heading}</h2>
                    </Link>
                    <p>{Data.description.slice(0, 300)}</p>
                    <hr />
                  </div>

                </div>
              )
            })}

            <div><h1 className='The_Latest'>Samsung
              <hr className='ShortLine' />
            </h1></div>
            <video autoPlay loop muted id='video2' >
              <source src={video2} type='video/mp4' />
            </video>

          </div>
          <div  className='Adverticement'>
            <div className='HomeAd'>
              Advertisement
              <video autoPlay loop muted id='video' >
                <source src={video1} type='video/mp4' />
              </video>


            </div>
            <div >
              <h1 className='The_Latest'>Top Post
                <hr className='ShortLine' />
              </h1>
              {TopPost.filter((item) => item.category === "TopPost").map((Data, index2) => {
                return (
                  <div className='TopPostHome' key={index2}>
                    <img src={Data.image} alt="" className="TopPostImg" />
                    <div className='TopPostContaint'>
                      <Link to={`/NewPage/${Data.heading}`} state={Data}>
                        <h2>{Data.heading}</h2>
                      </Link>
                      <p>{Data.description.slice(0, 232)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div><h1 className='The_Latest'>Latest Stories
          <hr className='ShortLine' />
        </h1></div>
        <div className='LatestSTories'>

          {LatestStories.filter((item) => item.category === 'LatestStories').map((data, index) => {
            return (
              <div className='LatestSToriesContainer' key={index}>
                <Link to={`/NewPage/${data.heading}`} state={data}>
                  <h2>{data.heading}</h2>
                </Link>
                <p>{data.description}</p>
              </div>
            )
          })}
        </div>
        <div className='FooterCom'>

        <Footer/>
        </div>

      </div>
    </>
  )
}

export default Home