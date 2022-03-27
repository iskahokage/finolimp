import React, {useState} from 'react';
import {Container, Form, Button, Card, Row, Col, Modal} from 'react-bootstrap';
import MyInput from "../../Components/Input";
import PageWrapper from "../../Components/PageWrapper";
import './style.scss'
import img from '../../assets/custom-3.svg'
import tick from "../../assets/tick-svgrepo-com.svg";
import {Clear} from "@material-ui/icons";
import logo from "../../assets/logo_patent.png";

function Profile() {
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                    <Button className='btn-profile mt-3' onClick={handleShow}>
                                        Отправить на рассмотрение
                                    </Button>
                                </div>
                                </Container>
                            </Form>
                        </Card.Body>

                    </Card>
                </Container>
            </Container>
            <Modal show={show} onHide={handleClose} centered>
                <div className="d-flex justify-content-end my-2 mx-2">
                    <Clear onClick={()=>handleClose()}/>
                </div>
                <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="modalTop">Спасибо за регистрацию! </h3>
                    <div className="modalBody">
                        Ваша заявка отправленна на одобрение, ожидайте оповещение. Вам придет сообщение на email, указанный Вами при регистрации.                    </div>
                    <img src={logo} className="modalImg" alt={'logo'}/>
                </Modal.Body>

            </Modal>
        </PageWrapper>


    )
}

export default Profile
