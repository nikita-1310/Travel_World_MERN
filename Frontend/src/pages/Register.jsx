import React, { useState, useContext } from 'react'
import '../styles/login.css'
import {Form, FormGroup, Button, Container, Row, Col} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from './../context/AuthContext'
import {ToastContainer, toast} from 'react-toastify'
import {BASE_URL} from './../utils/config'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
const Register = () => {
  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password :undefined
})

const {dispatch} = useContext(AuthContext)
const navigate = useNavigate()

  const handleChange = e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
}

const handleClick= async e=>{
  e.preventDefault()
  try{
    const res = await fetch(`${BASE_URL}/auth/register`,{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(credentials)
    })
    const result = await res.json()
    if(!res.ok) alert(result.message)

    dispatch({type:"REGISTER_SUCCESS"})
    toast.success("Successfully Registered",{
      position:'top-center'})
    navigate('/login')

  }
  catch(e){
  alert(e.message)
  }
}

  return (
    <>
      <section>
    <Container>
      <Row>
        <Col lg="8" className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Enter Your Username' id='username' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="email" placeholder='Enter Your Email Address' id='email' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="password" placeholder='Enter Your Password' id='password' required onChange={handleChange}/>
            </FormGroup>
            <button className='btn secondary__btn auth__btn' type='submit'>Create Account</button>
            <p>Already have an account ? <Link to='/login'>Login</Link></p>
           </Form>
            
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <ToastContainer />
    </>
  )
}
export default Register
