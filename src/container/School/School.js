import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ClassRoom from '../../components/ClassRoom/ClassRoom';
import SelectedClassRoom from '../../components/SelectedClassRoom';
import Loader from '../../components/Loader/Loader'
import './School.css'
import { getClassRooms } from '../../api/classroom-api'
import useCustomHttp from '../../custom-hooks/useCustomHttp';

export default function School(props) {
    const [state, setState] = useState({
        selectedClassRoom: null,
    })

    const [timerCount, setTimerCount] = useState(1)
    const [loading, error, classRooms] = useCustomHttp({ url: "/api/classrooms" })

    const onClassRoomSelected = (classRoomId) => {
        props.history.push(`/students/${classRoomId}`)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTimerCount((count) => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className="class-list">
            <button className="add-btn" onClick={() => {
                props.history.push('./add-class')
            }}>Add Classroom</button>
            {loading && (<Loader />)}
            {error && (<h2>Failed to load</h2>)}
            <h3>Timer {timerCount}</h3>
            {classRooms && classRooms.map(((classRoom, i) => {
                return <ClassRoom key={i} id={classRoom.id} name={classRoom.name} color={classRoom.color}
                    onClassRoomSelected={onClassRoomSelected} />
            }))}
        </div>
    )
}
