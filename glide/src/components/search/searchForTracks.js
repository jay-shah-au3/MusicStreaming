export async function searchForTracks(url){
    let tracks = await fetch(url)
    .then(res=>res.json())
    .then(res=>res.results.trackmatches.track);    
    let promises = tracks.map(track=>{
        return fetch(`https://api.genius.com/search?q=${track.name}&access_token=W9YRsCxZ1uJvh97K48L-EfCt50u6H_74Ywuz2oNUg8hwOhTeW8jrvcTOxwNzU0UJ`,
            {
                method:'GET'
            }
        )
        .then(res=>res.json());
    });
    let res = await Promise.all(promises);
    return getTracks(res);
}

function getTracks(res){
    const len = res.length;
    let tracks =[];
    for(let i=0;i<len;i++){
        if(res[i].response.hits.length!==0){
            let obj = {};
            let result = res[i].response.hits[0].result;
            obj["id"] = result.id;
            obj["image"] = result.header_image_thumbnail_url;
            // eslint-disable-next-line                        
            obj["title"] = result.title.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
            obj["artist"] = result.primary_artist.name;
            tracks.push(obj);
        }
    }
    return tracks;
}
