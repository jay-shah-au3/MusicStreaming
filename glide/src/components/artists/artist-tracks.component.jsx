import React,{Fragment} from 'react';
import {useParams} from 'react-router-dom'
import Loader from '../loading/loading.component';
import DisplayList from '../list-container/display-list.component';
import { ArtistCoverContainer, ArtistCoverImageContainer, TextContainer } from './artist-cover.styles.js';
import FetchTracksData from '../../custom-hooks/fetch-tracks-data';

function ArtistTracks(){
    let params = useParams();
    const {loading, tracks} = FetchTracksData(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${params.artist.replace('&+','')}&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json`,params);

    let img = tracks[0];
    let link = '';
    if(img!==undefined)
        link = img.image;
    return (
        <div>
            {
                loading===undefined || loading?<Loader/>
                :
                <Fragment>
                    <ArtistCoverContainer>
                        <ArtistCoverImageContainer alt ="cover" src = {link}/>
                        <TextContainer>{params.artist.replace(/\+/g, ' ')}</TextContainer>
                    </ArtistCoverContainer>
                    <DisplayList tracks={tracks}/>
                </Fragment>
            }
        </div>
    )
}

export default ArtistTracks;