import React from 'react';
import MenuItems from '../../data/menu_items';
import {MusicCategoriesContainer, MusicSections, CategoryTitle} from './home.styles';

function Home(props){
    return (
        <MusicCategoriesContainer>
            {
                MenuItems.map( (menuItem) => {
                    return(
                    <MusicSections key={menuItem.id} onClick={()=>props.history.push(menuItem.link)} >
                        <CategoryTitle>{menuItem.name}</CategoryTitle>
                    </MusicSections>
                )})
            }
        </MusicCategoriesContainer>
    )
}
export default Home;