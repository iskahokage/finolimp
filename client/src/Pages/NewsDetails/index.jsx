import React from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";
import finOlimp from '../../assets/fin.png'
import img from "../../assets/working.svg";
import comments from "../../assets/comments-svgrepo-com.svg";
import photo from "../../assets/002-girl.svg";


function NewsDetails() {
    return (
        <PageWrapper>
            <Container fluid className='news-bg'>
                <Container className='news-container'>
                    <h1>Новости</h1>
                    <h4>FinOlimp Hackathon</h4>
                    <Card className='mt-4 news-details-card shadow-lg p-3 bg-white rounded'>
                        <Card.Header className="d-flex justify-content-end">
                            <span>
                                #IT #Финансы #Маркетинг
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Row className='d-flex align-items-center '>
                                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <img src={finOlimp}/>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={8} xl={8}>
                            <span className='news-body'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis perferendis ullam tempore sapiente, voluptate vitae distinctio magni porro mollitia inventore laboriosam itaque voluptates molestiae nulla quae minima earum magnam.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis perferendis ullam tempore sapiente, voluptate vitae distinctio magni porro mollitia inventore laboriosam itaque voluptates molestiae nulla quae minima earum magnam.
                            </span>
                                </Col>

                            </Row>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-end'>
                            <img src={comments}/>
                            <span className='text-muted mx-3'>24</span>
                        </Card.Footer>
                    </Card>

                    <Card className='mt-5 mb-5'>
                        <Card.Body>
                            <div className='d-flex'>
                                <div className='img-box d-flex justify-content-center align-items-end'>
                                    <img src={photo}/>
                                </div>
                                <div className='mx-3'>
                                    <div>
                                        <span style={{fontWeight:'bold'}}>Айдана Кадыр</span>
                                        <span className='text-muted mx-2'>22/03/2022</span>
                                    </div>
                                    <span>Статус Инвестор</span>
                                    <div style={{fontSize:'15px'}}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis perferendis ullam tempore
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    <hr/>
                        <Card.Body>
                            <div className='d-flex'>
                                <div className='img-box d-flex justify-content-center align-items-end'>
                                    <img src={photo}/>
                                </div>
                                <div className='mx-3'>
                                    <div>
                                        <span style={{fontWeight:'bold'}}>Алмаш</span>
                                        <span className='text-muted mx-2'>13/03/2022</span>
                                    </div>
                                    <span>Статус Инвестор</span>
                                    <div style={{fontSize:'15px'}}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis perferendis ullam tempore
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </PageWrapper>


    )
}

export default NewsDetails
