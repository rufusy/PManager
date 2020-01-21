import {CREATE_PROJECT_REQUEST} from './projectActionTypes'

export const createProjectRequest = project => {
    return {
        type: CREATE_PROJECT_REQUEST,
        project: project
    }
} 


export const createProject = project => {
    return (dispatch) => {
        // perfom some async work
        dispatch(createProjectRequest(project))
    }
}
