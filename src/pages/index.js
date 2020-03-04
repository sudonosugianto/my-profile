import React, { Component } from 'react'
import NavBar from '../components/navbar'
import About from '../components/about'

class App extends Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div>
                <div className="home-background"></div>
                <NavBar handleClick={this.handleClick} current={this.state.current}/>
                <About />
            </div>
        );
    }
}

export default App;