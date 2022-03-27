import './style.scss'
import React ,{useState}from 'react';
import {Container, Form, Button, Modal, Col, Row} from "react-bootstrap";
import MyInput from "../../Components/Input";
import InputPassword from "../../Components/InputPassword"
import {  Clear } from '@material-ui/icons'
import logo from '../../assets/logo_patent.png'
import {NavLink} from "react-router-dom";
function Application(){
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        // <div>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={4} className="box">
                        <Container>
                            <Row>
                                <div className="sighnupTextTop">
                                    <h5 className="signupText">Вход в StartApp</h5>
                                </div>
                            </Row>
                            <Row>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Почта</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <InputPassword text={'Пароль'}/>
                                    <InputPassword text={'Повторите пароль'}/>
                                    <Form.Group>
                                        <Form.Label>Ваш статус</Form.Label>
                                        <Form>
                                            {[ 'radio'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Старт-апп"
                                                        name="group1"
                                                        defaultChecked={true}
                                                        onChange={()=>setChecked(!checked)}
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Спонсор"
                                                        name="group1"
                                                        onChange={()=>setChecked(!checked)}
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </Form.Group>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <a href="/" className="forgetPasswordLink text-center my-3 ">
                                            Забыли пароль?
                                        </a>
                                        <div className='d-flex justify-content-end mt-3 w-100'>
                                            <Button className='button-login py-2' type='submit' >Зарегистрироваться</Button>
                                        </div>
                                    </div>
                                </Form>

                            </Row>
                            <Row>
                                <div className="bottomBox mt-5">
                                    <span className="bottomText">Уже зарегистрированы?</span>
                                    <NavLink className="bottomLink" to={'/sign-in'}>Войти</NavLink>
                                </div>
                            </Row>
                        </Container>

                    </Col>
                    <Col sm md lg={7} className="rightBox d-none d-sm-none d-md-none d-lg-block">
                        <div className="imgBox-right">
                            <img  className="imgRight" alt='logo' src={logo}/>
                            <span className="txtRight"> Добро пожаловать в StartApp! </span>
                        </div>
                    </Col>
                </Row>

            </Container>


        // </div>
    )
}

export default Application