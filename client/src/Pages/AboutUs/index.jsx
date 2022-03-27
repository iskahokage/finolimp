import React from 'react';
import {Container, Card, Col, Row} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";
import img from '../../assets/working.svg'
import icon1 from '../../assets/graphic-arrow-svgrepo-com.svg'
import icon2 from '../../assets/briefcase-svgrepo-com (1).svg'
import icon3 from '../../assets/rocket-svgrepo-com.svg'
import tick from '../../assets/tick-svgrepo-com.svg'

function AboutUs() {
    return (
        <PageWrapper>
            <Container fluid className='about-box'>
                <Container>
                    <div className='header-txt'>
                        <h1>Оживи идею через StartApp</h1>
                    </div>
                    <Row className='mt-5  d-flex'>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <span className='about-txt about-descrip'>
                            StartApp – это уникальная платформа, главной миссией которого является развитие инноваций в Кыргызстане путем организации площадки для взаимодействия людей, которые интересуются инновациями и производство полезного контента. Также мы являемся мостом между инвестором и стартапером. Здесь вы можете найти анонсы хакатонов, каталог стартап проектов и инвесторов и актуальные новости из мира инноваций.
                            </span>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src={img} className='about-img'/>
                        </Col>

                    </Row>

                    <Row className='d-flex justify-content-between'>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Card style={{ width: '18rem' }} className="card-box  shadow-lg p-3 bg-white rounded mb-3">
                                <Card.Body>
                                    <Card.Title>
                                        <img src={icon1} className='icon'/>
                                    </Card.Title>
                                    <Card.Text>2,030</Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Start Up проектов</Card.Subtitle>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Card style={{ width: '18rem' }} className="card-box  shadow-lg p-3 bg-white rounded mb-3">
                                <Card.Body>
                                    <Card.Title>
                                        <img src={icon2} className='icon'/>
                                    </Card.Title>
                                    <Card.Text>1,200</Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Инвесторов</Card.Subtitle>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Card style={{ width: '18rem' }} className="card-box  shadow-lg p-3 bg-white rounded mb-3">
                                <Card.Body>
                                    <Card.Title>
                                        <img src={icon3} className='icon'/>
                                    </Card.Title>
                                    <Card.Text>1,040</Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Успешно реализованных проектов</Card.Subtitle>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <div className='pros'>
                        <h1>В чем наше преимущество?</h1>
                    </div>
                    <div className='pros-txt'>
                        <div>
                            <img src={tick}/>
                            <span>Единая площадка для инвесторов и стартаперов</span>
                        </div>
                        <div>
                            <img src={tick}/>
                            <span>Уникальная база данных инвесторов</span>
                        </div>
                        <div>
                            <img src={tick}/>
                            <span>Единая площадка для инвесторов и стартаперов</span>
                        </div>
                    </div>
                </Container>

            </Container>
        </PageWrapper>


    )
}

export default AboutUs
