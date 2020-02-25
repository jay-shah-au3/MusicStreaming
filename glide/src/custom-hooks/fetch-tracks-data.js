import { useState, useEffect } from "react";

function FetchTracksData(url1, params) {
    let [loading, setLoading] = useState(true);
    let [tracks, setTracks] = useState([]);
    useEffect(() => {
        async function fetchTracks(){
            let result =  await fetch(url1,
                {
                    method: 'GET',                 
                }
            )
            .then(res => res.json()).then(res=>{
                if(params.artist===undefined)
                   return res.tracks.track;
                else
                   return res.toptracks.track;
            });
            let promises = result.map( track => {
                 let name = track.name.replace(/\+/g,'+');                
                return fetch(`https://api.genius.com/search?q=${name.replace(/[^a-zA-Z 0-9]+/g,'')}&access_token=W9YRsCxZ1uJvh97K48L-EfCt50u6H_74Ywuz2oNUg8hwOhTeW8jrvcTOxwNzU0UJ`,
                    {
                        method:'GET',
                    }
                )
                .then(res=>res.json()).then(res=>res);
            });
            
            let artistInfo = await Promise.all(promises);
            let artistDetails = [];
            artistInfo.forEach( (artist,index) =>{
                let obj = {};
                let response = artist.response.hits[0];
                if(response!==undefined){
                    if(params.artist===undefined){
                        obj["id"] = response.result.id;
                        // eslint-disable-next-line                         
                        obj["title"] = response.result.title.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
                        obj["artist"] = response.result.primary_artist.name;
                        obj["image"] = response.result.song_art_image_thumbnail_url;
                        artistDetails.push(obj);
                    }
                    else{
                        response = artist.response.hits;
                        let len = response.length;
                        for(let i=0;i<len;i++){
                            if(response[i].result.primary_artist.name.toLowerCase()===params.artist.replace(/\+/g,' ').toLowerCase()){
                                obj["id"] = response[i].result.id;
                                // eslint-disable-next-line                         
                                obj["title"] = response[i].result.title.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
                                obj["artist"] = params.artist.replace(/\+/g,' ');
                                obj["image"] = response[i].result.song_art_image_thumbnail_url;
                                artistDetails.push(obj);
                                break;
                            }
                        }                        
                    }
                }
            });
            setTracks(artistDetails);
            setLoading(false);
        }
        fetchTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps        
    },[]);

    return {
        loading,
        tracks
    }
}

export default FetchTracksData;