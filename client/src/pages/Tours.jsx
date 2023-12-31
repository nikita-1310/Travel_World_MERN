import React,{useState, useEffect} from 'react'
import {Col, Container, Row} from "reactstrap"
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import tourData from '../assets/data/tours'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import NewsLetter from '../shared/NewsLetter'
const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(()=>{
    const pages = Math.ceil(5/8)
    setPageCount(pages)
  },[page])

  return <>
    <CommonSection title={"All Tours"} />
    <section>
      <Container>
        <Row>
          <SearchBar />
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            tourData?.map(tour=>(
               <Col lg="3" md='6' sm='6' key={tour.id}>
                <TourCard tour={tour} />
               </Col>
               ))
          }

          <Col lg="12">
            <div className="pagination mt-4 gap-3 d-flex align-items-center justify-content-center">
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=>setPage(number)}
                className={page===number ? "active__page" : ""}
                >
                  {number +1}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
}
export default Tours
