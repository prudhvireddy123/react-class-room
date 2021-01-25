import React, { Component } from 'react'
import ClassRoom from '../../components/ClassRoom/ClassRoom'
import './class-room-explain.css'
import SelectedClassRoom from '../../components/SelectedClassRoom/SelectedClassRoom'
import { connect } from 'react-redux'
import { LOAD_CLASS_ROOMS, SELECT_CLASSROOM } from '../../store/actions'
class ClassRoomExplain extends Component {
    onClassRoomSelected = (classRoomId) => {
        const classRoom = this.props.classRooms.filter(classRoom => classRoom.id === classRoomId)
        this.props.onSelectedClassRoom(classRoom[0])
    }

    componentDidMount() {
        this.props.loadClassRooms()
    }

    render() {
        const { classRooms } = this.props
        return (
            <div className="class-room-explain">
                <div className="class-room-list">
                    {classRooms && classRooms.map(((classRoom, i) => {
                        return <ClassRoom key={i} id={classRoom.id} name={classRoom.name}
                            onClassRoomSelected={this.onClassRoomSelected} />
                    }))}
                </div>
                <div className="selected-class-room">
                    <SelectedClassRoom classRoom={this.props.selectedClassRoom} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classRooms: state.classRooms,
        selectedClassRoom: state.selectedClassRoom
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedClassRoom: (classRoom) => dispatch({ type: SELECT_CLASSROOM, payload: classRoom }),
        loadClassRooms: () => dispatch({ type: LOAD_CLASS_ROOMS })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassRoomExplain)