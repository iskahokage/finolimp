import React from 'react';
import {Container, Form, Button, Card, Row, Col} from 'react-bootstrap';
import MyInput from "../../Components/Input";
import PageWrapper from "../../Components/PageWrapper";
import './style.scss'
import img from '../../assets/custom-3.svg'
import tick from "../../assets/tick-svgrepo-com.svg";

function Profile() {
    return (
        <PageWrapper>
            <Container fluid className='profile-bg'>
                <Container className='profile-container'>
                    <h1>Заявление</h1>
                    <Card className='profile-card shadow-lg p-3 bg-white rounded'>
                        <Card.Body>
                            <Row className='d-flex justify-content-between mb-3'>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <div className='requirements'>
                                        <h3>Требования для подачи заявки</h3>
                                        <div>
                                            <img src={tick}/>
                                            <span>Обязательное наличие бизнем плана</span>
                                        </div>
                                        <div>
                                            <img src={tick}/>
                                            <span>Обязательное наличие презентации</span>
                                        </div>
                                        <div>
                                            <img src={tick}/>
                                            <span>Уникальный продукт</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs sm md={6} lg={6} xl={6}>
                                    <img src={img} className='requirements-img'/>
                                </Col>

                            </Row>
                            <Form>
                                <Container>
                                    <Row >
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <MyInput text={'Имя'} placeholder={'Введите имя'}/>
                                            <MyInput text={'Фамилия'} placeholder={'Введите фамилию '}/>
                                            <MyInput text={'Номер телефона'} placeholder={"Введите номер телефона"}/>
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <MyInput text={'Ссылка на презентацию'} placeholder={'Вставьте ссылку'}/>
                                            <MyInput text={'Ссылка на бизнес-план'} placeholder={'Вставьте ссылку'}/>
                                            <Form.Group>
                                                <Form>
                                                    <Form.Check
                                                        inline
                                                        label="У меня есть MVP"
                                                        name="group1"
                                                        type={"checkbox"}
                                                        className='mt-5'
                                                    />
                                                </Form>
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                {/*<MyInput text={'Название компании'}/>*/}

                                {/*<Form.Group controlId="formFile" className="mb-3">*/}
                                {/*    <Form.Label>Свидетельство о регистрации</Form.Label>*/}
                                {/*    <Form.Control type="file" />*/}
                                {/*</Form.Group>*/}

                                <div className='d-flex justify-content-end mb-5'>
                                    <Button className='btn-profile mt-3'>
                                        Отправить на рассмотрение
                                    </Button>
                                </div>
                                </Container>
                            </Form>
                        </Card.Body>

                    </Card>
                </Container>
            </Container>
        </PageWrapper>


    )
}

export default Profile
