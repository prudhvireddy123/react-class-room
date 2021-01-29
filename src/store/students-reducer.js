import STUDENTS_TEST_DATA from '../test-api-data/StudentsApiData'
import { LOAD_STUDENTS, SELECT_STUDENT } from './actions'

const initialState = { students: [], selectedStudent: null }

const studentsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_STUDENTS:
            return { ...state, ...{ students: STUDENTS_TEST_DATA } }
        case SELECT_STUDENT:
            console.log(action)
            return { ...state, ...{ selectedStudent: action.payload } }
    }
    return state
}


export default studentsReducer
