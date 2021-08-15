import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService'
import Spinner from '../spinner';
import styled from 'styled-components';

const ListItem = styled.li`
:hover {
    background-color: rgba(211,211,211, .7);
}
`;
export default class ItemList extends Component {
    gotService = new gotService();
    
    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => this.setState({
                charList
            }));
    }
    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListItem 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}
                    >
                    {item.name}
                </ListItem>
            )
        })
    }
    render() {
        const {charList} = this.state;
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