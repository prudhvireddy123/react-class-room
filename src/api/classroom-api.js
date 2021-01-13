import axios from 'axios';

export const getClassRooms = () => {
    return axios.get('/api/classrooms').then((res) => {
        return res.data
    }).catch(error => {
        console.log("Error failed to connect api")
        throw error
    })
}


export const createClassRoom = (data) => {
    return axios.post('/api/classrooms', data).then((res) => {
        return res.data
    }).catch(error => {
        console.log("Error failed to Create The Class")
        throw error
    })

}
