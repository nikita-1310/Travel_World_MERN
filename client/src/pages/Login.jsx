import React, { useState, useContext } from 'react'
import '../styles/login.css'
import {Form, FormGroup, Button, Container, Row, Col} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import {AuthContext} from './../context/AuthContext'
import {BASE_URL} from './../utils/config'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
const Login = () => {
  const [credentials, setCredentials] = useState({
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
  dispatch({type:"LOGIN_START"})
  try{

    const res = await fetch(`${BASE_URL}/auth/login`,{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(credentials)
    })

    const result = await res.json()
    if(!res.ok) toast.error(result.message,{
      position:'top-center'
  })

    console.log(result.data);

    dispatch({type:"LOGIN_SUCCESS", payload:result.data})
    navigate('/')
  }catch(err){
    dispatch({type:"LOGIN_FAILURE", payload:err.message})
  }
}

  return <>
  <section>
    <Container>
      <Row>
        <Col lg="8" className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" placeholder='Enter your email address' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Enter your password address' required id='password' onChange={handleChange} />
                </FormGroup>
                <button className="btn secondary__btn auth__btn" type='submit'>Login</button>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
                <p>Forget your password? <Link to='/password-reset'>Click Here</Link></p>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  <ToastContainer />
  </>
}
export default Login
