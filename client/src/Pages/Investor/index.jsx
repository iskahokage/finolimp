import React, {useState} from 'react';
import {Container, Col, Row, Card, Form, Button, Modal} from 'react-bootstrap';
import './style.scss'
import PageWrapper from "../../Components/PageWrapper";
import {  Clear } from '@material-ui/icons'
import {NavLink, useNavigate} from "react-router-dom";

function Startup() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <PageWrapper>
            <Container fluid className='su-bg'>
                <Container className='su-container'>
                    <h1>Список инвесторов</h1>
                    <Card className='startup-card shadow-lg p-3 bg-white rounded'>
                        
                    </Card>
                </Container>
            </Container>
        </PageWrapper>


    )
}

export default Startup
