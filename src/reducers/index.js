import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Jeremy' , duration: '5:12' },
        { title: 'I', duration: '4:01'},
        { title: 'Comfortably Numb', duration: '5:10'},
        { title: 'Boredom', duration: '3:25'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})