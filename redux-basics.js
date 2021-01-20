const redux = require('redux');

const createStore = redux.createStore;

const initialState = { studentsList: [] }
//Reducers
const rootReducer = (state = initialState, action) => {
    console.log("---------------Reducer action--------")
    console.log(action)
    console.log("-----------------------")
    if (action.type === "ADD_STUDENT") {
        // state.studentsList.append(action.studentData)
        return { ...state, studentsList: [...state.studentsList, { ...action.studentData, id: state.studentsList.length }] }
    } else if (action.type === "DELETE_STUDENT") {
        const studentsList = [...state.studentsList]
        const id = action.studentId
        newStudentsList = studentsList.filter(student => student.id != id)
        return { ...state, studentsList: newStudentsList }
    }

    return state
}
//Store
const store = createStore(rootReducer)
console.log("-----------initial state------------")
console.log(store.getState())
console.log("-----------------------")

//Subscriptions
store.subscribe(() => {
    console.log("--------------Subscription----------")
    console.log(store.getState())
    console.log("-------------------------")
})
//Actions
store.dispatch({
    type: "ADD_STUDENT", studentData: {
        "age": 38,
        "name": "Ellis",
        "email": "ellis@gmail.info",
        "phone": "+1 (951) 488-2913"
    }
})

console.log("-----------State 1------------")
console.log(store.getState())
console.log("-----------------------")

//Actions
store.dispatch({
    type: "ADD_STUDENT", studentData: {
        "age": 29,
        "name": "Prudhvi",
        "email": "Prudhvi@gmail.info",
        "phone": "+1 (232) 488-2913"
    }
})

console.log("-----------State 2------------")
console.log(store.getState())
console.log("-----------------------")
store.dispatch({
    type: "DELETE_STUDENT", studentId: 1
})
console.log("-----------Delete State 1------------")
console.log(store.getState())
console.log("-----------------------")
