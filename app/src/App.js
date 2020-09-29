import React from  'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './containers/HomePage';
import ComentariosPage from "./containers/ComentariosPage"

import { Container, Row, Col, Image, ButtonGroup } from 'react-bootstrap';


class App extends React.Component {

    constructor(props) {
        super(props);
     
        // inicializar o estado 
        this.state =  { mostrComentario: false }
    }

    mostraComentario = () => {
        this.setState = {
            roupa:[]
        }

        axios.get("http://localhost:8080/alunos")
        .then(res =>data);
           if(res.data) {
            this.setState;({roupa: res.data});
           }
             
        axios.post("http://localhost:8080/alunos",)
        .then()
    }
    carregarTela =() => {
        axios.get("http://localhost:8080/alunos")
        .then(res =>data);
           if(res.data) {
            this.setState;({roupa: res.data});
         }
    };
    

    clone= (nome,imagem)  =>  (
        'const roupa' = (nome, imagem)
    );this;setState ({roupa:roupa})
        
  

    render() {
        return (
            <Container>
            {
            !this.state.mostraComentario ? 
            <Container>
                <Row claaName= "justify-content-center">
                    <Col md={6}>
                    <Image className="d-block" src="https://via.placeholder.com/300" />
                    </Col> 
                </Row>
                <Row className="justify-content-center">
                    <Col md={6}>
                        < ButtonGroup>
                        <Button onClick={this.mostraComentario} >Comentários</Button>
                        <Button>Curti</Button>
                        </ButtonGroup>
                    </Col>  
                </Row>
            </Container> :<div>Página de Comentários <Button onClick={ this.mostraComentario}>Voltar</Button></div>

            }
            </Container>
        )
    }       

}
export default App;
