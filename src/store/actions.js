
import { getClassRooms } from '../api/classroom-api'

export const SELECT_CLASSROOM = 'SELECT_CLASSROOM'
export const LOAD_CLASS_ROOMS = 'LOAD_CLASS_ROOMS'
export const LOAD_CLASS_ROOMS_ERROR = 'LOAD_CLASS_ROOMS_ERROR'
export const LOAD_CLASS_ROOMS_LOADING = "LOAD_CLASS_ROOMS_LOADING"
export const LOAD_STUDENTS = 'LOAD_STUDENTS'
export const SELECT_STUDENT = 'SELECT_STUDENT'
export const ON_SEARCH_REQUESTED = 'ON_SEARCH_REQUESTED'


export const loadClassRoom = () => {
    return dispatch => {
        dispatch({ type: LOAD_CLASS_ROOMS_LOADING })
        return getClassRooms().then(res => {
            dispatch({ type: LOAD_CLASS_ROOMS, payload: res })
        }).catch(error => {
            dispatch({ type: LOAD_CLASS_ROOMS_ERROR, payload: "Failed To load" })
        })
    }
}
export const selectClassRoom = (payload) => {
    return {
        type: SELECT_CLASSROOM,
        payload
    }
}

export const onSearchRequested = (searchKey) => {
    return {
        type: ON_SEARCH_REQUESTED,
        payload: searchKey
    }
}

