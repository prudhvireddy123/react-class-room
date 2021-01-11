import axios from 'axios'

export const getStudents = (classRoomId) => {
    return axios.get(`/api/students?classRoom=${classRoomId}`).then((res) => {
        return res.data
    }).catch(error => {
        console.log("Error failed to connect api")
        throw error
    })
}