import React from 'react';
import {Container, Col, Row, Card, Form, Button} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";
import {useNavigate} from "react-router-dom";

function Startup() {
    const navigate = useNavigate()

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
                                                <Button variant="outline-secondary" onClick={()=>{navigate('/project-details')}}>Подробнее</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </PageWrapper>


    )
}

export default Startup
