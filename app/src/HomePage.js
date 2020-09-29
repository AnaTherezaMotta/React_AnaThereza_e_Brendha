import React from 'react';
import {Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap';


function HomePage(props){
    return (
        <Container>
            <Row className='justify-content-center'>
            <Col>
            <Image className="d-block" src='http://via.placeholder.com/300' />
            </Col>    
            </Row>
            <Row className="justify-content-center">
            <Col md={6}>
                 <ButtonGroup>
                 <Button onClick= { this.mostraComentario}>Comentários</Button>
                 <Button>Curti</Button>    
                </ButtonGroup>  
            </Col>    
            </Row>
        </Container>
    )

}
export default HomePage