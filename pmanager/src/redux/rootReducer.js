import {combineReducers} from 'redux'

import authReducer from './auth/authReducer'
import projectsReducer from './projects/projectsReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectsReducer
});

export default rootReducer

