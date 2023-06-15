import React,{useContext, useState} from 'react'
import './booking.css';
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'
import {BASE_URL} from '../../utils/config'
import {ToastContainer, toast} from 'react-toastify'

const Booking = ({tour , avgRating}) => {

    const {price, reviews, title} = tour;
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)


    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail:user && user.email,
        tourName: title,
        fullName:"",
        phone:"",
        guestSize:1,
        bookAt:""

    })

    const handleChange = e =>{
        setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const serviceFee = 10;
    let totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    // Send data to the server
    const handleClick= async e=>{
        e.preventDefault()
        try{
            if(!user || user===undefined || user===null){
                return toast.error("Please SIgn In",{
                    position:'top-center'
                })
            }
            const res = await fetch(`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)
            })

            const result = await res.json()

            if(!res.ok){
                return alert(result.message)
            }
            navigate("/thank-you")
        }
        catch(e){
            alert(e.message)

        }
      
    }

  return(
    <>
         <div className="booking">
    <div className="booking__top align-items-center justify-content-between d-flex">
        <h3> ${price} <span>/per person</span> </h3>
        <span className="tour__rating d-flex align-items-center">
                    <i class="ri-star-s-fill" ></i> 
                    {avgRating ===0 ? null : avgRating}({reviews?.length})    
        </span>
    </div>


    {/* =============================== Booking Form  */}
    <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Enter Your Full Name' id='fullName' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="text" placeholder='Enter Your Phone Number' id='phone' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                <input type="number" placeholder='Guest' id='guestsize' required onChange={handleChange}/>
            </FormGroup>
           </Form>
    </div>

{/* ===========================Booking button */}
<div className="booking__button">
    <ListGroup>
        <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>${price} <i className="ri-close-line"></i> 1 person </h5>
            <span>${price}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
            <h5>Service Charge </h5>
            <span>${serviceFee}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>${totalAmount}</span>
        </ListGroupItem>
    </ListGroup>
    <buttom className="w-100 mt-4 btn primary__btn" onClick={handleClick}>Book Now</buttom>
</div>

  </div>

  <ToastContainer />
    </>
  )
}

export default Booking