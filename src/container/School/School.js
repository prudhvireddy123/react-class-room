import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassRoom from '../../components/ClassRoom/ClassRoom';
import SelectedClassRoom from '../../components/SelectedClassRoom';
import Loader from '../../components/Loader/Loader'
import './School.css'
import { getClassRooms } from '../../api/classroom-api'

// /api/classrooms - GET 
// /api/Classrooms- POST
// /api/classrooms- PUT
// /api/classrooms- DELETE
export default class School extends Component {
    static propTypes = {
    }
    constructor(props) {
        super(props)
        this.state = {
            selectedClassRoom: null, classRooms: [],
            loading: false, error: false
        }
    }
    onClassRoomSelected = (classRoomId) => {
        this.props.history.push(`/students/${classRoomId}`)
    }
    componentDidMount() {
        this.setState({ loading: true })
        getClassRooms().then(classrooms => {
            this.setState({ classRooms: classrooms, loading: false, error: false })

        }).catch(error => {
            this.setState({ classRooms: [], loading: false, error: true })
        })
    }
    render() {
        return (
            <div className="class-list">
                <button onClick={() => {
                    this.props.history.push('./add-class')
                }}>Add Classroom</button>
                {this.state.loading && (<Loader />)}
                {this.state.error && (<h2>Failed to load</h2>)}
                {this.state.classRooms.map(((classRoom, i) => {
                    return <ClassRoom key={i} id={classRoom.id} name={classRoom.name} color={classRoom.color}
                        onClassRoomSelected={this.onClassRoomSelected} />
                }))}
            </div>
        )
    }
}
