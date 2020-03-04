import React, { Component } from 'react'
import { Row, Col, Descriptions } from 'antd';
import { Icon, Button } from 'antd'
import NavBar from '../components/navbar'

import Alterra from '../../static/alterra.png'
import Juwono from '../../static/juwono-sugianto.jpg'
import Appware from '../../static/appware.jpg'

import '../styles/global.css'

class App extends Component {
    state = {
        current: 'project',
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
                <div className="projects">
                    <div className="project-item">
                        <Row>
                            <Col span={12}>
                                <div style={{ textAlign: `center` }}>
                                    <img className="projects-img" src={Alterra} alt="" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <Descriptions title="Alterra Smart Biller">
                                    <p>
                                        Real-time automation for payment of bills such as pulsa, electricity, pdam, bpjs, etc.
                                        <br />
                                        Role: Back End Developer
                                        <br />
                                        Technologies: Kafka, Flask, Pandas, MariaDB
                                    </p>
                                </Descriptions>
                                <a href="https://www.alterra.id/bpa/" target="_blank" rel="noopener noreferrer">
                                    <Button type="primary" size="small">
                                        Visit
                                    <Icon type="link" />
                                    </Button>
                                </a>
                            </Col>
                        </Row>
                    </div>
                    <div className="project-item">
                        <Row>
                            <Col span={12}>
                                <div style={{ textAlign: `center` }}>
                                    <img className="projects-img" src={Appware} alt="" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <Descriptions title="AppWare">
                                    <p>
                                        Final Project in Alterra Academy Full Stack Software Developer
                                        <br />
                                        Role: Front End Web Developer  
                                        <br />
                                        Technologies: ReactJS, Flask, MySQL 
                                    </p>
                                </Descriptions>
                                <a href="https://appware.halte.id" target="_blank" rel="noopener noreferrer">
                                    <Button type="primary" size="small">
                                        Visit
                                    <Icon type="link" />
                                    </Button>
                                </a>
                            </Col>
                        </Row>
                    </div>
                    <div className="project-item">
                        <Row>
                            <Col span={12}>
                                <div style={{ textAlign: `center` }}>
                                    <img className="projects-img" src={Juwono} alt="" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <Descriptions title="Juwono Sugianto">
                                    <p>
                                        Photographer Juwono Sugianto portfolio website
                                        <br />
                                        Role: Full Stack Web Developerr
                                        <br />
                                        Technologies: Gatsby.js
                                    </p>
                                </Descriptions>
                                <a href="https://clever-snyder-4d9c4d.netlify.com/" target="_blank" rel="noopener noreferrer">
                                    <Button type="primary" size="small">
                                        Visit
                                    <Icon type="link" />
                                    </Button>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
