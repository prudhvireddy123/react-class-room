import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getStudents } from '../../api/students-api'
import Loader from '../../components/Loader/Loader'
import './Students.css'
import Student from '../../components/Student/Student'
import useCustomHttp from '../../custom-hooks/useCustomHttp'

function Students(props) {

    const [timeup, SetTimeUP] = useState(1)
    const [loading, error, students] = useCustomHttp({ url: `/api/students?classRoom=${props.match.params.classRoom}` })

    const onClickAddStudent = () => {
        props.history.push('/add-student')
    }


    return (
        <div>
            <button className='add-btn' onClick={onClickAddStudent}>Add Student</button>
            {loading && (<Loader />)}
            {error && (<h2>Failed to load</h2>)}
            <div className="students-details">
                {students && students.map((student, key) => {
                    return <Student key={key} student={student} />
                })}
            </div>
        </div>
    )
}


export default Students