import React from 'react';
import {Container, Card, Row,Col,Form} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";
import finOlimp from '../../assets/fin.png'
import img from "../../assets/working.svg";
import comments from "../../assets/comments-svgrepo-com.svg";
import {useNavigate} from "react-router-dom";

function News() {
    const navigate = useNavigate()
    return (
        <PageWrapper>
            <Container fluid className='news-bg'>
                <Container className='news-container'>
                    <h1>Новости</h1>
                    <div>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                <Card className='newCard  shadow-lg p-3 bg-white rounded' >
                                    <Card.Body>
                                        <h3>Фильтры новостей</h3>
                                        <Form.Select aria-label="Default select example">
                                            <option>Город</option>
                                            <option value="1">Бишкек</option>
                                            <option value="2">Ош</option>
                                            <option value="3">Нарын</option>
                                            <option value="3">Иссык-Куль</option>
                                        </Form.Select>
                                        <Form className='d-flex flex-column mt-2 filters'>
                                            <Form.Check
                                                inline
                                                label="IT"
                                                name="group1"
                                                type={'checkbox'}
                                            />
                                            <Form.Check
                                                inline
                                                label="Маркетинг"
                                                name="group1"
                                                type={'checkbox'}
                                            />
                                            <Form.Check
                                                inline
                                                label="Финансы"
                                                name="group1"
                                                type={'checkbox'}
                                            />
                                            <Form.Check
                                                inline
                                                label="Продажи"
                                                name="group1"
                                                type={'checkbox'}
                                            />

                                            <Form.Check
                                                inline
                                                label="HR"
                                                name="group1"
                                                type={'checkbox'}
                                            />
                                            <Form.Check
                                                inline
                                                label="Аналитика"
                                                name="group1"
                                                type={'checkbox'}
                                            />
                                            <Form.Check
                                                inline
                                                label="Дизайн"
                                                name="group1"
                                                type={'checkbox'}
                                            />
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                                <Card className='newCard  shadow-lg p-3 bg-white rounded' onClick={()=>{navigate('/news-details')}}>
                                    <Card.Body>
                                        <Card.Title>FinOlimp Hackathon</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">15/03/2022</Card.Subtitle>
                                        <img src={finOlimp} className='news-photo my-3'/>
                                        <Card.Text>
                                            Организаторами олимпиады являются Клуб Профессионалов ProKG и Фонд Образовательных Инициатив. Данный проект проводиться на ежегодной основе с 2018...                                </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className='d-flex'>
                                        <img src={comments}/>
                                        <span className='text-muted mx-3'>24</span>
                                    </Card.Footer>
                                </Card>
                            </Col>

                        </Row>

                    </div>
                </Container>
            </Container>
        </PageWrapper>


    )
}

export default News
