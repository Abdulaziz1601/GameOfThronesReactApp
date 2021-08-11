import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';


export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    };

    toggleRandomChar = () => {
        this.setState((prevState) => {
            return {
                showRandomChar: !prevState.showRandomChar
            }
        });
    }

    render() {
        const {error, showRandomChar: isVisible} = this.state;

        if (error) {
            return <ErrorMessage/>;
        }
        
        const char = isVisible ? <RandomChar/>: null ;
        
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};