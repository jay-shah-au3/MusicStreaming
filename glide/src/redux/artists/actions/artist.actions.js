export const getArtistsStarted = () => ({
    type:'GET_ARTISTS_STARTED',
});

export const getArtistsSuccess = (artists) => ({
    type:'GET_ARTISTS_SUCCESS',
    payload:artists
});

export const getArtists = (url) => {
    return (dispatch)  => {
        dispatch(getArtistsStarted());
        fetch(url)
        .then(res=>res.json())
        .then(async res=>{
            let arr = res.artists.artist;
            let artists = arr.map( artist => {
               return fetch(`https://api.genius.com/search?q=${artist.name}&limit=1&access_token=W9YRsCxZ1uJvh97K48L-EfCt50u6H_74Ywuz2oNUg8hwOhTeW8jrvcTOxwNzU0UJ`,
                    {
                        method: 'GET',                 
                    }
                )
                .then(res => res.json()).then(res)
            });
            let artistInfo = await Promise.all(artists);
            let artistDetails = [];
            artistInfo.forEach( (artist,index) =>{
                let obj = {};
                let response = artist.response.hits;
                let len = response.length;
                for(let i=0;i<len;i++){
                    if(response[i].result.primary_artist.name.toLowerCase()===arr[index].name.toLowerCase()){
                        obj["id"] = response[i].result.primary_artist.id;
                        obj["artist"] = arr[index].name;
                        obj["image"] = response[i].result.primary_artist.image_url;
                        artistDetails.push(obj);
                        break;
                    }
                }
            });
            dispatch(getArtistsSuccess(artistDetails));
        });
    }
}