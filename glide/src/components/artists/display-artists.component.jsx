import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArtistCollectionContainer, 
    ArtistCardContainer,
    ImageContainer,
    OverlayTextContainer}
    from './display-artists.styles.js'

function DisplayArtists({artists}) {
    return(
        <ArtistCollectionContainer>
            {
                artists.map( (artist) => {
                    return (  
                        <ArtistCardContainer key={artist.id}>
                            <Link target="_blank" to={`/artists/${artist.artist.replace(/ /g, "+")}/${artist.id}`}>                          
                                <ImageContainer src={artist.image}/>
                                <OverlayTextContainer>{artist.artist}</OverlayTextContainer>
                            </Link>
                        </ArtistCardContainer>
                    );
                })
            }
        </ArtistCollectionContainer>
    )
}

export default DisplayArtists;