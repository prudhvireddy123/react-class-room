import React from 'react'
import './selected-class-room.css'

export default function SelectedClassRoom(props) {
    const { classRoom } = props

    return (
        < div className="selected-class-room">
            {classRoom && <h3>Selected Class room is {classRoom.name}</h3>}
        </div >
    )
}
