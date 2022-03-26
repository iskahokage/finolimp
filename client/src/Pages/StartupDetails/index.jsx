import React from 'react';
import {Container, Col, Row, Card, Form, Button} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";

function StartupDetails() {

    return (
        <PageWrapper>
            <Container fluid className='su-bg'>
                <Container className='su-container'>
                    <h1>Подробнее о проекте</h1>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card className='startup-card shadow-lg p-3 bg-white rounded'>
                                <Card.Body>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                            <span style={{fontWeight:'bold'}} >Название проекта:</span>
                                        </Col>
                                        <Col lg={8}>
                                            <span  style={{fontSize:'17px'}}>Shooting star</span>

                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                            <span style={{fontWeight:'bold'}} >Сегментация:</span>
                                        </Col>
                                        <Col lg={8}>
                                            <span  style={{fontSize:'17px'}}>Программы для ЭВМ и баз данных</span>

                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                        <span style={{fontWeight:'bold'}} >Описание проекта:</span>
                                        </Col>
                                        <Col lg={8}>
                                        <span  style={{fontSize:'17px'}}>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis perferendis ullam tempore sapiente, voluptate vitae distinctio magni porro mollitia inventore laboriosam itaque voluptates molestiae nulla quae minima earum magnam.
                                        </span>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                        <span style={{fontWeight:'bold'}} >Запрашиваемая сумма:</span>
                                        </Col>
                                        <Col lg={8}>
                                        <span  style={{fontSize:'17px'}}>$10,000</span>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                        <span style={{fontWeight:'bold'}} >Срок окупаемости:</span>
                                        </Col>
                                        <Col lg={8}>
                                        <span  style={{fontSize:'17px'}}>1 год</span>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                        <span style={{fontWeight:'bold'}} >Приблизительная доходность:</span>
                                        </Col>
                                        <Col lg={8}>
                                        <span  style={{fontSize:'17px'}}>$12,000</span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col  xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card className='startup-card shadow-lg p-3 bg-white rounded'>
                                <Card.Body>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                            <span style={{fontWeight:'bold'}} >Имя Фамилия:</span>
                                        </Col>
                                        <Col lg={8}>
                                            <span  style={{fontSize:'17px'}}>Искендер Касымов</span>

                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                            <span style={{fontWeight:'bold'}} >Телефон:</span>
                                        </Col>
                                        <Col lg={8}>
                                            <span  style={{fontSize:'17px'}}>0777121212</span>

                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col lg={4}>
                                            <span style={{fontWeight:'bold'}} >Почта:</span>
                                        </Col>
                                        <Col lg={8}>
                                            <span  style={{fontSize:'17px'}}>isken@gmail.com</span>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </Container>
        </PageWrapper>


    )
}

export default StartupDetails
