import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Button, Icon } from 'antd'
import '../styles/global.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 className="profile">
                    Hi! I'm Sudono a
                    <br />
                    Software Developer
                </h1>
                <p className="message">
                    I have experience developing websites and applications using Python and JavaScript.
                </p>
                <Link to='technologies'>
                    <Button style={{ marginTop: `10px` }} type="primary" size="large">
                        Technologies
                        <Icon type="arrow-right" />
                    </Button>
                </Link>
            </div>
        );
    }
}

export default About;