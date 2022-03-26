import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import MyInput from "../../Components/Input";

function Profile() {
    return (
        <Container>
            <Form>
                <MyInput text={'Имя'}/>
                <MyInput text={'Фамилия'}/>
                <MyInput text={'Номер телефона'}/>
                <MyInput text={'Название компании'}/>
                <MyInput text={'Ссылка на презентацию'}/>
                <MyInput text={'Ссылка на бизнес-план'} className='mb-3'/>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Свидетельство о регистрации</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group>
                    <Form>
                        <Form.Check
                            inline
                            label="У меня есть MVP"
                            name="group1"
                            type={"checkbox"}
                            className='mt-3'
                        />
                    </Form>
                </Form.Group>
                <div className='d-flex justify-content-end mb-5'>
                    <Button className='btn-profile mt-3'>
                        Отправить на рассмотрение
                    </Button>
                </div>
            </Form>
        </Container>

    )
}

export default Profile
