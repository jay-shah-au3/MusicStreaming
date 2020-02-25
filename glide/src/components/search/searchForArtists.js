export async function searchForArtists(url){
    let artistNames = await fetch(url)
    .then(res=>res.json())
    .then(res=>res.results.artistmatches.artist);    

    let artists = artistNames.map( artist => {
        return fetch(`https://api.genius.com/search?q=${artist.name}&limit=1&access_token=W9YRsCxZ1uJvh97K48L-EfCt50u6H_74Ywuz2oNUg8hwOhTeW8jrvcTOxwNzU0UJ`,
             {
                 method: 'GET',                 
             }
         )
         .then(res => res.json());
     });
     let artistInfo = await Promise.all(artists);
     return getArtistsDetails(artistNames, artistInfo);
}

function getArtistsDetails(arr, artistInfo){
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
    return artistDetails; 
}