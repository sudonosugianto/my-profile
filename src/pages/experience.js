import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Timeline, Icon, Button } from 'antd'
import NavBar from '../components/navbar'
import '../styles/global.css'

class Experience extends Component {
    state = {
        current: 'user',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <NavBar handleClick={this.handleClick} current={this.state.current} />
                <div className="experience">
                    <Timeline mode="alternate">
                        <Timeline.Item>
                            <h3>Now</h3>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>December 2019</h3>
                            Part-time Alterra Academy Mentor
                            <p>
                                Assist mentees in learning basic programming with Python
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>December 2018</h3>
                            Data Analyst at Alterra
                            <p>
                                Develop Automation, APIs and Reports for Business and Operations Team
                            </p>
                        </Timeline.Item>
                        <Timeline.Item color="gray">
                            <h3>December 2018</h3>
                            Graduated from Alterra Academy
                        </Timeline.Item>
                        <Timeline.Item color="gray">
                            <h3>September 2018</h3>
                            Alterra Academy - Full Stack Software Developer
                            <p>Learn Web Development tools such as ReactJS, Flask, MySQL, Git, Docker, etc.
                            </p>
                        </Timeline.Item>
                        <Timeline.Item color="gray">
                            <h3>July 2018</h3>
                            Graduated from Universitas Indonesia
                            <p>
                                Bachelor of Environmental Health, GPA 3.77
                            </p>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div style={{ textAlign: `center`, paddingBottom: `20px` }}>
                    <Link to='projects'>
                        <Button type="primary" size="large">
                            Projects
                            <Icon type="arrow-right" />
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Experience;