import chatReducer from './chatReducer'
import {combineReducers} from 'redux'

import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    chat: chatReducer,
    firestore: firestoreReducer
})

export default rootReducer