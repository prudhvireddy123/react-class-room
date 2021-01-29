import TEST_CLASS_ROOMS from '../test-api-data/ClassRoomsTestData'
import {
    LOAD_CLASS_ROOMS, SELECT_CLASSROOM,
    LOAD_CLASS_ROOMS_LOADING,
    LOAD_CLASS_ROOMS_ERROR,
    ON_SEARCH_REQUESTED
} from './actions'
const initialState = {
    classRooms: [], selectedClassRoom: null,
    classRoomsSearchResults: [],
    loading: false, error: false
}

//Reducers
const classRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CLASS_ROOMS_LOADING:
            return { ...state, ...{ loading: true } }
        case LOAD_CLASS_ROOMS:
            return { ...state, ...{ classRooms: action.payload } }
        case SELECT_CLASSROOM:
            console.log(action)
            return { ...state, ...{ selectedClassRoom: action.payload } }
        case LOAD_CLASS_ROOMS_ERROR:
            return { ...state, ...{ error: true } }
        case ON_SEARCH_REQUESTED:
            const classRooms = state.classRooms
            const classRoomsSearchResults = classRooms.filter((classRoom) => {
                return classRoom.name.toLowerCase().startsWith(action.payload.toLowerCase())
            })
            return { ...state, classRoomsSearchResults }
    }
    return state
}

export default classRoomReducer;