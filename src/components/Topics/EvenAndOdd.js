import React, { Component } from 'react';


class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

    };
    handleChange(value) {
        this.setState( { userInput: value } );
    }
    assignEvenAndOdds(userInput) {
        let Even = [];
        let Odd = [];
        // console.log(this.state.userInput);
        for(let i = 0; i < userInput.length; i++) {
            if(userInput[i] % 2 === 0) {
               Even.push(userInput[i]); 
            } else {
               Odd.push(userInput[i]);                
            }
            
        };
        this.setState( { evenArray: Even, oddArray: Odd } )
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) } }>Split</button>
                <span className="resultsBox">Evens: { String(this.state.evenArray) } </span>
                <span className="resultsBox">Odds: { String(this.state.oddArray) } </span>
            </div>
        )
    }
}

export default EvenAndOdd;