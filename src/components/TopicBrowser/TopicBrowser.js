import React, { Component } from 'react';
import Sum from '../Topics/Sum';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import Palindrome from '../Topics/Palindrome';
import FiterString from '../Topics/FilterString';

class TopicBrowser extends Component {
    render() {
        return (
            <div className="puzzleFeed">

                <EvenAndOdd />
                <FilterObject />
                <FiterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser;