import React, { useEffect, useMemo } from 'react'

function Student(props) {
    useEffect(() => {
        console.log("After rendering")
        return () => {
            console.log("Student  cleanup")
        }
    }, [])
    return (
        <div>
            <h3>{props.student.name}</h3>
            <h3>{props.student.email}</h3>
            <h3>{props.student.classRoom}</h3>
        </div>
    )
}

export default React.memo(Student)