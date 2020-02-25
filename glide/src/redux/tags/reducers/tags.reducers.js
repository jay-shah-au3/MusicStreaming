const INITIAL_STATE = {
    tags : [],
    isLoading:false
}

const tagReducer = (state=INITIAL_STATE, action) => {
    if(action.type === 'GET_TAGS_STARTED')
        return {
            ...state,
            isLoading:true,
        }
    if(action.type === 'GET_TAGS_SUCCESS')
        return {
            ...state,
            tags:action.payload,
            isLoading:false
        }
    return state;
}

export default tagReducer;