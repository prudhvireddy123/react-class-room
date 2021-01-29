import React, { Component } from 'react'
import ClassRoom from '../../components/ClassRoom/ClassRoom'
import './class-room-explain.css'
import SelectedClassRoom from '../../components/SelectedClassRoom/SelectedClassRoom'
import { connect } from 'react-redux'
import { selectClassRoom, loadClassRoom, onSearchRequested } from '../../store/actions'

class ClassRoomExplain extends Component {
    constructor(props) {
        super(props)
        this.state = { "searchText": "" }
        this.onSearchChanged = this.onSearchChanged.bind(this)
    }
    onClassRoomSelected = (classRoomId) => {
        const classRoom = this.props.classRooms.filter(classRoom => classRoom.id === classRoomId)
        this.props.onSelectedClassRoom(classRoom[0])
    }

    componentDidMount() {
        this.props.loadClassRooms()
    }

    onSearchChanged(event) {
        this.setState({ "searchText": event.target.value })
    }
    onSearchKeyDown = (event) => {
        if (event.keyCode === 13) {
            console.log("Clicked on Enter")
            this.props.onSearchRequested(this.state.searchText)
        } else {
            console.log(`Clicked on ${event.keyCode}`)
        }
    }

    render() {
        const { classRooms, classRoomsSearchResults } = this.props
        const displayClassRooms = classRoomsSearchResults.length > 0 ? classRoomsSearchResults : classRooms
        return (
            <div className="class-room-explain">

                <div className="class-room-list">
                    <div>
                        <input type="text" id="search" value={this.state.searchText} onChange={this.onSearchChanged} onKeyDown={this.onSearchKeyDown} />
                    </div>
                    {displayClassRooms && displayClassRooms.map(((classRoom, i) => {
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
        classRooms: state.classRooms.classRooms,
        selectedClassRoom: state.classRooms.selectedClassRoom,
        classRoomsSearchResults: state.classRooms.classRoomsSearchResults
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedClassRoom: (classRoom) => dispatch(selectClassRoom(classRoom)),
        loadClassRooms: () => dispatch(loadClassRoom()),
        onSearchRequested: (searchKey) => dispatch(onSearchRequested(searchKey))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassRoomExplain)