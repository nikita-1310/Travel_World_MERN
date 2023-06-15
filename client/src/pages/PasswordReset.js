import React, { useState } from 'react'
import loginImg from '../assets/images/login.png'
import { ToastContainer, toast } from 'react-toastify';
import {Form, FormGroup, Button, Container, Row, Col} from 'reactstrap'
import '../styles/login.css'
import userIcon from '../assets/images/user.png'
import NewsLetter from '../shared/NewsLetter'
const PasswordReset = () => {
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value)
    }

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
          toast.error('email is required!',{
            position:'top-center'
          })

        } else if (!email.includes("@")) {
            toast.warning('includes @ in your email!',{
            position:'top-center'
          })
        } else {
            const res = await fetch("/sendpasswordlink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (data.status == 201) {
                setEmail("");
                setMessage(true)
            } else {
                alert("Invalid User")
            }
        }
    }


  return (
    <>
    <section>
    <Container>
      <Row>
        <Col lg="8" className='m-auto'>
          <div className=" d-flex justify-content-center">

            <div className="login__form login__container">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Forget Password</h2>
              {message ? <p style={{ color: "green", fontWeight: "bold" }}>pasword reset link send Succsfully in Your Email</p> : ""}
              <Form>
                <FormGroup>
                  <input type="email" placeholder='Enter your email address' required id='email'value={email} onChange={setVal} />
                </FormGroup>
                
                <button className="btn secondary__btn auth__btn" onClick={sendLink}>Send</button>
                
              </Form>
            
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <NewsLetter />

  <ToastContainer />
  </>
  )
}

export default PasswordReset