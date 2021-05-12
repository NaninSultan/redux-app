import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Yesterday', duration: '2:05' },
        { title: 'Hey Jude', duration: '8:09' },
        { title: 'A Hard Day\'s Night', duration: '2:38' },
        { title: 'Lucy in the Sky', duration: '3:28' },
    ]
};

const selectedSongReducer = (selectSong = null, action) => {
    if(action.type === 'SONG_SELECTED') return action.payload;
    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectSong: selectedSongReducer
});