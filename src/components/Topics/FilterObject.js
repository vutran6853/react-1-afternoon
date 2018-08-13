import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            emplyees: [
                {
                    name: "Jimmy Joe",
                    title: "Hack0r",
                    age: 12,
                },
                {
                    name: "Might Carly",
                    title: "Black",
                    age: 12,
                },
                {
                    name: "Vu Tran",
                    title: "CTO",
                },
            ],
            userInput: "",
            filterdArray: []
        }
    }
    
    handleChange(value) {
        this.setState({ userInput: value });
    }
    // NOT SURE ABOUT THIS ONE ////////////////////////////////////////////////////////
    filterEmployees(prop) {
        let employees = this.state.employees;
        let filteredEmployees = [];
    
        for(let i = 0; i < employees.length; i++ ) {
            if(employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i]);
            }
        }
        this.setState({ filteredEmployees: filteredEmployees });

        // for(let i = 0; i < this.state.emplyees.length; i++) {
        //     console.log(this.state.emplyees[i]);
        // }

        // for ( var i = 0; i < employees.length; i++ ) {
        //     if ( employees[i].hasOwnProperty(prop) ) {
        //       filteredEmployees.push(employees[i]);
        //     }
        //   }
      
   
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.emplyees, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.user) } >Button</button>
                <span className="resultsBox filterObjectRB">Filterd: { JSON.stringify(this.state.filterdEmployees, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject;
