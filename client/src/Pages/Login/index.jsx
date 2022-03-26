import './style.scss'
import React ,{useState}from 'react';
import {Container, Form, Button, Modal, Row, Col} from "react-bootstrap";
import InputPassword from "../../Components/InputPassword"
import logo from '../../assets/logo_patent.png'
function Login(){


    return(
        // <div>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={4} className="box">
                        <Container>
                            <Row>
                                <div className="sighnupTextTop">
                                    <h5 className="signupText">Вход в Kyrgyz Patent</h5>
                                </div>
                            </Row>
                            <Row>
                                <Form
                                >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Почта</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <InputPassword text={'Пароль'}/>

                                    <div className='d-flex flex-column justify-content-center'>
                                        <a href="/" className="forgetPasswordLink text-center my-3 ">
                                            Забыли пароль?
                                        </a>
                                        <div className='d-flex justify-content-end mt-3 w-100'>
                                            <Button className='button-login py-2' type='submit' >Войти</Button>

                                        </div>
                                    </div>

                                </Form>
                            </Row>
                            <Row>
                                <div className="bottomBox mt-5">
                                    <span className="bottomText">Еще не зарегистрированы?</span>
                                    <a className="bottomLink" href={'/sign-up'}>Зарегистрироваться</a>
                                </div>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm md lg={7} className="rightBox d-none d-sm-none d-md-none d-lg-block">
                        <div className="imgBox-right">
                            <img  className="imgRight" alt='logo' src={logo}/>
                            <span className="txtRight"> Добро пожаловать в Kyrgyz Patent! </span>
                        </div>
                    </Col>
                </Row>

            </Container>
        // </div>
    )
}

export default Login