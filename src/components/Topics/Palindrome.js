import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        };      
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }
    isPalindrom(userInput) {
        let str = userInput.toLowerCase();
        let symbols = /\W+|_/g;                                 /* STORE  SYBMBOL FROM USER INPUT  */
        str = str.replace(symbols, '');                         /* THIS WLL CHECK FOR SYBMBOL  */
        let newString = str.split('').reverse().join('');       
        console.log(newString);

        if(newString === str) {
            this.setState({ palindrome: 'True' })
        }
        else {
            this.setState({ palindrome: 'False' })
        };
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e)  => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={ () => this.isPalindrom(this.state.userInput) } >Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome;