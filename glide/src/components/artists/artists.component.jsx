import React from 'react';
import {connect} from 'react-redux';
import {getArtists} from '../../redux/artists/actions/artist.actions';
import Loader from '../loading/loading.component';
import DisplayArtists from './display-artists.component';

class Artists extends React.Component {
    componentDidMount(){
        if(this.props.artists===undefined || this.props.artists.length===0)
            this.props.getArtists("https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json&limit=100&page=1&page=2");
    }
    render(){
        return(
            <div>
                { this.props.isLoading===undefined || this.props.isLoading ? 
                    <Loader/> :                
                    <DisplayArtists artists={this.props.artists}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    artists:state.allArtists.artists,
    isLoading:state.allArtists.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    getArtists : (url) => dispatch(getArtists(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(Artists);