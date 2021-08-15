import React, {Component} from 'react';
import './charDetails.css';
import GOTService from '../../services/gotService';
export default class CharDetails extends Component {

    gotService = new GOTService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }
    //                 prevProps, prevState
    componentDidUpdate(prevProps) { // if we click and select newProps, this hook willbe called
        if (this.props.charId !== prevProps.charId) { // then we check if props is same as previous props
            this.updateChar(); // if it is new props, so they're not same naymore, we update our component
        }
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => this.setState({char}));

        this.foo.bar=0;
    }

    

    render() {
        if(!this.state.char) {
            return <span className="select-error">Please select a character</span>;
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}