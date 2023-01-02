import React from 'react';
import Header from '../Header/Header';
import Results from '../Results/Results';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
        this.setState({ 
            headerExpanded: !inputText,
            suggestedNames: name(inputText)
         });
    };


    render() {
        return (
            <div>
                <Header 
                headerExpanded={ this.state.headerExpanded } 
                headTitle={this.state.headerText} />
                <SearchBox 
                onInputChange={this.handleInputChange}/>
                <Results suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}

// function App () {
//     return <h1>This is my functional component !</h1>
// }

export default App;