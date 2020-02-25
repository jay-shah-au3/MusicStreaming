import {combineReducers} from 'redux';
import tracksReducer from './tracks/reducers/tracks.reducers';
import artistsReducer from './artists/reducers/artist.reducers';
import tagReducer from './tags/reducers/tags.reducers';

const rootReducer = combineReducers({
    allTracks:tracksReducer,
    allArtists: artistsReducer,
    allTags:tagReducer
});

export default rootReducer;