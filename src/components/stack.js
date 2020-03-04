import React, { Component } from 'react'

import Python from '../../static/python.png'
import Flask from '../../static/flask.png'
import Django from '../../static/django.png'
// import Jupyter from '../../static/jupyter.png'
// import Numpy from '../../static/numpy.png'
// import Pandas from '../../static/pandas.png'
// import SKLearn from '../../static/scikit-learn.png'

import JavaScript from '../../static/javascript.png'
// import ReactJS from '../../static/react.png'
import GatsbyJS from '../../static/gatsby.png'
// import Bootstrap from '../../static/bootstrap.png'
import Tailwind from '../../static/tailwind.jpg'
// import nodeJS from '../../static/node.png'
import Express from '../../static/express.png'

import PostgreSQL from '../../static/postgresql.png'
import MariaDB from '../../static/mariadb.png'
// import MySQL from '../../static/mysql.png'
import MongoDB from '../../static/mongodb.png'

// import ElasticSearch from '../../static/elastic-search.png'
import Superset from '../../static/superset.png'

import Kafka from '../../static/kafka.png'
// import Redis from '../../static/redis.png'

import Git from '../../static/github.png'
import AWS from '../../static/aws.png'

import '../styles/global.css'

class Stack extends Component {
    render() {
        return (
            <div className="stack">
                <div className="stack-part">
                    <img className="logo-big" src={Python} alt="" />
                    <img className="logo-small" src={Flask} alt="" />
                    <img className="logo-small" src={Django} alt="" />
                    {/* <img className="logo-small" src={Jupyter} alt="" />
                    <img className="logo-small" src={Numpy} alt="" />
                    <img className="logo-small" src={Pandas} alt="" />
                    <img className="logo-small" src={SKLearn} alt="" /> */}
                </div>
                <div className="stack-part">
                    <img className="logo-big" src={JavaScript} alt="" />
                    {/* <img className="logo-small" src={ReactJS} alt="" /> */}
                    <img className="logo-small" src={GatsbyJS} alt="" />
                    <img className="logo-small" src={Tailwind} alt="" />
                    {/* <img className="logo-small" src={Bootstrap} alt="" /> */}
                    {/* <img className="logo-small" src={nodeJS} alt="" /> */}
                    <img className="logo-small" src={Express} alt="" />
                </div>
                <div className="stack-part">
                    <img className="logo-big" src={PostgreSQL} alt="" />
                    <img className="logo-small" src={MariaDB} alt="" />
                    {/* <img className="logo-small" src={MySQL} alt="" /> */}
                    <img className="logo-small" src={MongoDB} alt="" />
                    <img className="logo-small" src={Kafka} alt="" />
                    {/* <img className="logo-small" src={Redis} alt="" /> */}

                </div>
                <div>
                    <img className="logo-big" src={Superset} alt="" />
                    {/* <img className="logo-small" src={ElasticSearch} alt="" /> */}
                    <img className="logo-small" src={Git} alt="" />
                    <img className="logo-small" src={AWS} alt="" />
                </div>
            </div>
        )
    }
}

export default Stack;