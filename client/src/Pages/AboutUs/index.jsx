import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import './style.scss'
import MyInput from "../../Components/Input";

function AboutUs() {
    return (
        <Container fluid className='about-box'>
            <Container>
                <div className='header-txt'>
                    <h1>
                        ГОСУДАРСТВЕННОЕ АГЕНТСТВО ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ И ИННОВАЦИЙ ПРИ КАБИНЕТЕ МИНИСТРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ
                    </h1>
                </div>
            </Container>
        </Container>

    )
}

export default AboutUs
