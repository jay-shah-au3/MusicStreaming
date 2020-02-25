import React from 'react';
// import logo from './logo.svg';
import Home from './components/home/home.component'
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header.component';
import Tracks from './components/tracks/tracks.component';
import Player from './components/player/player.component';
import IndiaTop50 from './components/tracks/IndiaTop50.component';
import BillBoardTop50 from './components/tracks/billboardTop50.component';
import Artists from './components/artists/artists.component';
import ArtistTracks from './components/artists/artist-tracks.component';
import Tags from './components/tags/tags.component';
import TagTracks from './components/tags/tag-tracks.component';
import Search from './components/search/search.component';

class App extends React.Component {
  componentDidMount(){
    // fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=627d96b414f95a9921f55e6a4b130cb3&format=json')
    // .then(data => data.json())
    // .then(response => console.log(response));
  }
  render(){
    return (
      <Router>
        <Header/>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/tracks' component={Tracks}></Route>
        <Route path='/tracks/:artist/:title/:id' component={Player}></Route>
        <Route exact path='/indiatop50' component={IndiaTop50}></Route>
        <Route exact path='/billboardtop50' component={BillBoardTop50}></Route>
        <Route exact path='/artists' component={Artists}></Route>
        <Route exact path='/artists/:artist/:id' component={ArtistTracks}></Route>
        <Route exact path='/tags' component={Tags}></Route>
        <Route exact path='/:tag/tracks' component={TagTracks}></Route>
        <Route exact path='/search' component={Search}></Route>
      </Router>        
    );
  }
}

export default App;

// Application name	glide
// API key	627d96b414f95a9921f55e6a4b130cb3
// Shared secret	c3bd852560ad1a46ce702c6dd8938927
// Registered to	cj_211