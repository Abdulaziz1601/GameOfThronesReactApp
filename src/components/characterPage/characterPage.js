import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';

export default class CharacterPage extends Component {

    state = {
        selectedChar: null,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row> 
        );
    }
}