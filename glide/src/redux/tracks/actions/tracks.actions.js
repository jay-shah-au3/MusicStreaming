export const getTracksStarted = (category) => ({
    type:'GET_TRACKS_STARTED',
    category
});

export const getTracksSuccess = (tracks, category) => ({
    type:'GET_TRACKS_SUCCESS',
    category,
    payload:tracks
});

export const getTracks = (url, category) => {
    return (dispatch)  => {
        dispatch(getTracksStarted(category));
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            let arr = res.tracks.track;
            let promises = arr.map(track=>{
                return fetch(`https://api.genius.com/search?q=${track.name}&access_token=W9YRsCxZ1uJvh97K48L-EfCt50u6H_74Ywuz2oNUg8hwOhTeW8jrvcTOxwNzU0UJ`,
                    {
                        header: {
                            'Access-Control-Allow-Origin':'*',
                          }
                    }
                )
                    .then(res=>res.json()).then(res);
            });
            Promise.all(promises)
            .then( res => {
                const len = res.length;
                let tracks =[]
                for(let i=0;i<len;i++){
                    let obj = {};
                    let result = res[i].response.hits[0].result;
                    obj["id"] = result.id;
                    if(i===88)
                        obj["image"] = result.song_art_image_thumbnail_url;
                    else
                        obj["image"] = result.header_image_thumbnail_url;
                    // eslint-disable-next-line                        
                    obj["title"] = result.title.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
                    obj["artist"] = result.primary_artist.name;
                    tracks.push(obj);
                }
                dispatch(getTracksSuccess(tracks, category))
            });
        });
    }
}
