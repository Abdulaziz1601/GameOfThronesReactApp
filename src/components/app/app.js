import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import './app.css';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';


export default class App extends Component {
    state = {
        showRandomChar: true,
        selectedChar: 130,
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

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }


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
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};