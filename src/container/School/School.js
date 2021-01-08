import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassRoom from '../../components/ClassRoom/ClassRoom';
import SelectedClassRoom from '../../components/SelectedClassRoom';
import './School.css'

import CLASS_ROOMS from '../../test-api-data/ClassRoomsTestData'

export default class School extends Component {
    static propTypes = {
    }
    constructor(props) {
        super(props)
        this.state = { selectedClassRoom: null, classRooms: CLASS_ROOMS }
    }
    onClassRoomSelected = (classRoomId) => {
        this.props.history.push(`/students/${classRoomId}`)
    }
    render() {
        return (
            <div className="class-list">
                {this.state.classRooms.map(((classRoom, i) => {
                    return <ClassRoom key={i} id={classRoom.id} name={classRoom.name} color={classRoom.color}
                        onClassRoomSelected={this.onClassRoomSelected} />
                }))}
            </div>
        )
    }
}
