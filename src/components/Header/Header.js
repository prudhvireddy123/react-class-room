import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './Header.css'

// const TITLES = { '/': "Classrooms", "/students": }
function Header(props) {

    const getTile = (path) => {
        if (path == "/") {
            return "Classrooms"
        } else if (path.startsWith("/students")) {
            return "Students"
        } else if (path.startsWith("/add-class")) {
            return "Add Class"
        }
    }
    const title = getTile(props.location.pathname)
    return (
        <div className="app-header">
            <h2>{title}</h2>
            <Link to="/about">About</Link>
        </div>
    )
}

export default withRouter(Header)