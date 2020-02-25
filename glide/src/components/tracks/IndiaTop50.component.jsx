import React from 'react';
import {connect} from 'react-redux';
import {getTracks} from '../../redux/tracks/actions/tracks.actions';
import Loader from '../loading/loading.component';
import DisplayList from '../list-container/display-list.component';


class IndiaTop50 extends React.PureComponent {
    componentDidMount(){
        if(this.props.tracks===undefined || this.props.tracks.length===0)
            this.props.getTrack("https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json", "IndiaTop50");
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
    tracks:state.allTracks.IndiaTop50.tracks,
    isLoading:state.allTracks.IndiaTop50.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    getTrack : (url, category) => dispatch(getTracks(url, category))
});


export default connect(mapStateToProps, mapDispatchToProps)(IndiaTop50);
