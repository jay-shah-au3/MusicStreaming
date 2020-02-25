const INITIAL_STATE = {
    artists:[],
    isLoading:false,
}

const artistsReducer = (state = INITIAL_STATE, action) => {
    if(action.type==='GET_ARTISTS_STARTED')
        return {
            ...state,
            isLoading:true
        }
    if(action.type === 'GET_ARTISTS_SUCCESS'){
        return {
            ...state,
            artists: [...action.payload],
            isLoading:false
        }
    }
    return state
}

export default artistsReducer;