import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {
    // It is a very bad practice to make API request inside constructor
    // It is better to request in Lifycycle Hooks
    // 'cause at first constructor is called, mounting called
    // after render, so if we work in constructor with some DOM elems, we may gonna use non-existing elements
    // that can lead to an error
    constructor() {
        super();
        this.updateChar();
        this.timerID = setInterval(this.updateChar, 1500);
        clearInterval(this.timerID);
        console.log('constructor');
    }
    // LifeCycle Hooks
    // componentDidMount() - component appeared in page
    // componentDidUpdate() - component was update, newProps or setState
    // componentWillUnmount() - component was deleted
    // componentDidCatch() - error happened in component

    gotService = new gotService();
    state = {
        char: {},
        loading: true
    };

    componentDidMount() {
        console.log('Mounting');
    }

    componentWillUnmount() {
        console.log('UnMounting');
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25); // [25; 140]
        // const id = 13300000; // error checking 
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        console.log('render');
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null; 

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

// Local component to use spinner inside white-square

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <React.Fragment>
            <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </React.Fragment>
    )
}