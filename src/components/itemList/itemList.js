import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService'
import Spinner from '../spinner';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';

const ListItem = styled.li`
:hover {
    background-color: rgba(211,211,211, .7);
}
`;
export default class ItemList extends Component {
    gotService = new gotService();
    
    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    error: false
                });
            })
            .catch(() => {this.onError()});
    }

    componentDidCatch() {
        this.setState({
            error: true,
            charList: null
        });
    }

    onError(status) {
        this.setState({
            error: true,
            charList: null
        });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            return (
                <ListItem 
                    key={id}    
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                    >
                    {name}
                </ListItem>
            )
        })
    }
    render() {
        const {charList, error} = this.state;

        if(error) {
            return <ErrorMessage />
        }

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}