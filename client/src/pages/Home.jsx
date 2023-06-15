import React from 'react'
import "../styles/home.css"
import {Container, Row, Col} from "reactstrap"
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import worldImg from "../assets/images/world.png"
import heroVideo from "../assets/images/hero-video.mp4"
import experienceImg from "../assets/images/experience.png"
import SubTitle from "./../shared/SubTitle"
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../Components/Featured-tour/FeaturedTourList'
import MasooryImagesGallery from '../Components/image-gallery/MasooryImagesGallery'
import Testmon from '../Components/Testmon/Testmon'
import NewsLetter from '../shared/NewsLetter'
const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <SubTitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span className="highlight">
                memories
              </span></h1>
              <p>
                Travel gives us our greatest stories, our most cherished memories and countless irreplaceable learnings that we can choose to pay forwards to others.
              </p>
            </div>
          </Col>
          

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          
          <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4" >
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5" >
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>


    {/* <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve </h5>
            <h2 className="services__title">We offer our best services </h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section> */}


    {/* Feature tour section  */}

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <SubTitle subtitle={'Explore'} />
            <h2 className="featured__tour-title">
              Our Featured Tours
            </h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

{/* ========================================== Experience Section  */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <SubTitle subtitle={'Experience'} />
              <h2>
                With our all experience <br /> We will serve you 
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adip <br /> isicing elit. Iure, praesentium?
              </p>

            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12K+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2K+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years Experience </h6>
              </div>
            </div>
          </Col>

          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

{/* ====================================== Gallery Section Start */}

<section>
  <Container>
    <Row>
      <Col lg="12">
      <SubTitle subtitle={'Gallery'} />
      <h2 className="gallery__title">
        Visit our customers tours gallery
      </h2>
      </Col>
      <Col lg="12">
        <MasooryImagesGallery />
      </Col>
    </Row>
  </Container>
</section>

{/* =============================== Testimonials Section  */}

<section>
  <Container>
    <Row>
      <Col lg="12">
      <SubTitle subtitle={'Fans Love'} />
      <h2 className="testimonials__title">
        What our fans say about us
      </h2>
      </Col>
      <Col lg="12">
        <Testmon />
      </Col>
    </Row>
  </Container>
</section>


{/* ========================== News Letter Section */}

<NewsLetter />

  </>
}
export default Home
