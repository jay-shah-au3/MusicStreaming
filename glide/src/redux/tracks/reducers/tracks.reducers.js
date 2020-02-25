const INITIAL_STATE = {
    songs:{},
    IndiaTop50:{},
    billBoardTop50:{}
}

const tracksReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET_TRACKS_STARTED':
            return Object.assign({}, state, state[action.category].isLoading=true);
        // state[action.category].isLoading = true;
        case 'GET_TRACKS_SUCCESS':            
            state[action.category].tracks = action.payload;
            state[action.category].isLoading = false;
            return {
                ...state,
                
            } 
        default:
            return state
    }
}

export default tracksReducer;