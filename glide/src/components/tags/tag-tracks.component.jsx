import React from 'react';
import {useParams} from 'react-router-dom'
import Loader from '../loading/loading.component';
import DisplayList from '../list-container/display-list.component';
import FetchTracksData from '../../custom-hooks/fetch-tracks-data';

function TagTracks(){
    let params = useParams();
    const {loading, tracks} = FetchTracksData(`https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${params.tag}&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json`,params);
    return (
        <div>
            {
                loading===undefined || loading?<Loader/>
                : 
                <DisplayList tracks={tracks}/>
            }
        </div>
    )
}

export default TagTracks;