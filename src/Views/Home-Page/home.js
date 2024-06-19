import React from 'react'
import './Home.css'
import CardHome from '../../Components/Cards/cardsHome'
import ControlledCarousel from '../../Components/Carousel/carousel'
import '../../Components/ButtonFeedBack/Button.css'

function Home() {
  return (
    <div className='main'>
      <div className='sec-1'>
        <h1 className='head'>At your service</h1>
        <h5 className='sub-head'>We offer impeccable, customizable cleaning services.</h5>
        <ControlledCarousel className='carousel' />
        <hr className='custom-line' />
        <p className='sub-img1'>Experience the highest standards of cleanliness with our comprehensive cleaning services.
          We ensure every surface sparkles and every room radiates freshness, creating a pristine environment for you to enjoy.
        </p>
        <hr className='custom-line' />
        <div className='card-home'>
          <CardHome />
        </div>
      </div>
      <div className='sec-2'>
        <h2>Testimonials</h2>
        <div className='testimonials'>
          <div className='fst-test'>
            <p className='test-des'>
              “Morgan did a totally wonderful job! Thank you guys, our ShackletonThomas store looks fabulous for Presidents'
              Day and vacation week.”
            </p>
            <p className='test-name'>
              - Ali Kamel
            </p>
          </div>
          <div className='sst-test'>
            <p className='test-des'>
              “Sarah is a wizard! You'd never know we have large dogs, and she makes stains we'd given up on disappear.
              She does a thoroughly wonderful job each and every time.”
            </p>
            <p className='test-name'>
              - Khaled Mohamed
            </p>
          </div>
        </div>
        <a href="/buttons/41" class="btn41-43 btn-41">
          Your Feedback!
        </a>      </div>
    </div>
  )
}

export default Home
