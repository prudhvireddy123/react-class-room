import TEST_CLASS_ROOMS from '../test-api-data/ClassRoomsTestData'
import { LOAD_CLASS_ROOMS, SELECT_CLASSROOM } from './actions'
const initialState = { classRooms: [], selectedClassRoom: null }


//Reducers
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CLASS_ROOMS:
            return { ...state, ...{ classRooms: TEST_CLASS_ROOMS } }
        case SELECT_CLASSROOM:
            console.log(action)
            return { ...state, ...{ selectedClassRoom: action.payload } }
    }
    return state
}

export default rootReducer;