import React, { Fragment } from 'react';
import { searchForTracks } from './searchForTracks';
import { searchForArtists } from './searchForArtists';
import DisplayList from '../list-container/display-list.component';
import DisplayArtists from '../artists/display-artists.component';
import Loader from '../loading/loading.component'
import { SearchBox, SearchButton, RadioButton, RadioLabel, RadioContainer, FormContainer } from './search.styles.js';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            radioType:'track',
            tracks:[],
            artists:[],
            query:'',
            loading:false
        }
    }
    handleChange = (e) => {
        let key = e.target.name;
        this.setState({[key]:e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let val = this.state.query;
        if(val.trim().length===0)
            this.setState({text:''});
        else{
            this.setState({loading:true});
            if(this.state.radioType==='track'){
                let url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${val}&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json&limit=25`;
                let searchTracks = async () => {
                    let tracks = await searchForTracks(url);
                    this.setState({tracks, artists:[], loading:false});
                }
                searchTracks();
            }
            else{
                let url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${val}&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json&limit=25`;
                let searchArtists = async () => {
                    let artists = await searchForArtists(url);
                    this.setState({artists, tracks:[], loading:false});
                }
                searchArtists();
            }
        }
    }
    render(){   
        const {radioType} = {...this.state};
        let component = "";
        if(radioType==='track' && this.state.tracks.length>0){
            component = <DisplayList tracks={this.state.tracks}/>
        }
        else if(radioType==='artist' && this.state.artists.length>0){
            component = <DisplayArtists artists={this.state.artists}/>
        }

        return(
            <Fragment>
                <FormContainer onSubmit={this.handleSubmit}>
                    <SearchBox onChange={this.handleChange} type="text" placeholder="Search..." name="query"/>
                    <SearchButton type='submit'>Search</SearchButton>
                </FormContainer>        
                <RadioContainer>
                    <RadioLabel htmlFor="track">
                        <RadioButton id="track" value="track" type="radio" defaultChecked={true} name='radioType' onChange={this.handleChange}/>
                        Tracks
                    </RadioLabel>
                    <RadioLabel htmlFor="artist">
                        <RadioButton id="artist" value="artist" type="radio" name='radioType' onChange={this.handleChange}/>
                        Artists
                    </RadioLabel>
                </RadioContainer>
                {this.state.loading?<Loader/>:component}                
            </Fragment>
        )
    }
}

export default Search;