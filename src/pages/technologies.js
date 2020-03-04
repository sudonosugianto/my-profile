import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Button, Icon } from 'antd'
import NavBar from '../components/navbar'
import Stack from '../components/stack'
import '../styles/global.css'

class App extends Component {
    state = {
        current: 'tool',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div style={{ textAlign: `center` }}>
                <NavBar handleClick={this.handleClick} current={this.state.current} />
                <Stack/>
                <div style={{ marginTop: `30px`, paddingBottom: `60px` }} >
                    <Link to='experience'>
                        <Button type="primary" size="large">
                            Experience
                            <Icon type="arrow-right" />
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default App;