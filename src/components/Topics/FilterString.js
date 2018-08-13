import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            name: ['James', 'Jessica', 'Melody', 'Tony', 'Mark', 'Maddy', 'Vu'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(value) {
        this.setState({ userInput: value });
    }
    filterNames(userInput) {
        let name = this.state.name;
        let filteredNames = [];
        // console.log(name);
        for(let prop in name) {
            // THIS WILL FIND THE STRING IN ARRAY  WHEN USER INPUT LETTER
            if(name[prop].includes(userInput)) {
                // console.log(name[prop]);
                filteredNames.push(name[prop]);
            }
        }
        this.setState({ filteredNames: filteredNames });
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Name: { JSON.stringify(this.state.name, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput)} >Button</button>
                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
            </div>
        )
    }
}

export default FilterString;