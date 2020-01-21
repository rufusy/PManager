import {CREATE_PROJECT_REQUEST} from './projectActionTypes'

const initialState = {
    projects:[
        {id:1, title:'What\'s the reason', content:'bla bla bla bla '},
        {id:2, title:'What\'s the reason', content:'bla bla bla bla '},
        {id:3, title:'What\'s the reason', content:'bla bla bla bla '},
        {id:4, title:'What\'s the reason', content:'bla bla bla bla '},
        {id:5, title:'What\'s the reason', content:'bla bla bla bla '}
    ]
}

const projectsReducer = (state=initialState, action) => {
    switch (action) {
        case CREATE_PROJECT_REQUEST:
            console.log('created project', action.project)
            break;
    
        default:
            return state;
    }
}

export default projectsReducer