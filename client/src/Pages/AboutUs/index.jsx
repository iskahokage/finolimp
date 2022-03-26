import React from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";
import img from '../../assets/working.svg'
import icon1 from '../../assets/graphic-arrow-svgrepo-com.svg'
import icon2 from '../../assets/briefcase-svgrepo-com (1).svg'
import icon3 from '../../assets/rocket-svgrepo-com.svg'

function AboutUs() {
    return (
        <PageWrapper>
            <Container fluid className='about-box'>
                <Container>
                    <div className='header-txt'>
                        <h1>Оживи идею через StartApp</h1>
                    </div>
                    <div className='mt-5  d-flex'>
                    <span className='about-txt about-descrip'>
                        StartApp – это уникальная платформа, главной миссией которого является развитие инноваций в Кыргызстане путем организации площадки для взаимодействия людей, которые интересуются инновациями и производство полезного контента. Также мы являемся мостом между инвестором и стартапером. Здесь вы можете найти анонсы хакатонов, каталог стартап проектов и инвесторов и актуальные новости из мира инноваций.
                    </span>
                       <img src={img} className='about-img'/>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <Card style={{ width: '18rem' }} className="card-box  shadow-lg p-3 bg-white rounded">
                            <Card.Body>
                                <Card.Title>
                                    <img src={icon1} className='icon'/>
                                </Card.Title>
                                <Card.Text>2,030</Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Start Up проектов</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className="card-box  shadow-lg p-3 bg-white rounded">
                            <Card.Body>
                                <Card.Title>
                                    <img src={icon2} className='icon'/>
                                </Card.Title>
                                <Card.Text>1,200</Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Инвесторов</Card.Subtitle>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className="card-box  shadow-lg p-3 bg-white rounded">
                            <Card.Body>
                                <Card.Title>
                                    <img src={icon3} className='icon'/>
                                </Card.Title>
                                <Card.Text>1,040</Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Успешно реализованных проектов</Card.Subtitle>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='pros'>
                        <h1>В чем наше преимущество?</h1>
                    </div>
                </Container>

            </Container>
        </PageWrapper>


    )
}

export default AboutUs
