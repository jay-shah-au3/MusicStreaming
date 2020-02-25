import React from 'react';
import {connect} from 'react-redux';
import {getTracks} from '../../redux/tracks/actions/tracks.actions';
import Loader from '../loading/loading.component';
import DisplayList from '../list-container/display-list.component';


class Tracks extends React.PureComponent {
    componentDidMount(){
        if(this.props.tracks===undefined || this.props.tracks.length===0)
            this.props.getTrack("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json&limit=200&page=1&page=2","songs");
    }
    render(){
        return(
            <div>
                { this.props.isLoading===undefined || this.props.isLoading ? 
                    <Loader/> :                
                    <DisplayList tracks={this.props.tracks}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tracks:state.allTracks.songs.tracks,
    isLoading:state.allTracks.songs.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    getTrack : (url,category) => dispatch(getTracks(url, category))
});


export default connect(mapStateToProps, mapDispatchToProps)(Tracks);