import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'gatsby'
import '../styles/global.css'

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Menu onClick={this.props.handleClick}
                    selectedKeys={[this.props.current]}
                    mode="horizontal"
                    defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">
                        <Link to='/'>
                            <Icon type="home" />
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="tool">
                        <Link to='technologies'>
                            <Icon type="tool" />
                            Technologies
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="user">
                        <Link to='/experience'>
                            <Icon type="user" />
                            Experience
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="project">
                        <Link to='/projects'>
                            <Icon type="project" />
                            Projects
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="https://www.github.com/sudonosugianto" target="_blank" rel="noopener noreferrer">
                            <Icon type="github" />
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="https://www.linkedin.com/in/sudono-sugianto-605783134/" target="_blank" rel="noopener noreferrer">
                            <Icon type="linkedin" />
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="https://www.instagram.com/sudonosugianto/" target="_blank" rel="noopener noreferrer">
                            <Icon type="instagram" />
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default NavBar