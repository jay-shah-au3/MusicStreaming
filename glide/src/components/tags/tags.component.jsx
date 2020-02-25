import React from 'react';
import {connect} from 'react-redux';
import {getTags} from '../../redux/tags/actions/tags.actions';
import Loader from '../loading/loading.component';
import TagDisplayList from './tag-display-list.component';

class Tags extends React.PureComponent {
    componentDidMount(){
        if(this.props.tags===undefined || this.props.tags.length===0)
            this.props.getTags("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json");
    }
    render(){
        return(
            <div>
                { this.props.isLoading===undefined || this.props.isLoading ? 
                    <Loader/> :                
                    <TagDisplayList tags={this.props.tags}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tags:state.allTags.tags,
    isLoading:state.allTags.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    getTags : (url) => dispatch(getTags(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(Tags);