import React, { Component } from 'react'
import PropTypes from 'prop-types'

import students from '../../test-api-data/StudentsApiData'
export default class Students extends Component {
    static propTypes = {
    }

    render() {
        const { classRoom } = this.props.match.params
        const classRoomStudents = students.filter((student) => student.classRoom == classRoom)
        return (
            <div>
                {classRoomStudents.map((student, key) => {
                    return <h3 key={key}>{student.name}</h3>
                })}
            </div>
        )
    }
}
