import axios from 'axios';

export const getClassRooms = () => {
    return axios.get('/api/classrooms').then((res) => {
        return res.data
    }).catch(error => {
        console.log("Error failed to connect api")
        throw error
    })
}

export const createClassRoom = () => {

}
