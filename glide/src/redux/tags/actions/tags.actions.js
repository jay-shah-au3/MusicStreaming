export const getTagsStarted = () => ({
    type:'GET_TAGS_STARTED',
});

export const getTagsSuccess = (tags) => ({
    type:'GET_TAGS_SUCCESS',
    payload:tags
});

export const getTags = (url) => {
    return async (dispatch)  => {
        dispatch(getTagsStarted());
        let tags = await fetch(url)
                .then(res=>res.json())
                .then(res => res.tags.tag)
                .then(res => {
                    let arr = []
                    res.forEach(tag => {
                        arr.push(tag.name);
                    });
                    return arr;
                });
        dispatch(getTagsSuccess(tags));
    }
}