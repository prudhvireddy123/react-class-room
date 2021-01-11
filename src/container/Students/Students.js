import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getStudents } from '../../api/students-api'
import Loader from '../../components/Loader/Loader'

export default class Students extends Component {

    constructor(props) {
        super(props)
        this.state = { students: [], loading: false, error: false }
    }
    componentDidMount() {
        this.setState({ loading: true })
        const { classRoom } = this.props.match.params
        getStudents(classRoom).then(students => {
            this.setState({ students: students, loading: false, error: false })
        }).catch(error => {
            this.setState({ students: [], loading: false, error: true })
        })
    }

    render() {
        return (
            <div>
                {this.state.loading && (<Loader />)}
                {this.state.error && (<h2>Failed to load</h2>)}
                {this.state.students.map((student, key) => {
                    return <h3 key={key}>{student.name}</h3>
                })}
            </div>
        )
    }
}
