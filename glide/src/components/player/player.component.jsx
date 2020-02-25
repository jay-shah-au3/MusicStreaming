import React,{Fragment} from 'react';
import Loader from '../loading/loading.component';
import {VideoPlayerContainer} from './player.styles.js';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            youtubeLink : '',
            error:'',
        }
    }
    componentDidMount(){
        const track = {...this.props.match.params};
        fetch(`https://api.genius.com/songs/${track.id}?&access_token=W9YRsCxZ1uJvh97K48L-EfCt50u6H_74Ywuz2oNUg8hwOhTeW8jrvcTOxwNzU0UJ`)
        .then(res=>res.json()).then(res=>{
            let songLinks = res.response.song.media;
            let youtubeLink = ''
            songLinks.forEach( song => {
                if(song.provider==='youtube')
                    youtubeLink = song.url;
            });
            if(youtubeLink){
                let videoIdIndex = youtubeLink.indexOf('=');
                let videoId = youtubeLink.slice(videoIdIndex+1);                
                this.setState({youtubeLink:`https://www.youtube.com/embed/${videoId}`,error:''});
            }
            else{
                this.setState({error:"Could Not fetch the song!"})
            }
        });
    }
    render(){        
       const track =  {...this.props.match.params}
        return(
            <div>
                {
                    this.state.youtubeLink.length===0 ? this.state.error.length !== 0 ? 
                    <h3 style={{color:"white"}}> Can't Stream {track.title.charAt(0).toUpperCase()+track.title.slice(1).replace(/[+]/g," ")}  <i>{" by "+track.artist.replace(/[+]/g," ")}</i></h3>
                    :
                    <Loader/> 
                    : 
                    <Fragment>
                        <VideoPlayerContainer title ="song" src={`${this.state.youtubeLink}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                        <h3 style={{color:"white"}}>{track.title.charAt(0).toUpperCase()+track.title.slice(1).replace(/[+]/g," ")}  <i>{" by "+track.artist.replace(/[+]/g," ")}</i></h3>
                    </Fragment>                    
                } 
            </div>
            )
    }
}


export default (Player);