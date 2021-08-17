import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import './app.css';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/characterPage';

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }


    toggleRandomChar = () => {
        this.setState((prevState) => {
            return {
                showRandomChar: !prevState.showRandomChar
            }
        });
    };

    render() {
        const {error, showRandomChar} = this.state;

        if (error) {
            return <ErrorMessage/>;
        }
        
        const char = showRandomChar ? <RandomChar/>: null ;
        
        return (
            <div> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button 
                                className="btn-info"
                                onClick={this.toggleRandomChar}>
                                Toggle Random Character
                            </Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </div>
        );
    }
};