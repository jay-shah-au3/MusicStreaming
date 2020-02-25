import React from 'react';
import {Link} from 'react-router-dom';
import { 
    ListContainer,
    ImageContainer,
    TextContainer,
    TitleContainer,
    ArtistContainer 
} from './display-list.styles.js';

function DisplayList({tracks}){
    return(
        <ListContainer>
        {
            tracks.map( (track,index) => {
                return(
                    <li key={track.title+index}>                                         
                        <Link target="_blank" to = {{ pathname:"/tracks/"+track.artist.replace(/ /g, '+')+"/"+track.title.replace(/ /g, '+')+"/"+track.id}}> 
                            <ImageContainer alt="tracks" src={track.image}/>
                                <TextContainer>
                                    <TitleContainer>
                                        {track.title.charAt(0).toUpperCase()+track.title.slice(1)}
                                    </TitleContainer>
                                    <ArtistContainer>
                                        by <i>{track.artist}</i>
                                    </ArtistContainer>
                                </TextContainer>
                        </Link>
                        <hr/>
                    </li>
                )
            } )                        
        }
        </ListContainer>
    )
}

export default DisplayList;