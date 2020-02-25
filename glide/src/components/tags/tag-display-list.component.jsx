import React from 'react';
import {Link} from 'react-router-dom';
import {TagCollectionContainer, TagContainer, BackgroundContainer, OverlayContainer} from './tag-display-list.styles';

function TagDisplayList({tags}){
    return(
        <TagCollectionContainer>
            {
                tags.map( (tag,index) => {
                    return (  
                        <TagContainer key={tag+index}>
                            <Link to={`/${tag.replace(/ /g, "+")}/tracks`}>                          
                                <BackgroundContainer />
                                <OverlayContainer>{tag[0].toUpperCase()}{tag.slice(1)}</OverlayContainer>
                            </Link>
                        </TagContainer>
                    );
                })
            }
        </TagCollectionContainer>
    )    
}

export default TagDisplayList;