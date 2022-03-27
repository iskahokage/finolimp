import React, {useState} from 'react';
import {Container, Col, Row, Card, Form, Button, Modal} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";
import {  Clear } from '@material-ui/icons'
import {NavLink, useNavigate} from "react-router-dom";

function Startup() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <PageWrapper>
            <Container fluid className='su-bg'>
                <Container className='su-container'>
                    <h1>Список проектов</h1>
                    <Card className='startup-card shadow-lg p-3 bg-white rounded'>
                        <Card.Body>
                            <Row >
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Form.Select aria-label="Default select example" className='mb-2'>
                                        <option>Сегмент</option>
                                        <option value="1">Объекты авторского права</option>
                                        <option value="2">Объекты смежных прав</option>
                                        <option value="3">изобретения</option>
                                        <option value="3">Полезные модели</option>
                                        <option value="3">Промышленные образцы</option>
                                        <option value="3">Традиционные знания</option>
                                        <option value="3">Товарные знаки и обслуживания</option>
                                        <option value="3">Рационализаторское предложение</option>
                                        <option value="3">Селекционные достижения</option>
                                        <option value="3">Программы для ЭВМ и баз данных</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className='d-flex justify-content-end'>
                                    <Button onClick={()=>{navigate('/profile')}}>Добавить проект +</Button>
                                </Col>

                            </Row>
                            <div>
                                <Card className='mt-5'>
                                <Card.Body>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='mx-3'>
                                            <div>
                                                <span style={{fontWeight:'bold'}}>Shooting Star</span>
                                                <span className='text-muted mx-2'>| Программы для ЭВМ и баз данных</span>
                                            </div>
                                            <div style={{fontSize:'15px'}}>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis perferendis ullam tempore
                                            </div>

                                        </div>
                                        <div>
                                            <Button variant="outline-secondary" onClick={()=>{navigate('/project-details')}}>Подробнее</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                                </Card>

                                <Card className='mt-3'>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='mx-3'>
                                                <div>
                                                    <span style={{fontWeight:'bold'}}>Educational project</span>
                                                    <span className='text-muted mx-2'>| Традиционные знания</span>
                                                </div>
                                                <div style={{fontSize:'15px'}}>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis perferendis ullam tempore
                                                </div>

                                            </div>
                                            <div>
                                                <Button variant="outline-secondary" onClick={handleShow}>Подробнее</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
             <Modal show={show} onHide={handleClose} centered>
                 <div className="d-flex justify-content-end my-2 mx-2">
                     <Clear onClick={()=>handleClose()}/>
                 </div>
                 <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                     {/*// <h3 className="modalTop">Спасибо за регистрацию! </h3>*/}
                     <div className="modalBody mx-2">
                         Что бы перейти на эту страницу Вам необходимо
                         <NavLink className="mx-2" to={'/sign-up'}>войти</NavLink>.
                     </div>
                     {/*<img src={logo} className="modalImg" alt={'logo'}/>*/}
                 </Modal.Body>

             </Modal>
        </PageWrapper>


    )
}

export default Startup
